document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      const hamburgerIcon = this.querySelector('.hamburger-icon');
      const closeIcon = this.querySelector('.close-icon');
      const isActive = this.classList.contains('active');
      
      if (isActive) {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        this.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      } else {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        this.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
    
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        const hamburgerIcon = mobileToggle.querySelector('.hamburger-icon');
        const closeIcon = mobileToggle.querySelector('.close-icon');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  const phoneHeaderBtn = document.querySelector('.phone-header-btn');
  if (phoneHeaderBtn) {
    phoneHeaderBtn.addEventListener('click', function() {
      const phoneNumber = '054-2668566';
      window.location.href = 'tel:' + phoneNumber;
    });
  }
  
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
      };
      
      console.log('Form submitted:', formData);
      alert('תודה שפניתם אלינו! נחזור אליכם בהקדם האפשרי.');
      contactForm.reset();
    });
  }
});

/* Cookie Consent */

// Helper function to check cookie consent
function hasConsentFor(category) {
  if (typeof window.CookieConsent === 'undefined') {
    return false; // Default to no consent if cookie consent not loaded
  }
  
  return window.CookieConsent.validConsent(category);
}

// Helper function to execute code only with consent
function withConsent(category, callback) {
  if (hasConsentFor(category)) {
    callback();
  } else {
    console.log(`[WARNING] Skipping ${category} code - no user consent`);
  }
}

// Cookie Consent Initialization

(function() {
  'use strict';
  
  let initAttempts = 0;
  const maxAttempts = 50; // 5 seconds max wait
  
  // Wait for DOM and vanilla-cookieconsent to be ready
  function initCookieConsent() {
    initAttempts++;
    
    
    if (typeof window.CookieConsent === 'undefined') {
      if (initAttempts < maxAttempts) {
        setTimeout(initCookieConsent, 100);
      } else {
      }
      return;
    }

    const cc = window.CookieConsent;
    
    
    // Initialize cookie consent
    try {
      cc.run({
  "autoShow": true,
  "mode": "opt-in",
  "revision": 0,
  "categories": {
    "necessary": {
      "enabled": true,
      "readOnly": true
    },
    "analytics": {
      "enabled": false,
      "readOnly": false,
      "autoClear": {
        "cookies": [
          {
            "name": "_ga"
          },
          {
            "name": "_ga_*"
          },
          {
            "name": "_gid"
          },
          {
            "name": "_gat"
          }
        ]
      }
    },
    "marketing": {
      "enabled": false,
      "readOnly": false,
      "autoClear": {
        "cookies": [
          {
            "name": "_fbp"
          },
          {
            "name": "_fbc"
          },
          {
            "name": "fr"
          }
        ]
      }
    }
  },
  "language": {
    "default": "he",
    "translations": {
      "he": {
        "consentModal": {
          "title": "אנחנו משתמשים בעוגיות 🍪",
          "description": "אריאל אחון ייעוץ משכנתאות ופיננסיים משתמש בעוגיות כדי לשפר את החוויה שלך, לנתח שימוש באתר ולסייע במאמצי השיווק שלנו.",
          "acceptAllBtn": "אשר הכל",
          "acceptNecessaryBtn": "רק הכרחי",
          "showPreferencesBtn": "נהל העדפות",
          "footer": "<a href=\"#privacy-policy\">מדיניות פרטיות</a> | <a href=\"#terms-conditions\">תנאי שימוש</a>"
        },
        "preferencesModal": {
          "title": "העדפות עוגיות",
          "acceptAllBtn": "אשר הכל",
          "acceptNecessaryBtn": "רק הכרחי",
          "savePreferencesBtn": "שמור העדפות",
          "closeIconLabel": "סגור",
          "sections": [
            {
              "title": "עוגיות חיוניות",
              "description": "עוגיות אלה הכרחיות לתפקוד האתר ולא ניתן להשבית אותן.",
              "linkedCategory": "necessary"
            },
            {
              "title": "עוגיות ניתוח",
              "description": "עוגיות אלה עוזרות לנו להבין איך המבקרים מתקשרים עם האתר שלנו.",
              "linkedCategory": "analytics"
            },
            {
              "title": "עוגיות שיווקיות",
              "description": "עוגיות אלה משמשות להצגת פרסומות מותאמות אישית.",
              "linkedCategory": "marketing"
            }
          ]
        }
      }
    }
  },
  "guiOptions": {
    "consentModal": {
      "layout": "box",
      "position": "bottom right",
      "equalWeightButtons": true,
      "flipButtons": false
    },
    "preferencesModal": {
      "layout": "box",
      "equalWeightButtons": true,
      "flipButtons": false
    }
  }
});
      
      // Optional: Handle consent changes (check if onChange is available)
      if (typeof cc.onChange === 'function') {
        cc.onChange(function(cookie, changed_preferences) {
      
      // Enable/disable analytics based on consent
      if (changed_preferences.includes('analytics')) {
        if (cc.validConsent('analytics')) {
          // Enable analytics (e.g., Google Analytics)
          // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
        } else {
          // Example: gtag('consent', 'update', { analytics_storage: 'denied' });
        }
      }
      
      // Enable/disable marketing based on consent
      if (changed_preferences.includes('marketing')) {
        if (cc.validConsent('marketing')) {
          // Example: gtag('consent', 'update', { ad_storage: 'granted' });
        } else {
          // Example: gtag('consent', 'update', { ad_storage: 'denied' });
        }
      }
        });
      } else {
      }

      // Note: Cookie Preferences button removed per marketing guidelines
      // Footer should be clean and minimal - users can manage cookies via banner
    } catch (error) {
    }
  }

  // Initialize when DOM is ready - multiple approaches for reliability
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
    // Backup timeout in case DOMContentLoaded doesn't fire
    setTimeout(initCookieConsent, 1000);
  } else if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initCookieConsent();
  } else {
    // Fallback - try after a short delay
    setTimeout(initCookieConsent, 500);
  }
  
  // Additional fallback - try after page load
  if (typeof window !== 'undefined') {
    if (window.addEventListener) {
      window.addEventListener('load', initCookieConsent, { once: true });
    }
  }
})();

/* Accessibility Features */

/* Mickidum Accessibility Toolbar Initialization - Zappy Style */

window.onload = function() {
    
    try {
        window.micAccessTool = new MicAccessTool({
            buttonPosition: 'left', // Position on left side
            forceLang: 'he-IL', // Force language
            icon: {
                position: {
                    bottom: { size: 50, units: 'px' },
                    left: { size: 20, units: 'px' },
                    type: 'fixed'
                },
                backgroundColor: 'transparent', // Transparent to allow CSS styling
                color: 'transparent', // Let CSS handle coloring
                img: 'accessible',
                circular: false // Square button for consistent styling
            },
            menu: {
                dimensions: {
                    width: { size: 300, units: 'px' },
                    height: { size: 'auto', units: 'px' }
                }
            }
        });
        
    } catch (error) {
    }
    
    // Keyboard shortcut handler: ALT+A (Option+A on Mac) to toggle accessibility widget visibility (desktop only)
    document.addEventListener('keydown', function(event) {
        // Check if ALT+A is pressed (ALT on Windows/Linux, Option on Mac)
        var isAltOrOption = event.altKey || event.metaKey;
        var isAKey = event.keyCode === 65 || event.which === 65 || 
                      (event.key && (event.key.toLowerCase() === 'a' || event.key === 'å' || event.key === 'Å'));
        
        if (isAltOrOption && isAKey) {
            // Only work on desktop (screen width > 768px)
            if (window.innerWidth > 768) {
                event.preventDefault();
                event.stopPropagation();
                
                // Toggle visibility class on body
                var isVisible = document.body.classList.contains('accessibility-widget-visible');
                
                if (isVisible) {
                    // Hide the widget
                    document.body.classList.remove('accessibility-widget-visible');
                } else {
                    // Show the widget
                    document.body.classList.add('accessibility-widget-visible');
                    
                    // After a short delay, click the button to open the menu
                    setTimeout(function() {
                        var accessButton = document.getElementById('mic-access-tool-general-button');
                        if (accessButton) {
                            accessButton.click();
                        }
                    }, 200);
                }
            }
        }
    }, true);
};


// Zappy Contact Form API Integration (Fallback)
(function() {
    if (window.zappyContactFormLoaded) {
        console.log('📧 Zappy contact form already loaded');
        return;
    }
    window.zappyContactFormLoaded = true;

    function initContactFormIntegration() {
        console.log('📧 Zappy: Initializing contact form API integration...');

        // Find the contact form (try multiple selectors for flexibility)
        const contactForm = document.querySelector('.contact-form') || 
                           document.querySelector('form[action*="contact"]') ||
                           document.querySelector('form#contact') ||
                           document.querySelector('form#contactForm') ||
                           document.getElementById('contactForm') ||
                           document.querySelector('section.contact form') ||
                           document.querySelector('section#contact form') ||
                           document.querySelector('form');
        
        if (!contactForm) {
            console.log('⚠️ Zappy: No contact form found on page');
            return;
        }
        
        console.log('✅ Zappy: Contact form found:', contactForm.className || contactForm.id || 'unnamed form');

        // Store original submit handler if exists
        const originalOnSubmit = contactForm.onsubmit;

    // Add Zappy API integration using capture phase to run before other handlers
    contactForm.addEventListener('submit', async function(e) {
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Send to Zappy backend API (don't prevent default, let other handlers run)
        try {
            console.log('📧 Zappy: Sending contact form to backend API...');
            const response = await fetch('https://api.zappy5.com/api/email/contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    websiteId: 'dcdc34dd-3985-48c8-b0f3-d984481f8986',
                    name: data.name || '',
                    email: data.email || '',
                    subject: data.subject || 'Contact Form Submission',
                    message: data.message || '',
                    phone: data.phone || null
                })
            });

            const result = await response.json();
            
            if (result.success) {
                console.log('✅ Zappy: Contact form data sent successfully to backend');
            } else {
                console.log('⚠️ Zappy: Backend returned error:', result.error);
            }
        } catch (error) {
            console.error('❌ Zappy: Failed to send to backend API:', error);
            // Don't break the existing form submission
        }
        }, true); // Use capture phase to run before other handlers

        console.log('✅ Zappy: Contact form API integration initialized');
    } // End of initContactFormIntegration
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactFormIntegration);
    } else {
        // DOM is already ready, initialize immediately
        initContactFormIntegration();
    }
})();

// === AGGRESSIVE LOGO FIX - Remove inline styles that hide logo ===
(function() {
  function fixLogoDisplay() {
    // Find all logo-link elements
    const logoLinks = document.querySelectorAll('.logo-link, a.logo-link, .nav-brand a');
    logoLinks.forEach(link => {
      // Remove problematic inline styles
      if (link.hasAttribute('style')) {
        const currentStyle = link.getAttribute('style');
        // Only remove if it's hiding the element or changing display
        if (currentStyle.includes('display:') || currentStyle.includes('visibility:') || 
            currentStyle.includes('opacity:') || currentStyle.includes('position: absolute')) {
          console.log('Removing problematic inline style from logo-link');
          link.removeAttribute('style');
        }
      }
    });
    
    // Find all logo images
    const logoImages = document.querySelectorAll('img.logo, .logo-link img, .nav-brand img');
    logoImages.forEach(img => {
      // Ensure logo is visible
      img.style.cssText = '';
      img.style.display = 'inline-block';
      img.style.visibility = 'visible';
      img.style.opacity = '1';
    });
  }
  
  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixLogoDisplay);
  } else {
    fixLogoDisplay();
  }
  
  // Run again after a short delay to catch dynamic changes
  setTimeout(fixLogoDisplay, 100);
  setTimeout(fixLogoDisplay, 500);
})();

// === AGGRESSIVE LOGO FIX - Remove inline styles that hide logo ===
(function() {
  function fixLogoDisplay() {
    // Find all logo-link elements
    const logoLinks = document.querySelectorAll('.logo-link, a.logo-link, .nav-brand a');
    logoLinks.forEach(link => {
      // Remove problematic inline styles
      if (link.hasAttribute('style')) {
        const currentStyle = link.getAttribute('style');
        // Only remove if it's hiding the element or changing display
        if (currentStyle.includes('display:') || currentStyle.includes('visibility:') || 
            currentStyle.includes('opacity:') || currentStyle.includes('position: absolute')) {
          console.log('Removing problematic inline style from logo-link');
          link.removeAttribute('style');
        }
      }
    });
    
    // Find all logo images
    const logoImages = document.querySelectorAll('img.logo, .logo-link img, .nav-brand img');
    logoImages.forEach(img => {
      // Ensure logo is visible
      img.style.cssText = '';
      img.style.display = 'inline-block';
      img.style.visibility = 'visible';
      img.style.opacity = '1';
    });
  }
  
  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixLogoDisplay);
  } else {
    fixLogoDisplay();
  }
  
  // Run again after a short delay to catch dynamic changes
  setTimeout(fixLogoDisplay, 100);
  setTimeout(fixLogoDisplay, 500);
})();


/* Added Component Script */
// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.name || !data.phone || !data.email || !data.message) {
        showMessage('אנא מלא את כל השדות הנדרשים', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showMessage('כתובת דוא"ל לא תקינה', 'error');
        return;
      }

      // Phone validation (Israeli format)
      const phoneRegex = /^0\d{1,2}-?\d{7}$/;
      if (!phoneRegex.test(data.phone.replace(/-/g, ''))) {
        showMessage('מספר טלפון לא תקין', 'error');
        return;
      }

      // Simulate form submission
      // In production, replace this with actual API call
      submitForm(data);
    });
  }

  function submitForm(data) {
    // Disable submit button
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>שולח...</span>';

    // Simulate API call
    setTimeout(() => {
      // Success
      showMessage('ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם', 'success');
      contactForm.reset();
      
      // Re-enable button
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;

      // In production, replace with:
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      // .then(response => response.json())
      // .then(result => {
      //   showMessage('ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם', 'success');
      //   contactForm.reset();
      // })
      // .catch(error => {
      //   showMessage('אירעה שגיאה בשליחת ההודעה. אנא נסה שוב', 'error');
      // })
      // .finally(() => {
      //   submitButton.disabled = false;
      //   submitButton.innerHTML = originalText;
      // });
    }, 1500);
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      formMessage.className = 'form-message';
    }, 5000);

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Phone number formatting
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 3 && value.length <= 6) {
        value = value.slice(0, 3) + '-' + value.slice(3);
      } else if (value.length > 6) {
        value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
      }
      e.target.value = value;
    });
  }
});

/* Added Component Script */
// Optional: Add smooth scroll behavior for CTA button
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.service-section .cta-button');
  
  if (ctaButton && ctaButton.getAttribute('href').startsWith('#')) {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});

/* ZAPPY_SITE_SEARCH — JS */
(function() {
  var _lang = (document.documentElement.lang || "en").substring(0, 2).toLowerCase();
  var _noResults = { he: "לא נמצאו תוצאות", ar: "لم يتم العثور على نتائج", es: "Sin resultados", fr: "Aucun r\u00E9sultat", de: "Keine Ergebnisse", en: "No results found" };
  var noResultsText = _noResults[_lang] || _noResults.en;
  var idx = null;

  function loadIndex(cb) {
    if (idx) return cb(idx);
    var base = document.querySelector("base");
    var prefix = base ? base.getAttribute("href") : "/";
    if (prefix && !prefix.endsWith("/")) prefix += "/";
    var url = (prefix || "/") + "assets/search-index.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      if (xhr.status === 200) { try { idx = JSON.parse(xhr.responseText); } catch(e) { idx = []; } }
      else { idx = []; }
      cb(idx);
    };
    xhr.onerror = function() { idx = []; cb(idx); };
    xhr.send();
  }

  function search(query, data) {
    if (!query || query.length < 2) return [];
    var tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    var scored = [];
    for (var i = 0; i < data.length; i++) {
      var entry = data[i];
      var score = 0;
      var titleLow = (entry.title || "").toLowerCase();
      var headingsLow = (entry.headings || []).join(" ").toLowerCase();
      var contentLow = (entry.content || "").toLowerCase();
      for (var t = 0; t < tokens.length; t++) {
        var tok = tokens[t];
        if (titleLow.indexOf(tok) !== -1) score += 10;
        if (headingsLow.indexOf(tok) !== -1) score += 5;
        if (contentLow.indexOf(tok) !== -1) score += 1;
      }
      if (score > 0) scored.push({ entry: entry, score: score });
    }
    scored.sort(function(a, b) { return b.score - a.score; });
    return scored.slice(0, 10);
  }

  function escapeRe(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, function(m) { return "\\" + m; });
  }
  function highlight(text, query) {
    if (!text || !query) return text || "";
    var tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    var result = text;
    for (var i = 0; i < tokens.length; i++) {
      var re = new RegExp("(" + escapeRe(tokens[i]) + ")", "gi");
      result = result.replace(re, function(match, p1) {
        return '<span class="zappy-search-highlight">' + p1 + '</span>';
      });
    }
    return result;
  }

  function navigateToResult(href) {
    var parts = href.split("#");
    var pagePath = parts[0] || "/";
    var anchor = parts[1] || "";
    var baseEl = document.querySelector("base");
    var baseHref = baseEl ? baseEl.getAttribute("href") || "" : "";
    var isPreview = baseHref.indexOf("/api/website/preview") !== -1;
    var currentPage = "/";
    if (isPreview) {
      try { currentPage = new URL(window.location.href).searchParams.get("page") || "/"; } catch(e) {}
    } else {
      currentPage = window.location.pathname;
    }
    if (pagePath === currentPage || (pagePath === "/" && currentPage === "/")) {
      if (anchor) {
        var target = document.getElementById(anchor) || document.querySelector("#" + anchor);
        if (target) { target.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      }
    }
    if (anchor) {
      try { sessionStorage.setItem("__zappy_search_anchor", anchor); } catch(e) {}
    }
    if (isPreview) {
      var previewBase = baseHref.replace(/\/$/, "");
      window.location.href = previewBase + "?page=" + encodeURIComponent(pagePath);
    } else {
      window.location.href = pagePath + (anchor ? "#" + anchor : "");
    }
  }

  function initSearch() {
    var container = document.getElementById("zappy-search-container");
    var input = document.getElementById("zappy-search-input");
    var resultsEl = document.getElementById("zappy-search-results");
    if (!container || !input || !resultsEl) return;
    if (container.getAttribute("data-search-init")) return;
    container.setAttribute("data-search-init", "1");

    try {
      var pendingAnchor = sessionStorage.getItem("__zappy_search_anchor");
      if (pendingAnchor) {
        sessionStorage.removeItem("__zappy_search_anchor");
        setTimeout(function() {
          var el = document.getElementById(pendingAnchor) || document.querySelector("#" + pendingAnchor);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 600);
      }
    } catch(e) {}
    var activeIdx = -1;
    var debounceTimer = null;

    var trigger = container.querySelector("[data-zappy-search-trigger]");
    if (trigger) {
      var navParent = container.closest("nav, .navbar, header");
      if (navParent) {
        var sampleLink = navParent.querySelector("a:not(.btn):not([class*=cta]):not([class*=contact])");
        if (sampleLink) {
          var linkColor = window.getComputedStyle(sampleLink).color;
          trigger.style.color = linkColor;
          container.style.color = linkColor;
        }
      }
    }

    function openSearch() {
      container.classList.add("zappy-search-open");
      input.value = "";
      resultsEl.innerHTML = "";
      container.classList.remove("zappy-search-has-results");
      activeIdx = -1;
      setTimeout(function() { input.focus(); }, 80);
    }
    function closeSearch() {
      container.classList.remove("zappy-search-open", "zappy-search-has-results");
      input.value = "";
      resultsEl.innerHTML = "";
      activeIdx = -1;
    }

    if (trigger) {
      trigger.addEventListener("click", function(e) {
        e.preventDefault(); e.stopPropagation(); openSearch();
      }, true);
    }
    var closeBtn = container.querySelector(".zappy-search-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function(e) {
        e.preventDefault(); e.stopPropagation(); closeSearch();
      }, true);
    }

    document.addEventListener("click", function(e) {
      if (container.classList.contains("zappy-search-open") && !container.contains(e.target)) {
        closeSearch();
      }
    });
    document.addEventListener("keydown", function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); openSearch(); }
      if (e.key === "Escape" && container.classList.contains("zappy-search-open")) closeSearch();
    });

    function renderResults(results, query) {
      activeIdx = -1;
      if (results.length === 0 && input.value.trim().length >= 2) {
        resultsEl.innerHTML = '<div class="zappy-search-empty">' + noResultsText + "</div>";
        container.classList.add("zappy-search-has-results");
        return;
      }
      if (results.length === 0) {
        resultsEl.innerHTML = "";
        container.classList.remove("zappy-search-has-results");
        return;
      }
      var html = "";
      for (var i = 0; i < results.length; i++) {
        var r = results[i].entry;
        var href = r.page + (r.anchor ? "#" + r.anchor : "");
        var snippet = (r.content || "").substring(0, 120);
        html += '<div class="zappy-search-result-item" data-href="' + href + '" data-ridx="' + i + '" role="link" tabindex="0">';
        html += '<div class="zappy-search-result-title">' + highlight(r.title || r.anchor, query) + "</div>";
        if (snippet) html += '<div class="zappy-search-result-snippet">' + highlight(snippet, query) + "</div>";
        if (r.pageTitle && r.page !== "/") html += '<div class="zappy-search-result-page">' + r.pageTitle + "</div>";
        html += "</div>";
      }
      resultsEl.innerHTML = html;
      container.classList.add("zappy-search-has-results");
      resultsEl.querySelectorAll(".zappy-search-result-item").forEach(function(el) {
        el.addEventListener("click", function(e) {
          e.stopPropagation(); closeSearch(); navigateToResult(el.getAttribute("data-href"));
        });
      });
    }

    input.addEventListener("input", function() {
      clearTimeout(debounceTimer);
      var q = input.value.trim();
      if (q.length < 2) {
        resultsEl.innerHTML = "";
        container.classList.remove("zappy-search-has-results");
        return;
      }
      debounceTimer = setTimeout(function() {
        loadIndex(function(data) { renderResults(search(q, data), q); });
      }, 200);
    });

    input.addEventListener("keydown", function(e) {
      var items = resultsEl.querySelectorAll(".zappy-search-result-item");
      if (!items.length) return;
      if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, items.length - 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); }
      else if (e.key === "Enter" && activeIdx >= 0) { e.preventDefault(); items[activeIdx].click(); return; }
      else return;
      items.forEach(function(el, i) { el.classList.toggle("zappy-search-active", i === activeIdx); });
      if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: "nearest" });
    });
  }

  function initMobileSearch() {
    var mBar = document.getElementById("zappy-search-mobile-bar");
    var mInput = document.getElementById("zappy-search-mobile-input");
    var mResults = document.getElementById("zappy-search-mobile-results");
    var mTrigger = document.querySelector("[data-zappy-search-mobile-trigger]");
    if (!mBar || !mInput || !mTrigger) return;
    if (mBar.getAttribute("data-mobile-init")) return;
    mBar.setAttribute("data-mobile-init", "1");
    var mCloseBtn = mBar.querySelector(".zappy-search-mobile-close");
    var mTimer = null;

    function openMobile() {
      mBar.classList.add("zappy-mobile-open");
      setTimeout(function() { mInput.focus(); }, 100);
    }
    function closeMobile() {
      mBar.classList.remove("zappy-mobile-open", "zappy-mobile-has-results");
      mInput.value = "";
      if (mResults) mResults.innerHTML = "";
    }

    mTrigger.addEventListener("click", function(e) {
      e.preventDefault(); e.stopPropagation();
      if (mBar.classList.contains("zappy-mobile-open")) closeMobile();
      else openMobile();
    }, true);

    if (mCloseBtn) {
      mCloseBtn.addEventListener("click", function(e) {
        e.preventDefault(); e.stopPropagation(); closeMobile();
      }, true);
    }

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && mBar.classList.contains("zappy-mobile-open")) closeMobile();
    });

    function renderMobileResults(results, query) {
      if (!mResults) return;
      if (results.length === 0 && mInput.value.trim().length >= 2) {
        mResults.innerHTML = '<div class="zappy-search-empty">' + noResultsText + "</div>";
        mBar.classList.add("zappy-mobile-has-results");
        return;
      }
      if (results.length === 0) {
        mResults.innerHTML = "";
        mBar.classList.remove("zappy-mobile-has-results");
        return;
      }
      var html = "";
      for (var i = 0; i < results.length; i++) {
        var r = results[i].entry;
        var href = r.page + (r.anchor ? "#" + r.anchor : "");
        var snippet = (r.content || "").substring(0, 120);
        html += '<div class="zappy-search-result-item" data-href="' + href + '" role="link" tabindex="0">';
        html += '<div class="zappy-search-result-title">' + highlight(r.title || r.anchor, query) + "</div>";
        if (snippet) html += '<div class="zappy-search-result-snippet">' + highlight(snippet, query) + "</div>";
        if (r.pageTitle && r.page !== "/") html += '<div class="zappy-search-result-page">' + r.pageTitle + "</div>";
        html += "</div>";
      }
      mResults.innerHTML = html;
      mBar.classList.add("zappy-mobile-has-results");
      mResults.querySelectorAll(".zappy-search-result-item").forEach(function(el) {
        el.addEventListener("click", function(e) {
          e.stopPropagation(); closeMobile(); navigateToResult(el.getAttribute("data-href"));
        });
      });
    }

    mInput.addEventListener("input", function() {
      clearTimeout(mTimer);
      var q = mInput.value.trim();
      if (q.length < 2) { if (mResults) { mResults.innerHTML = ""; } mBar.classList.remove("zappy-mobile-has-results"); return; }
      mTimer = setTimeout(function() {
        loadIndex(function(data) { renderMobileResults(search(q, data), q); });
      }, 200);
    });
  }

  window.__zappyInitSearch = function() {
    var c = document.getElementById("zappy-search-container");
    if (c) c.removeAttribute("data-search-init");
    var m = document.getElementById("zappy-search-mobile-bar");
    if (m) m.removeAttribute("data-mobile-init");
    initSearch();
    initMobileSearch();
  };

  initSearch();
  initMobileSearch();
  if (document.readyState !== "complete") {
    window.addEventListener("load", function() { initSearch(); initMobileSearch(); });
  }
})();
/* ZAPPY_SITE_SEARCH — JS_END */


/* ZAPPY_PUBLISHED_LIGHTBOX_RUNTIME */
(function(){
  try {
    if (window.__zappyPublishedLightboxInit) return;
    window.__zappyPublishedLightboxInit = true;

    function safeText(s){ try { return String(s || '').replace(/"/g,'&quot;'); } catch(e){ return ''; } }

    function ensureOverlayForToggle(toggle){
      try {
        if (!toggle || !toggle.id) return;
        if (toggle.id.indexOf('zappy-lightbox-toggle-') !== 0) return;
        var elementId = toggle.id.replace('zappy-lightbox-toggle-','');
        var label = document.querySelector('label.zappy-lightbox-trigger[for="' + toggle.id + '"]');
        if (!label) return;

        // If toggle is inside the label (corrupted), move it before the label so the for attribute works consistently.
        try {
          if (label.contains(toggle) && label.parentNode) {
            label.parentNode.insertBefore(toggle, label);
          }
        } catch (e0) {}

        var lightboxId = 'zappy-lightbox-' + elementId;
        var lb = document.getElementById(lightboxId);
        if (lb && lb.parentNode !== document.body) {
          try { document.body.appendChild(lb); } catch (eMove) {}
        }

        if (!lb) {
          var img = null;
          try { img = label.querySelector('img'); } catch (eImg0) {}
          if (!img) {
            try { img = document.querySelector('img[data-element-id="' + elementId + '"]'); } catch (eImg1) {}
          }
          if (!img) return;

          lb = document.createElement('div');
          lb.id = lightboxId;
          lb.className = 'zappy-lightbox';
          lb.setAttribute('data-zappy-image-lightbox','true');
          lb.style.display = 'none';
          lb.innerHTML =
            '<label class="zappy-lightbox-backdrop" for="' + toggle.id + '" aria-label="Close"></label>' +
            '<div class="zappy-lightbox-content">' +
              '<label class="zappy-lightbox-close" for="' + toggle.id + '" aria-label="Close">×</label>' +
              '<img class="zappy-lightbox-image" src="' + safeText(img.currentSrc || img.src || img.getAttribute('src')) + '" alt="' + safeText(img.getAttribute('alt') || 'Image') + '">' +
            '</div>';
          document.body.appendChild(lb);
        }

        // Keep overlay image in sync at open time (in case src changed / responsive currentSrc)
        function syncOverlayImage(){
          try {
            var imgCur = label.querySelector('img');
            var imgLb = lb.querySelector('img');
            if (imgCur && imgLb) {
              imgLb.src = imgCur.currentSrc || imgCur.src || imgLb.src;
              imgLb.alt = imgCur.alt || imgLb.alt;
            }
          } catch (eSync) {}
        }

        if (!toggle.__zappyLbBound) {
          toggle.addEventListener('change', function(){
            if (toggle.checked) syncOverlayImage();
            lb.style.display = toggle.checked ? 'flex' : 'none';
          });
          toggle.__zappyLbBound = true;
        }

        if (!lb.__zappyLbBound) {
          lb.addEventListener('click', function(ev){
            try {
              var t = ev.target;
              if (!t) return;
              if (t.classList && (t.classList.contains('zappy-lightbox-backdrop') || t.classList.contains('zappy-lightbox-close'))) {
                ev.preventDefault();
                toggle.checked = false;
                lb.style.display = 'none';
              }
            } catch (e2) {}
          });
          lb.__zappyLbBound = true;
        }

        if (!label.__zappyLbClick) {
          label.addEventListener('click', function(ev){
            try {
              if (document.body && document.body.classList && document.body.classList.contains('zappy-edit-mode')) return;
              if (ev && ev.target && ev.target.closest && ev.target.closest('a[href],button,input,select,textarea')) return;
              ev.preventDefault();
              ev.stopPropagation();
              toggle.checked = true;
              syncOverlayImage();
              lb.style.display = 'flex';
            } catch (e3) {}
          }, true);
          label.__zappyLbClick = true;
        }
      } catch (e) {}
    }

    function ensureLightboxCss(){
      try {
        var head = document.head || document.querySelector('head');
        if (!head || head.querySelector('style[data-zappy-image-lightbox="true"]')) return;
        var s = document.createElement('style');
        s.setAttribute('data-zappy-image-lightbox','true');
        s.textContent =
          '.zappy-lightbox{position:fixed;inset:0;background:rgba(0,0,0,.72);display:none;align-items:center;justify-content:center;z-index:9999;padding:24px;}'+
          '.zappy-lightbox-content{position:relative;max-width:min(1100px,92vw);max-height:92vh;}'+
          '.zappy-lightbox-content img{max-width:92vw;max-height:92vh;display:block;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.45);}'+
          '.zappy-lightbox-close{position:absolute;top:-14px;right:-14px;width:32px;height:32px;border-radius:999px;background:#fff;color:#111;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 8px 24px rgba(0,0,0,.25);cursor:pointer;}'+
          '.zappy-lightbox-backdrop{position:absolute;inset:0;display:block;cursor:pointer;}'+
          'input.zappy-lightbox-toggle{position:absolute;opacity:0;pointer-events:none;}'+
          'label.zappy-lightbox-trigger{display:contents;}'+
          'label.zappy-lightbox-trigger{cursor:zoom-in;}'+
          'label.zappy-lightbox-trigger [data-zappy-zoom-wrapper="true"],'+
          'label.zappy-lightbox-trigger img{cursor:zoom-in !important;}'+
          'input.zappy-lightbox-toggle:checked + label.zappy-lightbox-trigger + .zappy-lightbox{display:flex;}';
        head.appendChild(s);
      } catch(e){}
    }

    function initZappyPublishedLightboxes(){
      try {
        ensureLightboxCss();
        // Repair orphaned labels (label has for=toggleId but input is missing)
        var orphanLabels = document.querySelectorAll('label.zappy-lightbox-trigger[for^="zappy-lightbox-toggle-"]');
        for (var i=0;i<orphanLabels.length;i++){
          var lbl = orphanLabels[i];
          var forId = lbl && lbl.getAttribute ? lbl.getAttribute('for') : null;
          if (!forId) continue;
          if (!document.getElementById(forId)) {
            var t = document.createElement('input');
            t.type = 'checkbox';
            t.id = forId;
            t.className = 'zappy-lightbox-toggle';
            t.setAttribute('data-zappy-image-lightbox','true');
            if (lbl.parentNode) lbl.parentNode.insertBefore(t, lbl);
          }
        }

        var toggles = document.querySelectorAll('input.zappy-lightbox-toggle[id^="zappy-lightbox-toggle-"]');
        for (var j=0;j<toggles.length;j++){
          ensureOverlayForToggle(toggles[j]);
        }

        // Close on ESC if any lightbox is open
        if (!document.__zappyLbEscBound) {
          document.addEventListener('keydown', function(ev){
            try {
              if (!ev || ev.key !== 'Escape') return;
              var openLb = document.querySelector('.zappy-lightbox[style*="display: flex"]');
              if (openLb) {
                var openToggle = null;
                try {
                  var id = openLb.id || '';
                  if (id.indexOf('zappy-lightbox-') === 0) {
                    openToggle = document.getElementById('zappy-lightbox-toggle-' + id.replace('zappy-lightbox-',''));
                  }
                } catch (e4) {}
                if (openToggle) openToggle.checked = false;
                openLb.style.display = 'none';
              }
            } catch (e5) {}
          });
          document.__zappyLbEscBound = true;
        }
      } catch (eInit) {}
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initZappyPublishedLightboxes, { once: true });
    } else {
      initZappyPublishedLightboxes();
    }
  } catch (eOuter) {}
})();
/* END ZAPPY_PUBLISHED_LIGHTBOX_RUNTIME */


/* ZAPPY_PUBLISHED_ZOOM_WRAPPER_RUNTIME */
(function(){
  try {
    if (window.__zappyPublishedZoomInit) return;
    window.__zappyPublishedZoomInit = true;

    function isHeroBgWrapper(wrapper) {
      var img = wrapper.querySelector('img');
      if (img && (img.getAttribute('data-hero-bg') === 'true' || img.getAttribute('data-hero-background') === 'true')) return true;
      var pos = (wrapper.style.position || '').replace(/\s*!important\s*/g, '').trim();
      var w = (wrapper.style.width || '').replace(/\s*!important\s*/g, '').trim();
      var h = (wrapper.style.height || '').replace(/\s*!important\s*/g, '').trim();
      if (pos === 'absolute' && w === '100%' && h === '100%') return true;
      return false;
    }

    function parseObjPos(op) {
      var x = 50, y = 50;
      try {
        if (typeof op === 'string') {
          var m = op.match(/(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)%/);
          if (m) { x = parseFloat(m[1]); y = parseFloat(m[2]); }
        }
      } catch (e) {}
      if (!isFinite(x)) x = 50; if (!isFinite(y)) y = 50;
      return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) };
    }

    function coverPercents(imgA, contA) {
      if (!isFinite(imgA) || imgA <= 0 || !isFinite(contA) || contA <= 0)
        return { w: 100, h: 100 };
      if (imgA >= contA) return { w: (imgA / contA) * 100, h: 100 };
      return { w: 100, h: (contA / imgA) * 100 };
    }

    function applyZoom(wrapper, img) {
      var zoom = parseFloat(img.getAttribute('data-zappy-zoom')) || 1;
      if (!(zoom > 0)) zoom = 1;

      var widthMode = wrapper.getAttribute('data-zappy-zoom-wrapper-width-mode');
      if (widthMode === 'full') return;
      if (isHeroBgWrapper(wrapper)) return;

      var isMobile = window.innerWidth <= 768;
      if (isMobile) {
        img.style.setProperty('position', 'relative', 'important');
        img.style.setProperty('width', '100%', 'important');
        img.style.setProperty('height', 'auto', 'important');
        img.style.setProperty('max-width', '100%', 'important');
        img.style.setProperty('display', 'block', 'important');
        img.style.setProperty('object-fit', 'cover', 'important');
        img.style.removeProperty('left');
        img.style.removeProperty('top');
        img.style.setProperty('margin', '0', 'important');
        var mSrc = img.getAttribute('data-zappy-mobile-src');
        var mPos = img.getAttribute('data-zappy-mobile-object-position');
        var mZoom = parseFloat(img.getAttribute('data-zappy-mobile-zoom'));
        if (mSrc) img.src = mSrc;
        if (mPos) img.style.setProperty('object-position', mPos, 'important');
        if (mZoom > 1) {
          img.style.setProperty('transform', 'scale(' + mZoom + ')', 'important');
          img.style.setProperty('transform-origin', mPos || '50% 50%', 'important');
          wrapper.style.setProperty('overflow', 'hidden', 'important');
        }
        return;
      }

      // Desktop: if the image already has zoom styles saved from the editor
      // (position:absolute + percentage-based width), trust them.
      // The saved percentages are proportional and correct for any container size,
      // since zoom/crop math is based purely on aspect ratios.
      // Recalculating here can produce different values when the container
      // dimensions differ between preview and deployed site.
      var existingPos = (img.style.position || '').replace(/s*!importants*/g, '').trim();
      var existingW = (img.style.width || '').replace(/s*!importants*/g, '').trim();
      if (existingPos === 'absolute' && existingW.indexOf('%') !== -1) {
        wrapper.style.setProperty('overflow', 'hidden', 'important');
        wrapper.style.setProperty('position', 'relative', 'important');
        return;
      }

      // Image lacks saved zoom styles — calculate from scratch
      var rect = wrapper.getBoundingClientRect();
      if (!rect || !rect.width || !rect.height) return;

      var nW = img.naturalWidth || 0, nH = img.naturalHeight || 0;
      if (!(nW > 0 && nH > 0)) return;

      var imgA = nW / nH;
      var contA = rect.width / rect.height;
      var cover = coverPercents(imgA, contA);

      var wPct = 100, hPct = 100;
      if (zoom >= 1) {
        wPct = cover.w * zoom;
        hPct = cover.h * zoom;
      } else {
        var t = (zoom - 0.5) / 0.5;
        if (!isFinite(t)) t = 0;
        t = Math.max(0, Math.min(1, t));
        wPct = 100 + t * (cover.w - 100);
        hPct = 100 + t * (cover.h - 100);
      }

      var op = img.style.objectPosition || window.getComputedStyle(img).objectPosition || '50% 50%';
      var pos = parseObjPos(op);
      var leftPct = (100 - wPct) * (pos.x / 100);
      var topPct = (100 - hPct) * (pos.y / 100);

      img.style.setProperty('position', 'absolute', 'important');
      img.style.setProperty('left', leftPct + '%', 'important');
      img.style.setProperty('top', topPct + '%', 'important');
      img.style.setProperty('width', wPct + '%', 'important');
      img.style.setProperty('height', hPct + '%', 'important');
      img.style.setProperty('max-width', 'none', 'important');
      img.style.setProperty('max-height', 'none', 'important');
      img.style.setProperty('display', 'block', 'important');
      img.style.setProperty('object-fit', zoom < 1 ? 'fill' : 'cover', 'important');
      img.style.setProperty('margin', '0', 'important');
    }

    function fixOrphanedZoomImages() {
      if (window.innerWidth > 768) return;
      var zoomImgs = document.querySelectorAll('img[data-zappy-zoom]');
      for (var j = 0; j < zoomImgs.length; j++) {
        var img = zoomImgs[j];
        if (img.closest && img.closest('[data-zappy-zoom-wrapper="true"]')) continue;
        img.style.setProperty('position', 'relative', 'important');
        img.style.setProperty('width', '100%', 'important');
        img.style.setProperty('height', 'auto', 'important');
        img.style.setProperty('max-width', '100%', 'important');
        img.style.setProperty('max-height', '300px', 'important');
        img.style.setProperty('object-fit', 'cover', 'important');
        img.style.removeProperty('left');
        img.style.removeProperty('top');
      }
    }

    function restoreWrapperDimensions(wrapper) {
      var widthMode = wrapper.getAttribute('data-zappy-zoom-wrapper-width-mode') || 'px';
      if (widthMode === 'full' || widthMode === 'grid-responsive') return;
      if (isHeroBgWrapper(wrapper)) return;

      var storedW = wrapper.getAttribute('data-zappy-zoom-wrapper-width');
      var storedH = wrapper.getAttribute('data-zappy-zoom-wrapper-height');
      if (!storedW && !storedH) return;

      if (widthMode === 'px' && storedW) {
        var curW = (wrapper.style.width || '').replace(/s*!importants*/g, '').trim();
        var storedWNorm = storedW.replace(/s*!importants*/g, '').trim();
        if (!curW || curW === '100%' || curW.indexOf('%') !== -1 || curW !== storedWNorm) {
          wrapper.style.setProperty('width', storedW, 'important');
          wrapper.style.setProperty('max-width', '100%', 'important');
        }
      }
      if (storedH) {
        var curH = (wrapper.style.height || '').replace(/s*!importants*/g, '').trim();
        var storedHNorm = storedH.replace(/s*!importants*/g, '').trim();
        if (!curH || curH === 'auto' || curH === '100%' || curH.indexOf('%') !== -1 || curH !== storedHNorm) {
          wrapper.style.setProperty('height', storedH, 'important');
        }
      }
      wrapper.style.setProperty('overflow', 'hidden', 'important');
      wrapper.style.setProperty('position', 'relative', 'important');
    }

    function fixHeroBgWrapperStyles(wrapper) {
      if (!isHeroBgWrapper(wrapper)) return;
      wrapper.style.setProperty('position', 'absolute', 'important');
      wrapper.style.setProperty('top', '0', 'important');
      wrapper.style.setProperty('left', '0', 'important');
      wrapper.style.setProperty('width', '100%', 'important');
      wrapper.style.setProperty('height', '100%', 'important');
      wrapper.style.setProperty('max-width', 'none', 'important');
      wrapper.style.setProperty('overflow', 'hidden', 'important');
      wrapper.setAttribute('data-zappy-zoom-wrapper-width-mode', 'full');
      var img = wrapper.querySelector('img');
      if (img) {
        img.style.setProperty('width', '100%', 'important');
        img.style.setProperty('height', '100%', 'important');
        img.style.setProperty('object-fit', 'cover', 'important');
        img.style.setProperty('position', 'relative', 'important');
        img.style.setProperty('top', '0', 'important');
        img.style.setProperty('left', '0', 'important');
        img.style.setProperty('max-width', 'none', 'important');
        img.style.setProperty('max-height', 'none', 'important');
        img.style.setProperty('display', 'block', 'important');
        if (window.innerWidth <= 768) {
          var mSrc = img.getAttribute('data-zappy-mobile-src');
          var mPos = img.getAttribute('data-zappy-mobile-object-position');
          var mZoom = parseFloat(img.getAttribute('data-zappy-mobile-zoom'));
          if (mSrc) img.src = mSrc;
          if (mPos) img.style.setProperty('object-position', mPos, 'important');
          if (mZoom > 1) {
            img.style.setProperty('transform', 'scale(' + mZoom + ')', 'important');
            img.style.setProperty('transform-origin', mPos || '50% 50%', 'important');
          }
        }
      }
    }

    function initZoomWrappers() {
      var wrappers = document.querySelectorAll('[data-zappy-zoom-wrapper="true"]');
      for (var i = 0; i < wrappers.length; i++) {
        (function(wrapper) {
          var img = wrapper.querySelector('img');
          if (!img) return;
          if (wrapper.closest && wrapper.closest('.zappy-carousel-js-init, .zappy-carousel-active')) return;
          fixHeroBgWrapperStyles(wrapper);
          if (window.innerWidth > 768) restoreWrapperDimensions(wrapper);
          if (img.complete && img.naturalWidth > 0) {
            setTimeout(function() { applyZoom(wrapper, img); }, 0);
          } else {
            img.addEventListener('load', function onLoad() {
              img.removeEventListener('load', onLoad);
              applyZoom(wrapper, img);
            }, { once: true });
          }
        })(wrappers[i]);
      }
      fixOrphanedZoomImages();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initZoomWrappers, { once: true });
    } else {
      setTimeout(initZoomWrappers, 50);
    }
  } catch (eOuter) {}
})();
/* END ZAPPY_PUBLISHED_ZOOM_WRAPPER_RUNTIME */


/* ZAPPY_MOBILE_MENU_TOGGLE */
(function(){
  try {
    if (window.__zappyMobileMenuToggleInit) return;
    window.__zappyMobileMenuToggleInit = true;

    function initMobileToggle() {
      var toggle = document.querySelector('.mobile-toggle, #mobileToggle');
      var navMenu = document.querySelector('#navMenu, .nav-menu, .navbar-menu');
      if (!toggle || !navMenu) return;

      // Skip if this toggle already has a click handler from the site's own JS
      if (toggle.__zappyMobileToggleBound) return;
      toggle.__zappyMobileToggleBound = true;

      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var hamburgerIcon = toggle.querySelector('.hamburger-icon');
        var closeIcon = toggle.querySelector('.close-icon');
        var isOpen = navMenu.classList.contains('active') || navMenu.style.display === 'block';

        if (isOpen) {
          navMenu.classList.remove('active');
          navMenu.style.display = '';
          if (hamburgerIcon) hamburgerIcon.style.setProperty('display', 'block', 'important');
          if (closeIcon) closeIcon.style.setProperty('display', 'none', 'important');
          document.body.style.overflow = '';
        } else {
          navMenu.classList.add('active');
          navMenu.style.display = 'block';
          if (hamburgerIcon) hamburgerIcon.style.setProperty('display', 'none', 'important');
          if (closeIcon) closeIcon.style.setProperty('display', 'block', 'important');
          document.body.style.overflow = 'hidden';
        }
      }, true);

      // Close on clicking outside
      document.addEventListener('click', function(e) {
        if (!navMenu.classList.contains('active')) return;
        if (toggle.contains(e.target) || navMenu.contains(e.target)) return;
        navMenu.classList.remove('active');
        navMenu.style.display = '';
        var hi = toggle.querySelector('.hamburger-icon');
        var ci = toggle.querySelector('.close-icon');
        if (hi) hi.style.setProperty('display', 'block', 'important');
        if (ci) ci.style.setProperty('display', 'none', 'important');
        document.body.style.overflow = '';
      });

      // Close on Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navMenu.style.display = '';
          var hi = toggle.querySelector('.hamburger-icon');
          var ci = toggle.querySelector('.close-icon');
          if (hi) hi.style.setProperty('display', 'block', 'important');
          if (ci) ci.style.setProperty('display', 'none', 'important');
          document.body.style.overflow = '';
        }
      });

      // Close when clicking a nav link (navigating)
      navMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navMenu.classList.remove('active');
          navMenu.style.display = '';
          var hi = toggle.querySelector('.hamburger-icon');
          var ci = toggle.querySelector('.close-icon');
          if (hi) hi.style.setProperty('display', 'block', 'important');
          if (ci) ci.style.setProperty('display', 'none', 'important');
          document.body.style.overflow = '';
        });
      });
    }

    function initPhoneButton() {
      var phoneBtn = document.querySelector('.phone-header-btn');
      if (!phoneBtn || phoneBtn.__zappyPhoneBound) return;
      phoneBtn.__zappyPhoneBound = true;

      phoneBtn.addEventListener('click', function() {
        var phoneNumber = phoneBtn.getAttribute('data-phone') || null;

        if (!phoneNumber) {
          var telLinks = document.querySelectorAll('a[href^="tel:"]');
          if (telLinks.length > 0) {
            phoneNumber = telLinks[0].getAttribute('href').replace('tel:', '');
          }
        }

        if (!phoneNumber) {
          var allLinks = document.querySelectorAll('a[href]');
          for (var i = 0; i < allLinks.length; i++) {
            var h = allLinks[i].getAttribute('href') || '';
            var cleaned = h.replace(/[-\s()]/g, '');
            if (/^(\+?\d{9,15}|0\d{8,9})$/.test(cleaned)) {
              phoneNumber = cleaned;
              break;
            }
          }
        }

        if (phoneNumber && phoneNumber.indexOf('[') === -1) {
          window.location.href = 'tel:' + phoneNumber;
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { initMobileToggle(); initPhoneButton(); }, { once: true });
    } else {
      initMobileToggle();
      initPhoneButton();
    }
  } catch (e) {}
})();
/* END ZAPPY_MOBILE_MENU_TOGGLE */


/* ZAPPY_FAQ_ACCORDION_TOGGLE */
(function(){
  try {
    if (window.__zappyFaqToggleInit) return;
    window.__zappyFaqToggleInit = true;

    var answerSel = '[class*="faq-answer"], [class*="faq-content"], [class*="faq-body"], .accordion-content, .accordion-body';

    function initFaqToggle() {
      var items = document.querySelectorAll('[class*="faq-item"], .accordion-item');
      if (!items.length) return;

      items.forEach(function(item) {
        var question = item.querySelector(
          '[class*="faq-question"], [class*="faq-header"], .accordion-header, .accordion-toggle'
        );
        if (!question) return;
        if (question.__zappyFaqBound) return;
        question.__zappyFaqBound = true;
        question.style.cursor = 'pointer';

        question.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          var parent = item.parentElement;
          if (parent) {
            var siblings = parent.querySelectorAll('[class*="faq-item"], .accordion-item');
            siblings.forEach(function(sib) {
              if (sib !== item && sib.classList.contains('active')) {
                sib.classList.remove('active');
                var sibQ = sib.querySelector('[class*="faq-question"], [class*="faq-header"], .accordion-header');
                if (sibQ) sibQ.setAttribute('aria-expanded', 'false');
                var sibA = sib.querySelector(answerSel);
                if (sibA) {
                  sibA.style.maxHeight = '0';
                  sibA.style.overflow = 'hidden';
                  sibA.style.opacity = '0';
                  sibA.style.paddingTop = '0';
                  sibA.style.paddingBottom = '0';
                }
              }
            });
          }

          var isActive = item.classList.toggle('active');
          question.setAttribute('aria-expanded', isActive ? 'true' : 'false');

          var answer = item.querySelector(answerSel);
          if (answer) {
            answer.style.transition = 'max-height 0.35s ease, opacity 0.25s ease, padding 0.25s ease';
            if (isActive) {
              answer.style.display = '';
              answer.style.maxHeight = answer.scrollHeight + 'px';
              answer.style.overflow = 'hidden';
              answer.style.opacity = '1';
              answer.style.paddingTop = '';
              answer.style.paddingBottom = '';
            } else {
              answer.style.maxHeight = '0';
              answer.style.overflow = 'hidden';
              answer.style.opacity = '0';
              answer.style.paddingTop = '0';
              answer.style.paddingBottom = '0';
            }
          }

          var chevron = question.querySelector('[class*="chevron"], [class*="icon"], svg');
          if (chevron) {
            chevron.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
            chevron.style.transition = 'transform 0.3s ease';
          }
        });
      });

      items.forEach(function(item) {
        if (item.classList.contains('active')) return;
        var answer = item.querySelector(answerSel);
        if (answer) {
          answer.style.maxHeight = '0';
          answer.style.overflow = 'hidden';
          answer.style.opacity = '0';
          answer.style.paddingTop = '0';
          answer.style.paddingBottom = '0';
          answer.style.transition = 'max-height 0.35s ease, opacity 0.25s ease, padding 0.25s ease';
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFaqToggle, { once: true });
    } else {
      initFaqToggle();
    }
  } catch (e) {}
})();
/* END ZAPPY_FAQ_ACCORDION_TOGGLE */


/* ZAPPY_NAV_SCROLL_PADDING */
(function(){
  try {
    if (window.__zappyNavScrollPaddingInit) return;
    window.__zappyNavScrollPaddingInit = true;
    function updateScrollPadding() {
      var nav = document.querySelector('nav.navbar') || document.querySelector('nav') || document.querySelector('header');
      if (!nav) return;
      var s = window.getComputedStyle(nav);
      if (s.position !== 'fixed' && s.position !== 'sticky') return;
      var h = nav.offsetHeight;
      if (h > 0) document.documentElement.style.scrollPaddingTop = h + 'px';
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', updateScrollPadding, { once: true });
    } else {
      updateScrollPadding();
    }
    window.addEventListener('resize', updateScrollPadding, { passive: true });
  } catch (e) {}
})();
/* END ZAPPY_NAV_SCROLL_PADDING */


/* ZAPPY_CONTACT_FORM_PREVENT_DEFAULT */
(function(){
  try {
    var _kw=['contact','booking','inquiry','enquiry','register','signup','sign-up','order','request','apply'];
    function isContactForm(form) {
      var cls=(form.className||'').toLowerCase();
      var id=(form.id||'').toLowerCase();
      var act=(form.getAttribute('action')||'').toLowerCase();
      if(_kw.some(function(k){return cls.indexOf(k)!==-1||id.indexOf(k)!==-1||act.indexOf(k)!==-1;})) return true;
      var sec=form.closest&&form.closest('section');
      if(sec){
        var sc=(sec.className||'').toLowerCase();
        var si=(sec.id||'').toLowerCase();
        if(_kw.some(function(k){return sc.indexOf(k)!==-1||si.indexOf(k)!==-1;})) return true;
        if(sc.indexOf('form-section')!==-1||sc.indexOf('form_section')!==-1) return true;
      }
      if(window.zappyContactFormLoaded){
        var inputs=form.querySelectorAll('input,textarea,select');
        var hasEmail=false,hasPassword=false,visibleCount=0;
        for(var i=0;i<inputs.length;i++){
          var inp=inputs[i];
          var t=(inp.type||'').toLowerCase();
          var n=(inp.name||'').toLowerCase();
          if(t==='hidden'||t==='submit'||t==='button'||t==='reset') continue;
          visibleCount++;
          if(t==='email'||n.indexOf('email')!==-1||n.indexOf('mail')!==-1) hasEmail=true;
          if(t==='password') hasPassword=true;
        }
        if(hasEmail&&visibleCount>=2&&!hasPassword) return true;
      }
      return false;
    }

    function showFormFeedback(form, msg, type) {
      var old = form.querySelector('.zappy-form-feedback');
      if (old) old.remove();

      var bg = type==='success'?'#d4edda':type==='error'?'#f8d7da':'#d1ecf1';
      var fg = type==='success'?'#155724':type==='error'?'#721c24':'#0c5460';
      var bd = type==='success'?'#c3e6cb':type==='error'?'#f5c6cb':'#bee5eb';
      var ic = type==='success'?'\u2705':type==='error'?'\u274C':'\u2139\uFE0F';

      var el = document.createElement('div');
      el.className = 'zappy-form-feedback';
      el.setAttribute('role', 'alert');
      el.style.cssText = 'padding:14px 18px;border-radius:8px;margin:12px 0 0;font-size:14px;line-height:1.5;background:'+bg+';color:'+fg+';border:1px solid '+bd+';text-align:center;font-family:inherit;';
      el.innerHTML = '<span style="margin-inline-end:6px">'+ic+'</span>'+msg;

      if (type === 'success') {
        form.reset();
        var formChildren = form.children;
        for (var i = 0; i < formChildren.length; i++) {
          if (formChildren[i] !== el) formChildren[i].style.display = 'none';
        }
        form.appendChild(el);
        el.style.cssText += 'padding:32px 24px;font-size:16px;';
      } else {
        var btn = form.querySelector('button[type="submit"],input[type="submit"]');
        if (btn) btn.parentNode.insertBefore(el, btn.nextSibling);
        else form.appendChild(el);
        setTimeout(function(){ if(el.parentElement) el.remove(); }, 8000);
      }
    }

    var _coreNameFields=['name','firstName','first_name','fname','lastName','last_name','lname'];
    var _coreEmailFields=['email','emailAddress','mail','e-mail'];
    var _corePhoneFields=['phone','tel','telephone','mobile','cellphone'];
    var _coreMsgFields=['message','msg','comments','comment','description','details','notes','body','text','inquiry'];
    var _coreSubjectFields=['subject','topic','regarding','re'];
    var _allCoreFields=[].concat(_coreNameFields,_coreEmailFields,_corePhoneFields,_coreMsgFields,_coreSubjectFields);

    document.addEventListener('submit', function(e) {
      var form = e.target;
      if (!form || form.tagName !== 'FORM' || !isContactForm(form)) return;
      e.preventDefault();
      e.stopPropagation();

      var origSubmit = form.submit;
      form.submit = function(){ };

      if (form.__zappySubmitting) return;
      form.__zappySubmitting = true;

      var oldFeedback = form.querySelector('.zappy-form-feedback');
      if (oldFeedback) oldFeedback.remove();

      var btn = form.querySelector('button[type="submit"],input[type="submit"]');
      var origText = btn ? (btn.value || btn.textContent) : '';
      if (btn) {
        if (btn.tagName === 'INPUT') btn.value = 'Sending...';
        else btn.textContent = 'Sending...';
        btn.disabled = true;
      }

      var fd = new FormData(form);
      var data = {};
      for(var pair of fd.entries()){
        if(data[pair[0]]!==undefined){
          if(Array.isArray(data[pair[0]])) data[pair[0]].push(pair[1]);
          else data[pair[0]]=[data[pair[0]],pair[1]];
        } else data[pair[0]]=pair[1];
      }

      var resolvedName=(data.name||'').trim()
        ||[data.firstName||data.first_name||data.fname||'',data.lastName||data.last_name||data.lname||''].filter(Boolean).join(' ').trim()
        ||(data.email||data.emailAddress||data.mail||'').trim()
        ||'Anonymous';
      var resolvedEmail=(data.email||data.emailAddress||data.mail||data['e-mail']||'').trim();
      var resolvedPhone=data.phone||data.tel||data.telephone||data.mobile||data.cellphone||null;
      var resolvedSubject=data.subject||data.topic||data.regarding||data.re||'Contact Form Submission';
      var resolvedMsg=(data.message||data.msg||data.comments||data.comment||data.description||data.details||data.notes||data.body||data.text||data.inquiry||'').trim();
      if(!resolvedMsg){
        var _extra=Object.entries(data).filter(function(e){return _allCoreFields.indexOf(e[0])===-1;});
        if(_extra.length>0) resolvedMsg=_extra.map(function(e){var l=e[0].replace(/([A-Z])/g,' $1').replace(/[_-]/g,' ').trim();var v=Array.isArray(e[1])?e[1].join(', '):e[1];return l+': '+v;}).join('\n');
        else resolvedMsg='Form submission from '+window.location.pathname;
      }

      var extraFields={};
      Object.keys(data).forEach(function(k){if(_allCoreFields.indexOf(k)===-1&&data[k]!==''&&data[k]!=null) extraFields[k]=data[k];});

      var currentPath = window.location.pathname;
      try { var pg=new URLSearchParams(window.location.search).get('page'); if(pg) currentPath=pg; } catch(x){}

      var wid = 'dcdc34dd-3985-48c8-b0f3-d984481f8986';

      var apiBase = (window.ZAPPY_API_BASE || 'https://api.zappy5.com').replace(/\/$/,'');
      apiBase = apiBase + '/api/email/contact-form';

      var payload={
        websiteId: wid,
        name: resolvedName,
        email: resolvedEmail,
        subject: resolvedSubject,
        message: resolvedMsg,
        phone: resolvedPhone,
        currentPagePath: currentPath
      };
      if(Object.keys(extraFields).length>0) payload.extraFields=extraFields;

      fetch(apiBase, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function(r){ return r.json(); }).then(function(result){
        if (result.success) {
          if (result.thankYouPagePath && result.ticketNumber) {
            window.location.href = result.thankYouPagePath + '?ticket=' + encodeURIComponent(result.ticketNumber);
            return;
          }
          showFormFeedback(form, result.message || 'Thank you! We will get back to you soon.', 'success');
        } else {
          showFormFeedback(form, result.error || 'Failed to send. Please try again.', 'error');
        }
      }).catch(function(){
        showFormFeedback(form, 'Unable to send message right now. Please try again later.', 'error');
      }).finally(function(){
        form.__zappySubmitting = false;
        form.submit = origSubmit;
        if (btn) {
          if (btn.tagName === 'INPUT') btn.value = origText;
          else btn.textContent = origText;
          btn.disabled = false;
        }
      });
    }, true);
  } catch (e) {}
})();
/* END ZAPPY_CONTACT_FORM_PREVENT_DEFAULT */


/* ZAPPY_PUBLISHED_GRID_CENTERING */
(function(){
  try {
    if (window.__zappyGridCenteringInit) return;
    window.__zappyGridCenteringInit = true;

    function centerPartialGridRows() {
      var grids = document.querySelectorAll('[data-zappy-explicit-columns="true"], [data-zappy-auto-grid="true"]');
      for (var g = 0; g < grids.length; g++) {
        try {
          var container = grids[g];
          // Skip if already processed
          if (container.getAttribute('data-zappy-grid-centered') === 'true') continue;

          var items = [];
          for (var c = 0; c < container.children.length; c++) {
            var ch = container.children[c];
            if (!ch || !ch.tagName) continue;
            var tag = ch.tagName.toLowerCase();
            if (tag === 'script' || tag === 'style') continue;
            if (ch.getAttribute('aria-hidden') === 'true') continue;
            if (ch.getAttribute('data-zappy-internal') === 'true') continue;
            var pos = window.getComputedStyle(ch).position;
            if (pos === 'absolute' || pos === 'fixed') continue;
            items.push(ch);
          }
          var totalItems = items.length;
          if (totalItems === 0) continue;

          var cs = window.getComputedStyle(container);
          if (cs.display !== 'grid') continue;
          var gta = (cs.gridTemplateAreas || '').trim();
          if (gta && gta !== 'none') continue;
          var gtc = (cs.gridTemplateColumns || '').trim();
          if (!gtc || gtc === 'none') continue;
          var colWidths = gtc.split(' ').filter(function(v) { return v && parseFloat(v) > 0; });
          var colCount = colWidths.length;
          if (colCount <= 1) continue;

          var itemsInLastRow = totalItems % colCount;
          if (itemsInLastRow === 0) continue;

          var colWidth = parseFloat(colWidths[0]) || 0;
          var gap = parseFloat(cs.columnGap);
          if (isNaN(gap)) gap = parseFloat(cs.gap) || 0;

          var missingCols = colCount - itemsInLastRow;
          var offset = missingCols * (colWidth + gap) / 2;

          // Detect RTL
          var dir = cs.direction || 'ltr';
          var el = container;
          while (el && dir === 'ltr') {
            if (el.getAttribute && el.getAttribute('dir')) { dir = el.getAttribute('dir'); break; }
            if (el.style && el.style.direction) { dir = el.style.direction; break; }
            el = el.parentElement;
          }
          var translateValue = dir === 'rtl' ? -offset : offset;

          // Apply transform to last-row items
          // Temporarily disable CSS transitions to prevent visible animation
          // Preserve any existing transforms (e.g., scale, rotate) by composing
          var startIndex = totalItems - itemsInLastRow;
          var savedTransitions = [];
          for (var i = startIndex; i < totalItems; i++) {
            var item = items[i];
            savedTransitions.push(item.style.transition);
            item.style.transition = 'none';
            var existingTransform = item.style.transform || '';
            var newTransform = existingTransform
              ? existingTransform + ' translateX(' + translateValue + 'px)'
              : 'translateX(' + translateValue + 'px)';
            item.style.transform = newTransform;
          }

          // Force synchronous reflow so the transform is applied instantly
          void container.offsetHeight;

          // Restore original transitions
          for (var j = startIndex; j < totalItems; j++) {
            items[j].style.transition = savedTransitions[j - startIndex];
          }

          // Mark grid as processed so we don't double-apply
          container.setAttribute('data-zappy-grid-centered', 'true');
        } catch(e) {}
      }
    }

    // Run once after DOM is fully loaded (fonts, images, layout complete)
    if (document.readyState === 'complete') {
      centerPartialGridRows();
    } else {
      window.addEventListener('load', centerPartialGridRows);
    }
  } catch(e) {}
})();


/* ZAPPY_CONTENT_ALIGNMENT_RUNTIME */
(function(){
  try {
    if (window.__zappyContentAlignInit) return;
    window.__zappyContentAlignInit = true;

    var vShiftMap = { top: -0.5, upper: -0.25, center: 0, lower: 0.25, bottom: 0.5 };
    var hShiftMap = { left: -0.5, 'mid-left': -0.25, center: 0, 'mid-right': 0.25, right: 0.5 };

    function restoreContentAlignments() {
      var sections = document.querySelectorAll('[data-zappy-content-align]');
      for (var i = 0; i < sections.length; i++) {
        try { applyAlignment(sections[i]); } catch(e) {}
      }
    }

    function applyAlignment(section) {
      var target = section.querySelector('[data-zappy-align-target]');
      if (!target) return;

      var align = section.getAttribute('data-zappy-content-align') || 'center-center';
      var idx = align.indexOf('-');
      if (idx === -1) return;
      var vAlign = align.substring(0, idx) || 'center';
      var hAlign = align.substring(idx + 1) || 'center';

      if (!section.id) {
        section.id = 'zappy-section-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6);
      }
      var sel = '#' + section.id;

      var old = section.querySelector('style[data-zappy-align-style]');
      if (old) old.remove();

      var ts = window.getComputedStyle(target);
      var isFlex = (ts.display === 'flex' || ts.display === 'inline-flex');
      var isColumn = (ts.flexDirection === 'column' || ts.flexDirection === 'column-reverse');

      var sectionRect = section.getBoundingClientRect();
      var sW = sectionRect.width || section.offsetWidth || 0;
      var sH = sectionRect.height || section.offsetHeight || 0;

      var orig = target.style.cssText;
      target.style.setProperty('width', 'fit-content', 'important');
      target.style.setProperty('height', 'auto', 'important');
      target.style.setProperty('min-height', '0', 'important');
      target.style.setProperty('max-height', 'none', 'important');
      target.style.setProperty('align-self', 'flex-start', 'important');
      target.style.setProperty('flex', 'none', 'important');
      var tRect = target.getBoundingClientRect();
      var tW = tRect.width || 0;
      var tH = tRect.height || 0;
      target.style.cssText = orig;

      var freeH = Math.max(0, sW - tW);
      var freeV = Math.max(0, sH - tH);
      var hPx = Math.round((hShiftMap[hAlign] || 0) * freeH);
      var vPx = Math.round((vShiftMap[vAlign] || 0) * freeV);

      var t = [];
      t.push('margin:auto!important');
      if (hPx !== 0 || vPx !== 0) {
        t.push('transform:translate(' + hPx + 'px,' + vPx + 'px)!important');
      }
      if (isFlex) {
        t.push('align-items:center!important');
        t.push('justify-content:center!important');
      } else {
        t.push('display:flex!important');
        t.push('flex-direction:column!important');
        t.push('align-items:center!important');
      }

      var c = ['justify-content:center!important'];
      if (!isFlex && hAlign !== 'center') {
        c.push('min-width:33.33%!important');
        c.push('text-align:start!important');
      }

      var css = '';
      if (hPx !== 0 || vPx !== 0) css += sel + '{overflow:hidden!important}';
      css += sel + '>[data-zappy-align-target]{' + t.join(';') + '}';
      css += sel + '>[data-zappy-align-target]>*{' + c.join(';') + '}';
      css += '@media(max-width:768px){' +
        sel + '>[data-zappy-align-target]{align-items:center!important;margin-left:auto!important;margin-right:auto!important;' +
        (vPx !== 0 ? 'transform:translateY(' + vPx + 'px)!important' : 'transform:none!important') +
        '}' + sel + '>[data-zappy-align-target]>*{margin-left:auto!important;margin-right:auto!important}}';

      var s = document.createElement('style');
      s.setAttribute('data-zappy-align-style', 'true');
      s.textContent = css;
      section.insertBefore(s, section.firstChild);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', restoreContentAlignments);
    } else {
      restoreContentAlignments();
    }

    var _timer = null;
    window.addEventListener('resize', function() {
      clearTimeout(_timer);
      _timer = setTimeout(restoreContentAlignments, 200);
    });
    window.addEventListener('orientationchange', function() {
      clearTimeout(_timer);
      _timer = setTimeout(restoreContentAlignments, 200);
    });
  } catch(e) {}
})();


/* ZAPPY_SECTION_ID_FROM_CLASS */
(function(){
  function assignIds(){
    document.querySelectorAll('section').forEach(function(s){
      if(s.id)return;
      var cls=(s.className||'').split(/\s+/)[0];
      if(cls && !document.getElementById(cls)){s.id=cls;}
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',assignIds,{once:true});}
  else{assignIds();}
})();
/* END ZAPPY_SECTION_ID_FROM_CLASS */


/* ZAPPY_EMPTY_SUBMENU_HIDDEN */
(function(){
  function markEmpty(){
    document.querySelectorAll('.sub-menu, .dropdown-menu').forEach(function(ul){
      var hasVisible=false;
      for(var i=0;i<ul.children.length;i++){
        if(window.getComputedStyle(ul.children[i]).display!=='none'){hasVisible=true;break;}
      }
      ul.classList.toggle('zappy-empty-submenu',!hasVisible);
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',markEmpty,{once:true});}
  else{markEmpty();}
})();
/* END ZAPPY_EMPTY_SUBMENU_HIDDEN */
