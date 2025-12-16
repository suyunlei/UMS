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
<!-- 修复点：使用精确匹配，同时兼容大小写，避免 contains 导致的性能死锁 -->
{% assign ra_members = site.members | where_exp: "member", "member.group == 'ra' or member.group == 'RA'" %}
<div class="grid">
  {% for member in ra_members %}
    {% include portrait.html lookup=member.slug %}
  {% endfor %}
</div>

## Visiting Students
{% include list.html data="members" component="portrait" filter="group == 'VS'" sort="order" %}