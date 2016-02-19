(function() {
  'use strict';

  // this is a poor person's accordion implementation
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
