---
---

# Urban Morphology Studio

[Urban Morphology Studio](https://suyunlei.github.io/UMS/) focuses on urban morphology as its core framework, integrating cutting-edge quantitative methods such as big data analytics, geographic information science (GIS), and artificial intelligence (AI). By adopting a multidisciplinary perspective that spans social, economic, geographic, ecological, and environmental dimensions, the studio conducts comprehensive research on urban space. We are committed to observing, understanding, and enhancing both the built and lived environments to foster more equitable, livable, and sustainable urban spaces.

<hr>

## Our Mission

We are committed to identifying and addressing issues in urban spaces such as poor spatial experiences, lack of equity, and inefficient resource allocation. Guided by the principle of human-centered design, we employ quantitative methods to explore and evaluate strategies for urban renewal, with the goal of enhancing the experiences and overall quality of life for city residents.

UMS advocates for inclusive participation and collaborative innovation. We engage with a wide range of stakeholders—including urban residents, policymakers, planning and design professionals, and developers—to understand diverse perspectives and reshape urban environments that are more equitable, livable, resilient, and sustainable.

{%
  include button.html
  text="Meet Our Team"
  link="team"
  icon="fa-solid fa-users"
%}
{%
  include button.html
  text="Our Research"
  link="research"
  icon="fa-solid fa-microscope"
%}

{% include section.html %} 

<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px;">
  <div style="flex: 1; min-width: 300px;">
    <h3 style="border-bottom: 2px solid #4f8cff; padding-bottom: 10px; margin-bottom: 20px;">
      {% include icon.html icon="fa-solid fa-newspaper" %} Research Updates
    </h3>
    <ul style="list-style-type: none; padding: 0;">
      {% assign research_posts = site.posts | where_exp: "post", "post.tags contains 'Urban-morphology' or post.tags contains 'digital-twins'" | limit: 5 %}
      {% for post in research_posts %}
        <li style="margin-bottom: 15px; display: flex; justify-content: space-between;">
          <a href="{{ post.url | relative_url }}" style="flex-grow: 1; text-decoration: none; color: inherit;">{{ post.title }}</a>
          <span style="color: #666; font-size: 0.9em; white-space: nowrap;">{{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
      {% endfor %}
    </ul>
    <div style="text-align: right; margin-top: 15px;">
      <a href="news/" style="text-decoration: none; color: #4f8cff;">More →</a>
    </div>
  </div>
  
  <div style="flex: 1; min-width: 300px;">
    <h3 style="border-bottom: 2px solid #ffb347; padding-bottom: 10px; margin-bottom: 20px;">
      {% include icon.html icon="fa-solid fa-bullhorn" %} Announcements
    </h3>
    <ul style="list-style-type: none; padding: 0;">
      {% assign announcement_posts = site.posts | where_exp: "post", "post.tags contains 'artificial-intelligence'" | limit: 5 %}
      {% for post in announcement_posts %}
        <li style="margin-bottom: 15px; display: flex; justify-content: space-between;">
          <a href="{{ post.url | relative_url }}" style="flex-grow: 1; text-decoration: none; color: inherit;">{{ post.title }}</a>
          <span style="color: #666; font-size: 0.9em; white-space: nowrap;">{{ post.date | date: "%Y-%m-%d" }}</span>
        </li>
      {% endfor %}
    </ul>
    <div style="text-align: right; margin-top: 15px;">
      <a href="news/" style="text-decoration: none; color: #ffb347;">More →</a>
    </div>
  </div>
</div>
