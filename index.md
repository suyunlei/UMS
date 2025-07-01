---
---

# Urban Morphology Studio

[Urban Morphology Studio (UMS)](https://suyunlei.github.io/UMS/), based at the Hong Kong University of Science and Technology (Guangzhou), is dedicated to advancing urban spatial research through a multidisciplinary lens. Leveraging cutting-edge quantitative methods—including big data analytics, geographic information science (GIS), and artificial intelligence (AI)—our studio explores the social, economic, geographic, ecological, and environmental dimensions of urban form and function.

<hr>

## Our Mission

<hr style="width: 15%; margin: 20px auto;">

We aim to identify and address critical challenges in urban spaces, such as inequitable access, inefficient resource allocation, and poor spatial experiences. Guided by principles of human-centered and sustainable design, we develop evidence-based strategies for urban renewal and quality of life improvement.

## Our Research

<hr style="width: 15%; margin: 20px auto;">

Our research encompasses quantitative urban morphology, spatial analysis of cities, public space evaluation, and the development of novel digital tools for urban governance and design. We place strong emphasis on interdisciplinary approaches and open data, enabling robust, actionable insights for practitioners and communities alike.
UMS values inclusivity, collaboration, and innovation. We actively engage with residents, policymakers, planning professionals, and developers to co-create urban environments that are equitable, livable, and resilient.
We invite you to explore our latest research outputs and meet the team behind UMS.


<div style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
  <div style="width: 165px;">
    {%
      include button.html
      text="Meet Our Team"
      link="team"
      icon="fa-solid fa-users"
      style="width: 100%; text-align: center;"
    %}
  </div>
  <div style="width: 165px;">
    {%
      include button.html
      text="Our Research"
      link="research"
      icon="fa-solid fa-microscope"
      style="width: 100%; text-align: center;"
    %}
  </div>
</div>

{% include section.html %} 

<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px;">
  <div style="flex: 1; min-width: 300px;">
    <h3 style="border-bottom: 2px solid #4f8cff; padding-bottom: 10px; margin-bottom: 20px;">
      {% include icon.html icon="fa-solid fa-newspaper" %} Research Updates
    </h3>
    <ul style="list-style-type: none; padding: 0;">
      {% assign research_posts = site.posts | where_exp: "post", "post.tags contains 'research' or post.tags contains 'urban-morphology' or post.tags contains 'conference'" | limit: 5 %}
      {% for post in research_posts %}
        <li style="margin-bottom: 15px;">
          <span style="color: #666; font-size: 0.9em; margin-right: 10px;">{{ post.date | date: "%Y-%m-%d" }}:</span>
          <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: inherit;">{{ post.title }}</a>
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
      {% assign announcement_posts = site.posts | where_exp: "post", "post.tags contains 'webinar'" | limit: 5 %}
      {% for post in announcement_posts %}
        <li style="margin-bottom: 15px;">
          <span style="color: #666; font-size: 0.9em; margin-right: 10px;">{{ post.date | date: "%Y-%m-%d" }}:</span>
          <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: inherit;">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
    <div style="text-align: right; margin-top: 15px;">
      <a href="news/" style="text-decoration: none; color: #ffb347;">More →</a>
    </div>
  </div>
</div>
