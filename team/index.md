---
title: Team
nav:
  order: 3
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Welcome to the Urban Morphology Studio team! Our group brings together diverse backgrounds and expertise, working collaboratively to advance urban morphology research and practice.

{% include section.html %}

## Principal Investigator
{% include list.html data="members" component="portrait" filter="group == 'professor'" %}

{% include section.html %}

## PhD Students
{% include list.html data="members" component="portrait" filter="group == 'phd'" sort="order" %}

{% include section.html %}

## Mphil Students
{% include list.html data="members" component="portrait" filter="group == 'mphil'" sort="order" %}

{% include section.html %}

## Research Assistants
{% include list.html data="members" component="portrait" filter="group == 'ra'" sort="order" %}

{% include section.html background="images/background.jpg" dark=true %}
