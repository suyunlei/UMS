---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Welcome to the Urban Morphology Studio team! Our group brings together diverse backgrounds and expertise, working collaboratively to advance urban morphology research and practice.

{% include section.html %}

<!-- Display PI (wucai) first -->
{% include list.html data="members" component="portrait" filter="group == 'professor'" %}

<!-- Then PhD group -->
{% include list.html data="members" component="portrait" filter="group == 'phd'" %}

<!-- Then MPhil group -->
{% include list.html data="members" component="portrait" filter="group == 'mphil'" %}

<!-- Then RA group -->
{% include list.html data="members" component="portrait" filter="group == 'RA'" %}

