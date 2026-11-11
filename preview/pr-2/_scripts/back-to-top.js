{
  const onLoad = () => {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (!backToTopButton) return;
    
    // 显示或隐藏按钮基于滚动位置
    const toggleBackToTopButton = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    };
    
    // 点击按钮时滚动到顶部
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    // 添加事件监听器
    window.addEventListener('scroll', toggleBackToTopButton);
    backToTopButton.addEventListener('click', scrollToTop);
    
    // 初始检查
    toggleBackToTopButton();
  };
  
  // 页面加载完成后执行
  window.addEventListener('load', onLoad);
}