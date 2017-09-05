---
title: Frameworks
permalink: /css/frameworks
layout: docs
sidenav: css
---
# Frameworks

18F currently recommends two CSS frameworks. Team members can choose the
framework that best meets project and design and development needs:

1. [Bourbon]
2. [PureCSS]

## Rationale
These frameworks were chosen because they're relatively unopinionated about
design decisions while still providing the helpers that make frameworks
essential to fast and accurate frontend work, for example, solutions for
responsive design, grids, and common design patterns. In addition, both
frameworks, through modular design and excellent documentation, make it easy
for the designer or developer to only use the parts that they need, rather than
including a hefty library. Of the two, [PureCSS] is extremely lightweight,
while [Bourbon] is a Sass mixin library that has extensions for a robust
semantic grid ([Neat]), base scaffold ([Bitters]) and patterns ([Refills]).

18F specifically does not recommend using [Bootstrap] for production work
because:

1. It is difficult to adapt its opinionated styles to bespoke design work, and
2. Its CSS style places semantic layout instructions directly in HTML classes.

[Bitters]: http://bitters.bourbon.io/
[Bootstrap]: http://getbootstrap.com/
[Bourbon]: http://bourbon.io/
[Neat]: http://neat.bourbon.io/
[PureCSS]: http://purecss.io/
[Refills]: http://refills.bourbon.io/
