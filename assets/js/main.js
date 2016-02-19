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
