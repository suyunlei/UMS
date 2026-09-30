---
title: Team
nav:
  order: 3
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Welcome to the Urban Morphology Studio team! Our group brings together diverse backgrounds and expertise, working collaboratively to advance urban morphology research and practice.

{% include section.html %}

<div class="grid team-grid">
{% include list.html data="members" component="portrait" filter="group == 'professor'" %}
{% include list.html data="members" component="portrait" filter="group == 'phd'" %}
{% include list.html data="members" component="portrait" filter="group == 'mphil'" %}
{% include list.html data="members" component="portrait" filter="group == 'ra'" %}
{% include list.html data="members" component="portrait" filter="group == 'visiting'" %}
{% include list.html data="members" component="portrait" filter="group == 'alumni'" %}
</div>
