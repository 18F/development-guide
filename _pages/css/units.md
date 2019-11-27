---
title: Units
sidenav: css
---
# Units
## Measurements
- Use **rem** units for font sizes with a px fallback. This can be done with
  the following mixin:

  ```scss
  @mixin font-size($sizeValue: 1.6) {
    font-size: ($sizeValue * 10) + px;
    font-size: $sizeValue + rem;
  }
  ```

- Set the HTML font size to `10px` to ensure that `0.1rem` equals `1px`.

  ```scss
  html {
    font-size: 10px;
  }
  ```

- Use **em** units for positioning.
- Use **percentages** when layout components stay relational to each other
  (e.g. a main content area that takes up 75% of the screen and a sidebar that
  takes up 25%).

  ```scss
  // Good
  .panel-a {
    width: 25%;
  }

  .panel-b {
    width: 75%;
  }
  ```

- Use **px** units for when a measurement shouldn't change based on user set
  font size or browser zooming or for when requiring pixel values below 5.

  ```scss
  // Bad
  selector {
    border-width: 55px;
  }

  // Good
  selector {
    border-width: 2px;
  }
  ```

- Use unitless values for `line-height` as this will inherit values from the
  `font-size`.
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
  // Bad
  width: 0px;

  // Good
  width: 0;
  ```

- Always use a unit for dimensions, margins, borders, padding, and typography.

  ```scss
  // Bad
  border-width: 12;

  // Good
  border-width: 12px;
  ```


## Colors
- Use **hex** notation first, or then **rgb(a)**, or **hsl(a)**.
- Both three-digit and six-digit hexadecimal notation are acceptable.
- When denoting color using hexadecimal notation, use all lowercase letters.
- When using HSL or RGB notation, always add a single space after a comma and
  no space between parentheses and content.

```scss
// Bad
color: #FFF;
color: rgb( 255, 0, 0 );

// Good
$light: #fff;
color: $light;

// Good
$primary: #fe9848;
color: $primary;

// Good
$secondary: rgba(255, 100, 255, 0.5);
color: $secondary;
```

- If you use an rgba rule, include a fallback value in hexadecimal.

  ```scss
  // Good
  .illustration {
    background-color: #eee; // fallback
    background-color: rgba(221, 221, 221, 0.75);
  }
  ```
