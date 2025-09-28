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
{% include list.html data="members" component="portrait" filter="group == 'RA'" %}

<!-- Then any other members -->
{% include list.html data="members" component="portrait" filter="group != 'professor' and group != 'phd' and group != 'RA'" %}

{% include section.html background="images/background.jpg" dark=true %}

## Join Us

### Prospective Doctoral Candidates

We are currently recruiting 1–2 PhD students for Fall 2025 and Spring 2026. We welcome outstanding candidates who are interested in the following research areas:

*   Urban Morphology & Urban Activities
*   Human-Perceived Urban Space
*   AI for Urban Evaluation & Redevelopment

{%
  include button.html
  icon="fa-solid fa-handshake-angle"
  text="Learn More"
  link="contact"
%}

