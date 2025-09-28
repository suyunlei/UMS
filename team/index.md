---
title: Team
nav:
  order: 3
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Welcome to the Urban Morphology Studio team! Our group brings together diverse backgrounds and expertise, working collaboratively to advance urban morphology research and practice.

{% include section.html %}

<!-- Display PI first -->
{% include list.html data="members" component="portrait" filter="group == 'professor'" %}

<!-- Then PhD students -->
{% include list.html data="members" component="portrait" filter="group == 'phd'" %}

<!-- Then Research Assistants -->
{% include list.html data="members" component="portrait" filter="group == 'ra'" %}

<!-- Then any other members -->
{% include list.html data="members" component="portrait" filter="group != 'professor' and group != 'phd' and group != 'RA'" %}

{% include section.html background="images/background.jpg" dark=true %}
