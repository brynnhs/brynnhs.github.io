---
title: "Curriculum Vitae"
permalink: /cv/
layout: single
classes: wide portfolio-layout cv-layout
author_profile: false
---

<div class="cv-page fade-in">
  <header class="cv-header">
    <div>
      <p class="neo-label">Curriculum Vitae</p>
      <h1>{{ site.author.name }}</h1>
      <p>Biomedical engineer focused on neurotechnology, human-centered AI, and research-driven digital health products.</p>
    </div>
    <div class="cv-header__meta">
      <a href="mailto:{{ site.email }}" class="neo-link">{{ site.email }}</a>
      <span>{{ site.author.location }}</span>
      {% for link in site.author.links %}
      <a href="{{ link.url }}" class="neo-link" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
      {% endfor %}
    </div>
  </header>

  <section class="cv-columns">
    <div class="cv-column">
      <h2>Experience</h2>
      {% for item in site.data.experience %}
        {% if item.type == 'Experience' %}
        <article class="cv-entry">
          <div class="cv-entry__heading">
            <h3>{{ item.title }}</h3>
            <span>{{ item.start_date }} – {{ item.end_date }}</span>
          </div>
          <p class="cv-entry__organization">{{ item.organization }} • {{ item.location }}</p>
          <p>{{ item.description }}</p>
        </article>
        {% endif %}
      {% endfor %}
    </div>
    <div class="cv-column cv-column--right">
      <h2>Education</h2>
      {% for item in site.data.experience %}
        {% if item.type == 'Education' %}
        <article class="cv-entry">
          <div class="cv-entry__heading">
            <h3>{{ item.title }}</h3>
            <span>{{ item.start_date }} – {{ item.end_date }}</span>
          </div>
          <p class="cv-entry__organization">{{ item.organization }} • {{ item.location }}</p>
          <p>{{ item.description }}</p>
        </article>
        {% endif %}
      {% endfor %}

      {% if site.data.skills %}
      <h2>Skills</h2>
      <div class="cv-skills">
        {% for skill_category in site.data.skills %}
        <article>
          <h3>{{ skill_category.category }}</h3>
          <ul>
            {% for skill in skill_category.items %}
            <li>{{ skill.name }} <span>{{ skill.level }}</span></li>
            {% endfor %}
          </ul>
        </article>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </section>
</div>
