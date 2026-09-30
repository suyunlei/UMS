---
title: Team
nav:
  order: 3
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Welcome to the Urban Morphology Studio team! Our group brings together diverse backgrounds and expertise, working collaboratively to advance urban morphology research and practice.

{% include section.html %}

## Principal Investigator

<div class="grid grid-5">
{% include list.html data="members" component="portrait" filter="group == 'professor'" %}
</div>

## PhD

<div class="grid grid-5">
{% include list.html data="members" component="portrait" filter="group == 'phd'" %}
</div>

## MPhil

<div class="grid grid-5">
{% include list.html data="members" component="portrait" filter="group == 'mphil'" %}
</div>

{% assign research_assistants = site.members | where: "group", "ra" %}
{% if research_assistants.size > 0 %}
## RA

<div class="grid grid-5">
{% include list.html data="members" component="portrait" filter="group == 'ra'" %}
</div>
{% endif %}

## Visiting Students

<div class="grid grid-5">
{% include list.html data="members" component="portrait" filter="group == 'visiting'" %}
</div>

## Alumni

<div class="grid grid-5">
{% include list.html data="members" component="portrait" filter="group == 'alumni'" %}
</div>
