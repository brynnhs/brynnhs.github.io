---
title: "Curriculum Vitae"
permalink: /cv/
layout: single
classes: wide portfolio-layout cv-layout
author_profile: false
---

<div class="cv-page fade-in">
  <header class="cv-header">
    <div class="cv-header__copy">
      <h1>{{ site.author.name }}</h1>
      <p>Applied Neuroscientist — Deep Learning &amp; Biosignal Processing</p>
    </div>
    <div class="cv-header__contact">
      <a href="mailto:{{ site.email }}" class="cv-contact-pill" aria-label="Email {{ site.author.name }}">
        <i class="fas fa-envelope"></i>
        <span>{{ site.email }}</span>
      </a>
      <div class="cv-contact-pill cv-contact-pill--static" aria-label="Based in {{ site.author.location }}">
        <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
        <span>{{ site.author.location }}</span>
      </div>
      {% for link in site.author.links %}
      <a href="{{ link.url }}" class="cv-contact-pill" target="_blank" rel="noopener noreferrer">
        <i class="{{ link.icon }}" aria-hidden="true"></i>
        <span>{{ link.label }}</span>
      </a>
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
          <p class="cv-entry__summary">{{ item.description }}</p>
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
          </div>
          <p class="cv-entry__date">{{ item.start_date }} – {{ item.end_date }}</p>
          <p class="cv-entry__organization">{{ item.organization }} • {{ item.location }}</p>
          <p class="cv-entry__summary">{{ item.description }}</p>
        </article>
        {% endif %}
      {% endfor %}

    </div>
  </section>

  {% if site.data.skills %}
  <section class="cv-skills-section fade-in">
    <h2>Skills</h2>
    <div class="cv-skills">
      {% for skill_category in site.data.skills %}
      <article class="cv-skill-card">
        <h3>{{ skill_category.category }}</h3>
        <div class="cv-skill-tags">
          {% for skill in skill_category.items %}
          <span class="skill-pill">{{ skill.name }}</span>
          {% endfor %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}
</div>
