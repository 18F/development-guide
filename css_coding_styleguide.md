# CSS Coding styleguide

## Table of Contents

1. [Preprocessor](#processor)
2. [Frameworks](#frameworks)
3. [Format](#format)
4. [Units](#units)
5. [Naming](#naming)
6. [Inheritance](#inheritance)
7. [Architecture](#architecture)
8. [Specificity](#specificity)
9. [Variables](#variables)
10. [Responsive Design](#responsive_design)
11. [Documentation](#documentation)


<a name="processor"></a>
## Preprocessor
The most supported CSS preprocessor at 18F is Sass/SCSS. Using this pre-processor means you'll get supported resources such as frameworks, libraries, tutorials and a comprehensive styleguide as support.

That being said, any preprocessor is allowed as long as it's a sound project and has community support.


<a name="frameworks"></a>
## Frameworks
18F currently recommends two CSS frameworks. Team members can choose the framework that best meets project and design/dev needs.

1. [http://bourbon.io/](Bourbon)
2. [http://purecss.io/](PureCSS)

#### Rationale
These frameworks were chosen because they are relatively unopinionated about design decisions while still providing the helpers that make frameworks essential to fast and accurate frontend work, ie, solutions for responsive design, grids, and common design patterns. In addition, both frameworks, through modular design and excellent documentation, make it easy for the designer/dev to only use the parts that she/he needs, rather than including a hefty library. Of the two, PureCSS is extremely lightweight, while Bourbon is a Sass mixin library that has extensions for a robust semantic grid [http://neat.bourbon.io/](Neat), base scaffold [http://bitters.bourbon.io/](Bitters) and patterns [http://refills.bourbon.io/](Refills).

18F specifically does not recommend using Twitter/Bootstrap for production work because of one, the difficulty in adapting its opinionated styles to bespoke design work and two, its CSS style that places semantic layout instructions
directly in HTML classes.


<a name="format"></a>
## Format

### Spacing
- Where possible, limit CSS files’ width to 80 characters. See [notes](#format_notes) to see how to configure your text editor to 80 characters.
	- There will be unavoidable exceptions to this rule, such as URLs, or gradient syntax. Don’t worry.
- Use soft-tabs with a two space indent.
- Put one space after : in property declarations.
- Put spaces before { in rule declarations.
- Put a blank line between each selector block.
- To close a selector block, put an unindented closing curly brace on a separate line.
- Each declaration should appear on its own line for more accurate error reporting.
- Do not indent selectors

```scss
// Good
.rule {
  margin: 3px;
  text-align: center;
}

.another_rule {
  margin: 3px;
}

// Bad
.rule{
    margin:3px;text-align:center;}
```
- Multiple selectors should each be on a single line, with no space after each
comma.

```scss
selector1,
selector2,
selector3 {
}
```

### Property-Value Pairs
- Put each pair on its own line.
- Indent each pair one level.
- End in a semicolon.

```scss
selector {
  name: value;
  name: value;
}
```

- Do not use shorthand declarations unless you need to explicitly set all the available values.

```scss
// Bad
margin: inherit 3em;
// Good
margin-bottom: 3em;
margin-top: 3em;

margin: 3em 4em 2em 1em;
```

- Single-quote URLs and string values

```scss
  background-image: url('/images/kittens.jpg');
  font-family: 'Helvetica', sans-serif;
  font-family: 'Lucida Grande', 'Helvetica', sans-serif;
```

- Top-level numeric calculations should always be wrapped in parentheses

```scss
// Good
.component {
  width: (100% / 3);
}

// Bad
.component {
  width: 100% / 3;
}
```

- Wrap top-level numeric calculations in parentheses

- Avoid arbitrary numbers that are repeated, or linked, or dependent on other parts of the code, (aka “magic numbers”).

```scss
// Bad
.component {
  top: 0.327em;
}

// Better
/**
 * 1. Magic number. This value is the lowest I could find to align the top of
 * `.foo` with its parent. Ideally, we should fix it properly.
 */
.component {
  top: 0.327em;
}

// Good
.component {
  top: $align_top;
}
```

### Sorting
* Follow ordering:
	1. variables
	2. @extend directives
	3. @include directives
	4. properties
- Within properties, you may use alphabetical order or type order—just pick one and keep the whole project consistent.
- Put a new line before nested selectors.
- Put mixin calls with @content after nested selectors.

```scss
// Good
.module {
  $amount = 3;
  @extend .component;
  @include sizing($amount);
  margin-top: $amount * 1em;
  text-align: center;

  .module__ele {
    color: #fff932;
  }

  @include media($sm) {
    margin-top: $amount +10em;
  }
}
```

<a name="format_notes"></a>
#### Notes
##### How to set text editors to 80 chars
- Sublime: Add a `rulers` setting with 80 as the value
	- ```"rulers": [80]```
- Atom: Set the `preferredLineLength` setting to 80
	- `preferredLineLength: 80`
- Vim: Set two options in your `.vimrc` to wrap lines at 80 characters.
	- ```set formatoptions+=w```
	- ```set tw=8```
       

<a name="units"></a>
## Units
### Measurements
- Use **rem** units for font sizes with a em fallback.
This can be done with the following mixin:

```scss
@mixin font-size($sizeValue: 1.6) {
  font-size: ($sizeValue * 10) + px;
  font-size: $sizeValue + rem;
}
```

- Set the html font size to 62.5% to ensure .1 rem unit equals 1px

```scss
html {
  font-size: 62.5%;
}
```

- Use **em** units for positioning.
- Use **percentages** when elements have to change based on screen size.
- Use **px** units for when a measurement shouldn't change based on user set font size or browser zooming.
- Use unitless values for line-height as this will inherit values from the font-size.
- Use up to 10 decimal places in em units to ensure accuracy.

```scss
// Good
.body_copy {
  @include rem-font-size(1.4);
  // Line height will now be 1.8 of 1.4rem, or 2.5rem.
  line-height: 1.8;
}

// Good
.container {
  height: 12em;
  margin-left: 10.6666666667em;
  width: 82.5%;
}
```

- Do not use a unit with 0.

```scss
// Good
width: 0;
// Bad
width: 0px;
```

- Definitely use a unit for dimensions, margins, borders, padding, and typography.

```scss
// Bad
width: 12;
```


### Colors
- Use with **hex** notation, **rgb(a)**, or **hsl(a)**.
- Both three-digit and six-digit hexadecimal notation are acceptable.
- When denoting color using hexadecimal notation, use all lowercase letters.
- When using HSL or RGB notation, always add a single space after a comma and no space between parentheses and content.

```scss
// Good
color: #fff;
// Good
color: #fe9848;
// Good
color: rgba(255, 100, 255, 0.5);
// Bad
color: #FFF;
```

- If you use an rgba rule, include a fallback.

```scss
// Good
.illustration {
  background-color: #eee; /* Fallback */
  background-color: rgba(221, 221, 221, 0.75);
}
```


<a name="naming"></a>
## Naming
- HTML elements should be in lowercase.

```scss
body, div {
```

- Classes should be lowercase.
- Avoid camelcase.
- Name things clearly.

```scss
// Bad
// Avoid uppercase
.ClassNAME { }

// Avoid camel case
.commentForm { }

// What is a c1-xr? Use a more explicit name.
.c1-xr { }
```


- Avoid presentation- or location-specific words in names, as this will cause problems when you (invariably) need to change the color/width/feature later.

```scss
// Bad
.blue
.text-gray
.100width-box

// Good
.warning
.primary
.lg-box
```

- Be wary of naming components based on content, as this limits the use of the class

```scss
// Danger zone
.product-list

// Better
.item-list
```

- Don't abbreviate unless its a well-known abbreviation

```scss
// Bad
.bm-rd

// Good
.block--lg
```

- Use quotes in type psuedo selectors.

```scss
// Good
.top_image[type="text"] { }
```

- Name CSS components/modules with singlular nouns.

```scss
.button { }
```

- Name modifiers and state-based rules with adjectives.

```scss
.is_hovered { }
```

- If your CSS has to interface with other CSS libraries, consider namespacing every class.

```css
.f18-component
```


### Methodologies
There are many naming methodologies that are supported by these guidelines. The most important thing is to stick with a consistent naming convention. Here's a rundown of some methodologies used successfully by our team.

#### BEM
BEM (which stands for block, element, modifier) structures CSS such that every entity is composed of (you guessed it) blocks, elements and modifiers. From [Harry Roberts](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

> The point of BEM is to tell other developers more about what a piece of markup is doing from its name alone. By reading some HTML with some classes in, you can see how – if at all – the chunks are related; something might just be a component, something might be a child, or element, of that component, and something might be a variation or modifier of that component. 


#####Resources
- [article explaining BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [BEM website](https://en.bem.info/method/)

```scss
// block
.inset {
  margin-left: 15%;
  
  // element
  .inset__content {
    padding: 3em;
  }
}

// modifier
.inset--sm {
  margin-left: 10%;

  .inset__content {
    padding: 1em;
  }
}

// modifier
.inset--lg {
  margin-left: 20%;
}

```

#### FUN
The FUN methodology is very similar to BEM but is more lightweight in implementation. FUN names are composed of a namespace, component name, component section, and variant flag: `[namespace][-ComponentName][_ComponentSection][-variant-flag]`.

##### Resouces
- [FUN explained](http://benfrain.com/fun-css-naming-convention-explained/)

```scss
// namespace + component
.f18-item {
  // component section
  .f18-item_section {
    padding: 1em;
  }
  // variant flag
  .f18-item_section-warning {
    color: #ff0;
  }
}
```

### js- Flagged Classes

Don't attach styles to classes with a `js-` flag. These classes are reserved for app-logic.

```css
// Bad
.js-people {
  color: #ff0;
}
```

#### Rationale
A `js-` flagged class needs to be highly portable. Adding styles to it breaks that portability.


<a name="inheritance"></a>
## Inheritance (@include and @extend)
### Mixins
- Use mixins for groups of properties that appear together intentionally and are used multiple times.

```scss
@mixin clearfix {
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}
```

- Use mixins for compoennts to change size.
- Use mixins when something requires parameters.

```scss
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
```

- Do not use mixins for browser prefixes. Use [Autoprefixer](https://github.com/postcss/autoprefixer) or Bourbon for that.

```scss
// Bad
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
```

### Extend
Be very careful with using @extend. It's a powerful tool that can have disastrous side-effects. Before using please consider:

- where is my current selector going to be appended?
- am I likely to be causing undesired side-effects?
- how large is the CSS generated by this single extend?

If you're unsure of using @extend, use these rules to not run into trouble:

- Use extend from within a module, not across different modules.
- Use extend on placeholders exclusively, not on actual selectors.
- Make sure the placeholder you extend is present as little as possible in the stylesheet.

You can use mixins in place of selectors. While mixins will copy more code, the difference will often be negligible once the output file has been gzipped.


<a name="architecture"></a>
## Architecture
A site's architecture should be based on its goals and purposes. This means the guidance here should be adapted to different sites and situations.

### Modular/component architecture
When using a modular or component architecture, every page is broken into a series of modular components. There are two sets of these components: ```components``` and ```modules```. Components are very basic structure elements such as buttons, blurbs, navs, and positioning structures like insets, island, enclosure. From here, modules are built with these components. This architecture also attempts to keep the specificity trend in an upwards curve as you move down in the file (more on this to come).

- Start with an elements file for all tag rules (a, h1-h5, p, *, html, body).
- Create component files for each structural element, such as buttons, navs, etc. These are mainly class-based and use BEM or another naming scheme.
- Create more specific structure with modules. For instance, if the logo image and text needs very specific treatment, use a module.
	- Build modules from components through mixins, extends and HTML.
	- Modules can have higher specificity, it’s fine to use deeper nesting.
- Have an overrides file or folder comprised of global rules that are meant to override components and modules.
	- These can be generic utilities.
	- A good thing to put here are breakpoint-specific rules, such as hiding something at small breakpoints.

#### File structure
```sh
_elements.scss
_typeography.scss
_util.scss
_mixins.scss
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

- For the ```util```, ```typeography```, ```elements```, and ```overrides``` files, once they grow too large in size, split them into their own folder with sub files.

```sh
elements/_all.scss
elements/_p.scss
elements/_h.scss
typeography/_body.scss
typeography/_links.scss
overrides/_breakpoints.scss
overrides/_util.scss
util/_center.scss
util/_clearfix.scss
```

### Importing
CSS rules get overridden later in the file. This means sass imports can be used to control inheritance and specificity.

- Start with base elements.
- Move to single nested classes and utils.
- Move next to more specific classes, often with nesting.
- Move next to overrides, possibly with !important rules.
- Import alphabetically
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

<a name="specificity"></a>
## Specificity
- IDs should be reserved for JavaScript.

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

- Keep specificity low and trend upwards in specificity as you move further down file. See Specificity graph.
- Don't use unnecessary tag selectors.

```scss
// Bad
p.body_text { }

// Good
.body_text
```

- If you have to hack specificity, use a safe hack: the multi class.

```scss
// multi-class hack
.component.component { }
```

### Specificity graph
An easy rule to use when dealing with specificity is to start from a low specificity and curve to higher specificity as you move towards the bottom of the output file. Since CSS rules get replaced by rules further down in the file, you'll override rules in an expected way.

There’s a tool that can graph your files’ specificity, [CSS specificity graph](http://jonassebastianohlsson.com/specificity-graph/). Run your final output file through this tool and strive for a curve trending upwards.

#### Resources
* [css specificity graph](http://jonassebastianohlsson.com/specificity-graph/)
* [explanation](http://csswizardry.com/2014/10/the-specificity-graph/)

### Rationale
With specificity comes great responsibility. Broad selectors allow us to be efficient, yet can have adverse consequences if not tested. Location-specific selectors can save us time, but will quickly lead to a cluttered stylesheet. Exercise your best judgement to create selectors that find the right balance between contributing to the overall style and layout of the DOM.

When modifying an existing element for a specific use, try to use specific class names. Instead of .listings-layout.bigger use rules like .listings-layout.listings-bigger. Think about ack/greping your code in the future.

Use lowercase and separate words with hyphens when naming selectors. Avoid camelcase and underscores. Use human-readable selectors that describe what element(s) they style.
Attribute selectors should use double quotes around values Refrain from using over-qualified selectors; div.container can simply be stated as .container.

IDs should be reserved for JavaScript. Unless you have a very good reason, all CSS should be attached to classes rather than IDs. When in doubt, use a class name. This prevents target confusion and allows CSS devs and JS devs to co-exist in the same code in peace. If you must use an id selector (#selector) make sure that you have no more than one in your rule declaration.


<a name="variables"></a>
## Variables
- Create new variables in the following circumstances:
	- the values is repeated twice;
	- the value is likely to be updated at least once;
	- all occurrences of the value are tied to the variable (i.e. not by coincidence).
- When building scss that will be distributed use the ```default``` flag to allow overriding.

```scss
$baseline: 1em !default;
```

- The ```!global``` flag should only be used when overriding a global variable from a local scope.
- Variables across the whole scss codebase should be placed in their own file.
- When declaring color variables, don't base the name on the color content.

```scss
// Bad
$light_blue: #18f;
$dark_green: #383;

// Good
$primary: #18f;
$secondary: #383;
$neutral: #ccc;
```

- Be careful when naming variables based on their context.

```scss
// Bad
$background_color
```

- Don't use the value of dimensional variables in the variable name

```scss
// Bad
$width_100: 100em;

// Good
$width_lg: 100em;
```

- Name all used z-indexes with a variable.
- Have a z-index variable for each z-index used, and a separate variable, possibly aliased for where the z-index is used.

```scss
$z_index-neg_1: -100;
$z_index-neg_2: -200;
$z_index-1: 100;

$z_index-hide: $z_index-neg_2;
$z_index-bg: $z_index-neg_1;
$z_index-show: $z_index-1;
```


<a name="responsive_design"></a>
## Responsive Design & Breakpoints
- Set variables for breakpoints at the top of your stylesheet. This functionality is built into Bourbon.  

```scss
$sm: new-breakpoint(min-width 0 max-width 40em $sm_cols);
```

- Use variables to set the queries throughout so they are easy to adapt if necessary.
- Place media queries nearest to the class they are affecting.
- Rather the focusing on devices when deciding where to put breakpoints, focus
on content.

```scss
$iphone: new-breakpoint(min-width 0 max-width 640px 6);
$small: new-breakpoint(min-width 0 max-width 40em 6);
```

- Name breakpoint variables relative to eachother, not based on devices.

```scss
// Bad
$mobile
// Good
$small
```


<a name="documentation"></a>
## Documentation
- Be intentional when you use `//` (silent comments) versus `/* */`. When in doubt,
use `//`.

### KSS
Use KSS for documentation. More information on KSS can be found on the
[official site](http://warpspire.com/kss/)

#### Example
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
.button { ...
.button-modified { ...
```

#### Rationale
KSS is the most common CSS documentation method to date. While it’s not perfect,
the generated documentation can be modified through templates.





