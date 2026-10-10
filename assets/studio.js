(() => {
  const root = document.getElementById('ums-studio');
  if (!root) return;
  const read = (key, fallback) => {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  };
  const save = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Private browsing may disable storage. */ }
  };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let motion = read('ums-motion', 'on') === 'on' && !reduced.matches;
  const applyTheme = (theme) => {
    theme = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    document.documentElement.dataset.studioTheme = theme;
    root.querySelectorAll('[data-theme-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
    });
    save('ums-theme', theme);
  };
  applyTheme(read('ums-theme', 'dark'));
  root.querySelectorAll('[data-theme-choice]').forEach(button => {
    button.addEventListener('click', () => applyTheme(button.dataset.themeChoice));
  });
  const motionButton = root.querySelector('[data-motion]');
  const syncMotion = () => {
    root.dataset.motion = motion && !reduced.matches ? 'on' : 'off';
    if (motionButton) {
      motionButton.textContent = root.dataset.motion === 'on' ? 'Pause motion' : 'Play motion';
      motionButton.setAttribute('aria-pressed', String(root.dataset.motion === 'off'));
    }
  };
  motionButton?.addEventListener('click', () => {
    motion = !motion;
    save('ums-motion', motion ? 'on' : 'off');
    syncMotion();
  });
  reduced.addEventListener('change', syncMotion);
  syncMotion();

  root.querySelectorAll('[data-flip]').forEach(tile => {
    const front = tile.querySelector('.u-front-face');
    const back = tile.querySelector('.u-back-face');
    const button = tile.querySelector('.u-flip-button');
    let pinned = false, hovered = false, dismissed = false;
    const sync = () => {
      const open = pinned || (hovered && !dismissed);
      tile.classList.toggle('is-flipped', open);
      front.inert = open;
      back.inert = !open;
      front.setAttribute('aria-hidden', String(open));
      back.setAttribute('aria-hidden', String(!open));
      button.setAttribute('aria-expanded', String(open));
      button.querySelector('span').textContent = open ? 'Front' : 'Flip';
    };
    tile.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') { hovered = true; dismissed = false; sync(); }
    });
    tile.addEventListener('pointerleave', () => {
      hovered = false; dismissed = false;
      if (!tile.contains(document.activeElement)) sync();
    });
    button.addEventListener('click', () => {
      const open = tile.classList.contains('is-flipped');
      pinned = !open; dismissed = open; sync();
    });
    tile.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        pinned = false; dismissed = true; sync(); button.focus();
      }
    });
    tile.addEventListener('focusout', () => queueMicrotask(() => {
      if (!tile.contains(document.activeElement)) sync();
    }));
    sync();
  });

  root.querySelectorAll('[data-member-group]').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.dataset.memberGroup;
      let count = 0;
      root.querySelectorAll('.team-grid .portrait-wrapper').forEach(member => {
        member.hidden = group !== 'all' && member.dataset.group !== group;
        if (!member.hidden) count++;
      });
      root.querySelectorAll('[data-member-group]').forEach(control => {
        control.setAttribute('aria-pressed', String(control === button));
      });
      root.querySelector('[data-member-count]').textContent = count + (count === 1 ? ' member' : ' members');
    });
  });

  const canAnimate = tile => root.dataset.motion === 'on' && !document.hidden &&
    !tile.classList.contains('is-flipped') && !tile.matches(':hover') &&
    !tile.contains(document.activeElement) && tile.getBoundingClientRect().bottom > 0 &&
    tile.getBoundingClientRect().top < innerHeight;
  const featured = root.querySelector('[data-flip="featured"]');
  const topics = featured ? [...featured.querySelectorAll('.u-feature-topics h3')] : [];
  let topicIndex = topics.length ? Math.floor(Math.random() * topics.length) : 0;
  const showTopic = () => topics.forEach((topic, i) => { topic.hidden = i !== topicIndex; });
  showTopic();
  if (featured) setInterval(() => {
    if (!canAnimate(featured)) return;
    topicIndex = (topicIndex + 1 + Math.floor(Math.random() * (topics.length - 1))) % topics.length;
    showTopic();
  }, 8000);

  const people = root.querySelector('[data-flip="people"]');
  if (people) {
    const slots = [...people.querySelectorAll('.u-mini-portraits img')];
    const pool = [...people.querySelectorAll('.u-collage img')].map(img => img.src);
    let slotIndex = 0;
    const shuffle = () => {
      if (canAnimate(people)) {
        const current = new Set(slots.map(img => img.src));
        const available = pool.filter(src => !current.has(src));
        if (available.length) {
          const img = slots[slotIndex];
          const source = available[Math.floor(Math.random() * available.length)];
          const preload = new Image();
          preload.onload = () => {
            if (!canAnimate(people)) return;
            img.classList.add('is-changing');
            setTimeout(() => {
              if (canAnimate(people)) img.src = source;
              img.classList.remove('is-changing');
            }, 180);
          };
          preload.src = source;
          slotIndex = (slotIndex + 1) % slots.length;
        }
      }
      setTimeout(shuffle, 1000 + Math.random() * 1000);
    };
    shuffle();
  }

  const canvas = root.querySelector('.u-hero-art');
  if (canvas) {
    const context = canvas.getContext('2d');
    const origins = [[25,140],[75,40],[115,130],[160,65],[200,155],[270,60]];
    const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[0,3],[3,5],[1,4],[2,5]];
    let time = 0, last = performance.now(), inView = true;
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; }).observe(canvas);
    const draw = now => {
      const elapsed = Math.min(now - last, 100);
      last = now;
      const visible = inView && !document.hidden;
      if (visible && root.dataset.motion === 'on') time += elapsed / 1000;
      if (visible) {
        const width = canvas.clientWidth, height = canvas.clientHeight;
        const ratio = Math.min(devicePixelRatio || 1, 2);
        if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
          canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
        }
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.clearRect(0, 0, width, height);
        const nodes = origins.map(([x,y], i) => [
          (x + Math.sin(time * .7 + i) * 9) * width / 300,
          (y + Math.cos(time * .6 + i) * 7) * height / 200
        ]);
        context.strokeStyle = getComputedStyle(root).getPropertyValue('--u-teal');
        context.fillStyle = context.strokeStyle; context.lineWidth = 1;
        context.beginPath();
        edges.forEach(([a,b]) => { context.moveTo(...nodes[a]); context.lineTo(...nodes[b]); });
        context.stroke();
        nodes.forEach(([x,y]) => { context.beginPath(); context.arc(x,y,4,0,Math.PI*2); context.fill(); });
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }
})();
