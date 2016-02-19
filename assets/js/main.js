(function() {
  'use strict';

  // the nav is referenced in a bunch of places, so just get a local reference
  var nav = document.querySelector('nav');

  /*
   * a poor person's accordion implementation
   */
  var toggleAccordion = function(e) {
    var id = this.getAttribute('aria-controls');
    var el = document.getElementById(id);
    if (!el) {
      console.warn('invalid aria-controls id:', id);
      return false;
    }
    var expanded = this.getAttribute('aria-expanded') === 'false';
    el.setAttribute('aria-hidden', !expanded);
    this.setAttribute('aria-expanded', expanded);
  };

  var buttons = document.querySelectorAll('button[aria-controls]');
  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', toggleAccordion);
  });

  /*
   * a poor person's ScrollSpy implementation.
   */
  var scrollSpy = (function(links) {
    // get a list of elements that the links target
    var targets = links.map(function(link) {
      var id = link.getAttribute('href').substr(1);
      return document.getElementById(id);
    });

    // this is kind of like jQuery's ':visible' helper, but only pays attention
    // to aria-hidden="true"
    var isVisible = function(el) {
      do {
        if (el.getAttribute('aria-hidden') === 'true') {
          return false;
        }
        el = el.parentNode;
      } while (el && el !== nav);
      return true;
    };

    // ratio of the screen height to treat as a buffer around the visible area
    var buffer = .25;

    return function(e) {
      // set the upper and lower bounds based on the buffer
      var top = window.innerHeight * buffer;
      var bottom = window.innerHeight - top;

      // first, determine which target is active
      var active = targets.reduce(function(active, target, i) {
        var rect = target.getBoundingClientRect();
        // check that the content's bounding box is within our vertical bounds
        if (rect.top <= bottom && rect.bottom >= top) {
          // ensure that the link to it is visible (if it's not, then its
          // parent section should be in bounds and its link should be
          // visible)
          if (isVisible(links[i])) {
            return target;
          }
        }
        return active;
      }, null);

      // then, set the aria-active attribute for both the link and target,
      // based on which target is active
      targets.forEach(function(target, i) {
        var link = links[i];
        target.setAttribute('aria-active', target === active);
        link.setAttribute('aria-active', target === active);
      });
    };
  })([].slice.call(nav.querySelectorAll('a[href^="#"]')));

  // update the scroll spy on scroll, resize, and initial load
  window.addEventListener('scroll', scrollSpy);
  window.addEventListener('resize', scrollSpy);
  scrollSpy();

  /*
   * automatically expand nav accordions whenever the location.hash references
   * a hidden nested link
   */
  var expandNavAccordions = function() {
    var hash = location.hash;
    if (hash) {
      var node = nav.querySelector('a[href="' + hash + '"]');
      while (node && node !== nav) {
        if (node.getAttribute('aria-hidden') === 'true') {
          var button = document.querySelector('[aria-controls="' + node.id + '"]');
          toggleAccordion.call(button, {});
        }
        node = node.parentNode;
      }
    }
  };

  // auto-expand accordions on hashchange, and initially
  window.addEventListener('hashchange', expandNavAccordions);
  expandNavAccordions();

  // apply the `position: sticky` polyfill for all .js-sticky elements
  var sticky = document.querySelectorAll('.js-sticky');
  [].forEach.call(sticky, function(el) {
    Stickyfill.add(el);
  });

  // load up AnchorJS
  var anchor = new AnchorJS({
    placement: 'right',
    icon: '§'
  });
  anchor.add('h2, h3');

})();
