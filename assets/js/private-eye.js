// https://github.com/18F/private-eye
(function() {
  'use strict';

  var STYLES = 'a.private-link::after { content: "\\1F512"; font-size: 0.75em; vertical-align: top; }';
  var STYLES_ID = '_privateEye-styles';

  var DEFAULT_OPTIONS = {
    defaultMessage: 'This is a link to a private site, which may or may not be accessible to you.',
    wrapper: ''
  };

  var isString = function(str) { return !!str && typeof str === 'string'; };
  var isArray = function(arr) { return !!arr && arr.length; };

  var optionValidators = {
    defaultMessage: isString,
    wrapper: isString,
    ignoreUrls: isArray,
  };

  function setStyles() {
    var styles = document.createElement('style');
    styles.innerHTML = STYLES;
    styles.id = STYLES_ID;
    document.body.appendChild(styles);
  }

  function getOptions(opts) {
    var newObj = {};

    for (var prop in DEFAULT_OPTIONS) {
      newObj[prop] = DEFAULT_OPTIONS[prop];
    }

    for (var prop in opts) {
      var val = opts[prop];

      if (optionValidators[prop](val)) {
        newObj[prop] = val;
      }
    }

    return newObj;
  }

  var PrivateEye = function(opts) {
    // The old docs recommend calling this as a function. This is here to detect
    // those cases and make sure backward compatibility stays intact now that the
    // new syntax is preferred.
    if (!(this instanceof PrivateEye)) {
      return new PrivateEye(opts);
    }

    // Don't add the styles to the page more than once.
    if (!document.getElementById(STYLES_ID)) {
      setStyles();
    }

    this.opts = getOptions(opts);

    this.checkLinks();
  };

  PrivateEye.prototype.checkLinks = function() {
    var self = this;

    this.opts.ignoreUrls.forEach(function(url) {
      var hrefValue;
      var titleValue;

      // If the `url` is an Object, then parse the properties `message` & `url`
      if (url === Object(url)) {
        titleValue = url.message;
        hrefValue = url.url;
      } else {
        hrefValue = url;
        titleValue = self.opts.defaultMessage;
      }

      var wrapper = self.opts.wrapper.length ? self.opts.wrapper + ' ' : '';
      var selector = wrapper + 'a';
      var anchors = document.querySelectorAll(selector);

      Array.prototype.forEach.call(anchors, function(anchor) {
        var anchorHref = anchor.href.toLowerCase().trim();

        if (anchorHref.indexOf(hrefValue.toLowerCase()) !== -1) {
          anchor.className += ' private-link';

          // Only replace the anchor's title if it is empty
          if (!anchor.title) {
            anchor.title = titleValue;
          }
        }
      });
    });
  }

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = PrivateEye;
  } else {
    window.PrivateEye = PrivateEye;
  }
})();
