---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact
Welcome to contact Urban Morphology Studio! If you have intentions for collaboration, consultation, or joining our team, please feel free to contact us through the following methods.

{%
  include button.html
  type="email"
  text="caiwu@hkust-gz.edu.cn"
  link="caiwu@hkust-gz.edu.cn"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/hkustgz.png"
  caption="HKUST(GZ)"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="UMS全体"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
中国广东省广州市
南沙区东涌镇笃学路1号
香港科技大学广州
{% endcapture %}

{% capture col2 %}
No. 1 Duxue Road, Dongchong Town, Nansha District, Guangzhou, Guangdong Province, China  
The Hong Kong University of Science and Technology (Guangzhou)
{% endcapture %}

{% capture col3 %}
ロレム・イプサム・ドロール・シット・アメット  
コンセクテトゥール・アディピシング・エリット  
セド・ド・エイスモド・テンポル
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
