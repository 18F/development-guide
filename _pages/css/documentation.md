---
title: Documentation
sidenav: css
---
# Documentation
## Sass Comments
Be intentional when you use `//` (silent comments) versus `/* */`
(which are preserved in the CSS output). When in doubt, use `//`.

## KSS
Use KSS for documentation. More information on KSS can be found on the
[official site](http://warpspire.com/kss/).

### Example

```scss
// Button
//
// Various buttons on the site.
//
// Markup
// <a class="button {{ modifier_class }}">
//  <span class="button__text">Link</span
// </a>
//
// .button-modified - A button with a different style.
//
//
// Styleguide component.button
.button {
}

.button-modified {
}
```

### Rationale
KSS is the most common CSS documentation method to date. While it’s not perfect,
the generated documentation can be modified through templates.
