---
title: Team
nav:
  order: 3
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Welcome to the Urban Morphology Studio team! Our group brings together diverse backgrounds and expertise, working collaboratively to advance urban morphology research and practice.

{% include section.html %}

<div class="u-filters" role="group" aria-label="Team roles">
<button type="button" class="u-filter" data-member-group="all" aria-pressed="true">All</button>
<button type="button" class="u-filter" data-member-group="phd" aria-pressed="false">PhD</button>
<button type="button" class="u-filter" data-member-group="mphil" aria-pressed="false">MPhil</button>
<button type="button" class="u-filter" data-member-group="ra" aria-pressed="false">RA</button>
<button type="button" class="u-filter" data-member-group="visiting" aria-pressed="false">Visitors</button>
<button type="button" class="u-filter" data-member-group="alumni" aria-pressed="false">Alumni</button>
</div>
<p class="u-count" data-member-count aria-live="polite">{{ site.members.size }} members</p>
<div class="grid team-grid">
{% include list.html data="members" component="portrait" filter="group == 'professor'" %}
{% include list.html data="members" component="portrait" filter="group == 'phd'" %}
{% include list.html data="members" component="portrait" filter="group == 'mphil'" %}
{% include list.html data="members" component="portrait" filter="group == 'ra'" %}
{% include list.html data="members" component="portrait" filter="group == 'visiting'" %}
{% include list.html data="members" component="portrait" filter="group == 'alumni'" %}
</div>
