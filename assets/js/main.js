/**
 * Portfolio Enhancement JavaScript
 * Handles smooth scrolling, animations, filtering, and interactive features
 */

(function() {
  'use strict';

  // ==========================================================================
  // Smooth Scrolling
  // ==========================================================================
  function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ==========================================================================
  // Fade-in Animations on Scroll
  // ==========================================================================
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  // ==========================================================================
  // Scroll to Top Button
  // ==========================================================================
  function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollButton.classList.add('show');
      } else {
        scrollButton.classList.remove('show');
      }
    });

    // Scroll to top on click
    scrollButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // Project Filtering
  // ==========================================================================
  function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            // Add fade-in animation
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.transition = 'opacity 0.3s ease';
              card.style.opacity = '1';
            }, 10);
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ==========================================================================
  // Mobile Menu Enhancement (if needed)
  // ==========================================================================
  function initMobileMenu() {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Close mobile menu when clicking on a link
      const navLinks = document.querySelectorAll('.masthead__menu-item a');
      navLinks.forEach(link => {
        if (link.dataset.mobileMenuBound === 'true') return;

        link.addEventListener('click', function() {
          // Minimal Mistakes theme handles menu, but we can add enhancements
          const menuToggle = document.querySelector('.masthead__menu-item-toggle');
          if (menuToggle && menuToggle.checked) {
            menuToggle.checked = false;
          }
        });

        link.dataset.mobileMenuBound = 'true';
      });
    }
  }

  // ==========================================================================
  // Expanded Project Feature
  // ==========================================================================
  function initExpandedProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const expandParam = urlParams.get('expand');
    
    if (!expandParam) return;

    // Get projects data from JSON
    const projectsDataEl = document.getElementById('projects-data');
    if (!projectsDataEl) return;
    
    let projects;
    try {
      projects = JSON.parse(projectsDataEl.textContent);
    } catch (e) {
      console.error('Error parsing projects data:', e);
      return;
    }
    
    const project = projects.find(p => p.slug === expandParam);
    
    if (!project) return;

    // Populate expanded project section
    const expandedSection = document.getElementById('expanded-project');
    if (!expandedSection) return;

    const titleEl = document.getElementById('expanded-title');
    const descriptionEl = document.getElementById('expanded-description');
    const categoryEl = document.getElementById('expanded-category');
    const imageEl = document.getElementById('expanded-image');
    const imageSrc = document.getElementById('expanded-image-src');
    const bodyEl = document.getElementById('expanded-body');
    const techEl = document.getElementById('expanded-technologies');
    const linksEl = document.getElementById('expanded-links');

    if (titleEl) titleEl.textContent = project.title || '';
    if (descriptionEl) descriptionEl.textContent = project.description || '';
    
    if (project.category && categoryEl) {
      categoryEl.textContent = project.category;
      categoryEl.style.display = 'inline-block';
    } else if (categoryEl) {
      categoryEl.textContent = '';
      categoryEl.style.display = 'none';
    }

    if (project.image && imageEl && imageSrc) {
      imageSrc.src = project.image;
      imageSrc.alt = project.title || '';
      imageEl.style.display = 'block';
    } else if (imageEl && imageSrc) {
      imageSrc.removeAttribute('src');
      imageSrc.alt = '';
      imageEl.style.display = 'none';
    }

    if (project.content && bodyEl) {
      bodyEl.innerHTML = project.content;
    } else if (bodyEl) {
      bodyEl.replaceChildren();
    }

    if (techEl) {
      techEl.replaceChildren();

      if (project.technologies && project.technologies.length > 0) {
        const heading = document.createElement('h3');
        heading.textContent = 'Technologies';

        const badges = document.createElement('div');
        badges.className = 'tech-badges';

        project.technologies.forEach(tech => {
          const badge = document.createElement('span');
          badge.className = 'tech-badge';
          badge.textContent = tech;
          badges.appendChild(badge);
        });

        techEl.append(heading, badges);
        techEl.style.display = 'block';
      } else {
        techEl.style.display = 'none';
      }
    }

    if (linksEl) {
      const validLinks = Array.isArray(project.links)
        ? project.links.filter(link => link && link.url && link.url !== '#')
        : [];

      linksEl.replaceChildren();

      if (validLinks.length > 0) {
        const heading = document.createElement('h3');
        heading.textContent = 'Links';

        const linksList = document.createElement('div');
        linksList.className = 'project-links';

        validLinks.forEach(link => {
          const anchor = document.createElement('a');
          anchor.href = link.url;
          anchor.className = 'project-link';
          anchor.target = '_blank';
          anchor.rel = 'noopener noreferrer';

          const icon = document.createElement('i');
          icon.className = link.icon || 'fas fa-external-link-alt';

          anchor.append(icon, document.createTextNode(` ${link.label || 'Open link'}`));
          linksList.appendChild(anchor);
        });

        linksEl.append(heading, linksList);
        linksEl.style.display = 'block';
      } else {
        linksEl.style.display = 'none';
      }
    }

    // Show expanded section and scroll to it
    expandedSection.style.display = 'block';
    
    // Hide the corresponding project card in the grid
    const projectCard = document.querySelector(`[data-project-slug="${expandParam}"]`);
    if (projectCard) {
      projectCard.style.display = 'none';
    }

    // Scroll to expanded section
    setTimeout(() => {
      expandedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  // Collapse expanded project
  window.collapseProject = function() {
    const expandedSection = document.getElementById('expanded-project');
    if (expandedSection) {
      expandedSection.style.display = 'none';
    }

    // Show all project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = '';
    });

    // Remove query parameter from URL
    const url = new URL(window.location);
    url.searchParams.delete('expand');
    window.history.replaceState({}, '', url);
  };

  // ==========================================================================
  // Initialize all features when DOM is ready
  // ==========================================================================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initSmoothScrolling();
        initScrollAnimations();
        initScrollToTop();
        initProjectFiltering();
        initMobileMenu();
        initExpandedProject();
      });
    } else {
      // DOM is already loaded
      initSmoothScrolling();
      initScrollAnimations();
      initScrollToTop();
      initProjectFiltering();
      initMobileMenu();
      initExpandedProject();
    }
  }

  // Start initialization
  init();

  // Re-initialize on window resize (for responsive features)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      initMobileMenu();
    }, 250);
  });

})();
