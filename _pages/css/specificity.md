---
title: Specificity
layout: post
sidenav: css
sticky_sidenav: true
---

- IDs should be reserved for JavaScript. Don’t use IDs for styles.

  ```scss
  // Bad
  #component { }

  // Good
  .component { }
  ```

- Don't nest more than 3 layers deep.
- Do not fix problems with ```!important```. Use ```!important``` purposefully.

  ```scss
  // Bad
  .component {
    width: 37.4% !important;
  }

  // Good
  .hidden {
    display: none !important
  }
  ```

- Keep specificity low and trend upwards in specificity as you move further
  down file. See the [specificity graph](#specificity-graph) section for more
  info.
- Don't use unnecessary tag selectors.

  ```scss
  // Bad
  p.body_text { }

  // Good
  .body_text
  ```

- If you have to hack specificity, use a safe hack: the _multi class_.

  ```scss
  // multi-class hack
  .component.component { }
  ```

## Specificity graph
An easy rule to use when dealing with specificity is to start from a low
specificity and curve to higher specificity as you move towards the bottom of
the output file. Since CSS rules get replaced by rules further down in the
file, you'll override rules in an expected way.

There’s a tool that can graph your files’ specificity, [CSS specificity
graph](http://jonassebastianohlsson.com/specificity-graph/). Run your final
output file through this tool and strive for a curve trending upwards.

### Resources
* [CSS specificity graph](http://jonassebastianohlsson.com/specificity-graph/)
* [Explanation](http://csswizardry.com/2014/10/the-specificity-graph/)

## Rationale
With specificity comes great responsibility. Broad selectors allow us to be
efficient, yet can have adverse consequences if not tested. Location-specific
selectors can save us time, but will quickly lead to a cluttered stylesheet.
Exercise your best judgement to create selectors that find the right balance
between contributing to the overall style and layout of the DOM.

* When modifying an existing element for a specific use, try to use specific
  class names. Instead of `.listings-layout.bigger` use rules like
  `.listings-layout.listings-bigger`. Think about ack/grepping your code in the
  future.

* Use lowercase and separate words with hyphens when naming selectors. Avoid
  camelcase and underscores. Use human-readable selectors that describe what
  element(s) they style.

* Attribute selectors should use double quotes around values. Refrain from
  using over-qualified selectors; `div.container` can simply be stated as
  `.container`.

* IDs should be reserved for JavaScript. Unless you have a very good reason,
  all CSS should be attached to classes rather than IDs. When in doubt, use a
  class name. This prevents target confusion and allows CSS devs and JS devs to
  co-exist in the same code in peace. If you must use an id selector (`#id`)
  make sure that you have no more than one in your rule declaration.
