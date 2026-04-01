---
permalink: /about/
title: "About"
author_profile: false
classes: wide portfolio-layout
---

<div class="portfolio-page portfolio-page--about">
  <section class="portfolio-hero portfolio-hero--compact fade-in">
    <div class="portfolio-hero__card">
      <div class="portfolio-hero__copy">
        <p class="portfolio-eyebrow">About Me</p>
        <div class="portfolio-copy">
          {{ site.author.bio | markdownify }}
          <p>My work spans EEG preprocessing, deep learning for functional ultrasound forecasting, VR-based neuromodulation experiments, and clinical operations for neurotechnology studies.</p>
        </div>
      </div>
      <div class="portfolio-hero__visual portfolio-hero__visual--portrait">
        <div class="portrait-frame portrait-frame--large">
          <img src="{{ site.author.avatar | relative_url }}" alt="{{ site.author.name }}">
        </div>
      </div>
    </div>
  </section>

  {% if site.data.experience %}
  <section class="portfolio-section fade-in">
    <div class="section-heading">
      <p class="portfolio-eyebrow">Timeline</p>
    </div>
    <div class="timeline">
      {% for item in site.data.experience %}
      <article class="timeline-item {% if item.current %}current{% endif %}">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-title">{{ item.title }}</h3>
            <span class="timeline-date">
              {% if item.current %}
                {{ item.start_date }} - Present
              {% else %}
                {{ item.start_date }} - {{ item.end_date }}
              {% endif %}
            </span>
          </div>
          <p class="timeline-organization">{{ item.organization }} <span class="timeline-location">{{ item.location }}</span></p>
          {% if item.description %}
          <p class="timeline-description">{{ item.description }}</p>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  {% if site.data.skills %}
  <section class="portfolio-section fade-in">
    <div class="section-heading">
      <p class="portfolio-eyebrow">Skills</p>
    </div>
    <div class="skills-grid skills-grid--about">
      {% for skill_category in site.data.skills %}
      <article class="skill-category">
        <h3 class="skill-category-title">{{ skill_category.category }}</h3>
        <div class="skill-items">
          {% for skill in skill_category.items %}
          <span class="skill-badge skill-{{ skill.level | downcase }}">
            {{ skill.name }}
            <span class="skill-level">{{ skill.level }}</span>
          </span>
          {% endfor %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  <section class="portfolio-section fade-in" id="contact">
    <div class="contact-panel">
      <div>
        <p class="portfolio-eyebrow">Contact</p>
        <p>I'm always open to research collaborations, technical conversations, and opportunities in biomedical engineering, AI, neurotechnology, and digital health.</p>
      </div>
      <div class="contact-actions">
        <a href="mailto:{{ site.email }}" class="portfolio-button">Email Me</a>
        {% for link in site.author.links %}
        <a href="{{ link.url }}" class="portfolio-button portfolio-button--ghost" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
        {% endfor %}
      </div>
    </div>
  </section>
</div>
