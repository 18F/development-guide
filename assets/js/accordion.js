/*  Originally from the Government Wide Pattern Library.
    Modified to check for items expanded on page load and
    to allow you to close an accordion without opening another
*/

function Accordion($el) {
  var self = this;
  this.$root = $el;
  this.$root.on('click', 'button', function(ev) {
    ev.preventDefault();
    if ( $(this).attr('aria-expanded') === 'true' ) {
      self.hide($(this));
    } else {
      self.show($(this));
    }
  });

}

Accordion.prototype.$ = function(selector) {
  return this.$root.find(selector);
}

Accordion.prototype.hide = function($button) {
  var selector = $button.attr('aria-controls'),
      $content = this.$('#' + selector);
  $button.attr('aria-expanded', false);
  $content.attr('aria-hidden', true);
};

Accordion.prototype.show = function($button) {
  var selector = $button.attr('aria-controls'),
      $content = this.$('#' + selector);
  $button.attr('aria-expanded', true);
  $content.attr('aria-hidden', false);
};

Accordion.prototype.hideAll = function() {
  var self = this;
  this.$('button').each(function() {
    self.hide($(this));
  });
};

function accordion($el) {
  return new Accordion($el);
}

$(function() {
  $('.sidebar-nav').each(function() {
    accordion($(this));
  });
});