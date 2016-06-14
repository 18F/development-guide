---
title: Architecture
slug: css-architecture
---
A site's architecture should be based on its goals and purposes. This means the
guidance here should be adapted to different sites and situations.

## Modular or component architecture
When using a modular or component architecture, every page is broken into a
series of modular components. There are two sets of these components:
`components` and `modules`. The architecture starts out with basic HTML element
rules: HTML, p, a, form, etc tags that than have components and modules written
on top of them. Components are very basic structure such as buttons, blurbs,
navs, and positioning structures like insets, island, and enclosure.  From
here, modules are built with these components. This architecture also attempts
to keep the specificity trend in an upwards curve as you move down in the file
(more on this to come).

- Start with an elements file for all tag rules (a, h1-h5, p, \*, html, body).
- Create component files for each structural element, such as buttons, navs,
  etc. These are mainly class-based and use [BEM] or another [naming
  scheme](#css-naming).
- Create more specific structure with modules. For instance, if the logo image
  and text needs very specific treatment, use a module.
  - Build modules from components through mixins, extends, and HTML.
  - Modules can have higher specificity, it’s fine to use deeper nesting.
- Have an overrides file or folder comprised of global rules that are meant to
  override components and modules.
  - These can be generic utilities.
  - A good thing to put here are breakpoint-specific rules, such as hiding
    something at small breakpoints.

### File structure
```sh
_elements.scss
_mixins.scss
_typography.scss
_util.scss
_vars.scss
component/_blurb.scss
component/_button.scss
component/_island.scss
component/_sub_nav.scss
module/_logo.scss
module/_progress_bar.scss
lib/bourbon.scss
lib/neat.scss
_overrides.scss
```

For the `util`, `typography`, `elements`, and `overrides` files, once they grow
too large (300 lines or more) in size, split them into their own folder with
sub files.

```sh
elements/_all.scss
elements/_p.scss
elements/_h.scss
typography/_body.scss
typography/_links.scss
overrides/_breakpoints.scss
overrides/_util.scss
util/_center.scss
util/_clearfix.scss
```


## Importing
As you likely know, CSS rules that are later in the file override earlier
rules. This means Sass imports can be used to control inheritance and
specificity.

- Start with base elements.
- Move to single nested classes and utils.
- Move next to more specific classes, often with nesting.
- Move next to overrides, possibly with !important rules.
- Import alphabetically.
- Only modify import order for groups of files, not specific files.

```scss
// Bad
@import 'module/logo';
@import 'component/mask';
@import 'component/button'; /* Has to be imported after "mask" */

// Good
@import 'component/button';
@import 'component/mask';
@import 'module/logo';
```


[BEM]: http://getbem.com/introduction/
