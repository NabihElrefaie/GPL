(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');

    // Return if header classes do not match
    if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top'))) return;

    // Toggle class based on scroll position
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      const dropdown = this.parentNode.nextElementSibling;
      if (dropdown) {
        dropdown.classList.toggle('dropdown-active');
      }
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" ${index === 0 ? 'class="active"' : ''}></li>`;
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      const configElement = swiperElement.querySelector(".swiper-config");
      if (configElement) {
        let config = JSON.parse(configElement.innerHTML.trim());
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Animate the skills items on reveal
   */
  const skillsAnimation = document.querySelectorAll('.skills-animation');
  if (skillsAnimation.length) {
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function(direction) {
          const progress = item.querySelectorAll('.progress .progress-bar');
          if (progress.length) {
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        }
      });
    });
  }

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    
    let initIsotope;
    const isotopeContainer = isotopeItem.querySelector('.isotope-container');
    if (isotopeContainer) {
      imagesLoaded(isotopeContainer, function() {
        initIsotope = new Isotope(isotopeContainer, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });
  
      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });
    }
  });

  // Update content based on the selected language
  function updateContentAndStyles(lang) {
    const subTitle = document.getElementById('partners-sub-title');
    const mainTitle = document.getElementById('partners-main-title');
    const description = document.getElementById('partners-description');

    if (lang === 'en') {
      if (subTitle) subTitle.textContent = 'Partners of Success';
      if (mainTitle) mainTitle.textContent = 'Trusted Partners in Your Achievements';
      if (description) description.textContent = 
          'We pride ourselves on being dedicated partners in your success story. Our team works closely with you to understand your objectives and tailor our solutions to meet your needs, ensuring that together we achieve outstanding results and drive your business forward.';
    } else {
      if (subTitle) subTitle.textContent = 'شركاء النجاح';
      if (mainTitle) mainTitle.textContent = 'شركاء موثوقين في إنجازاتك';
      if (description) description.textContent = 
          'نحن نفخر بكوننا شركاء مخلصين في قصة نجاحك. يعمل فريقنا بشكل وثيق معك لفهم أهدافك وتخصيص حلولنا لتلبية احتياجاتك، مما يضمن أننا معًا نحقق نتائج رائعة وندفع أعمالك إلى الأمام.';
    }
  }

  // Language Dropdown Functionality
  window.changeLanguage = function(labelId, flagSrc, lang) {
    const langLabel = document.getElementById(labelId);
    if (langLabel) {
      langLabel.innerHTML = `<img src="${flagSrc}" alt="${lang}" style="width: 20px; height: auto; margin-right: 5px;"> ${lang}`;
    
      // Store selected language in localStorage
      localStorage.setItem('selectedLanguage', JSON.stringify({ labelId, flagSrc, lang }));
    
      // Get the language name in both languages
      const langText = lang === 'Eng' ? 'Eng' : 'Arab'; // Arabic text for "Arab"
      langLabel.childNodes[1].nodeValue = langText; // Update the displayed text
      
      // Update content and styles based on the selected language
      updateContentAndStyles(lang);
    }
  };

  // Restore selected language on page load
  $(document).ready(function() {
    const savedLanguage = JSON.parse(localStorage.getItem('selectedLanguage'));
    if (savedLanguage) {
      changeLanguage(savedLanguage.labelId, savedLanguage.flagSrc, savedLanguage.lang);
    } else {
      // Default to English if no language is saved
      changeLanguage('langLabel1', 'assets/img/lang/logo-lang.png', 'en');  // Change to your default flag path
    }
  });

})(jQuery);