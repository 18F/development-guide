---
permalink: /css-coding-styleguide/frameworks/
title: Frameworks
parent: CSS coding styleguide
---

18F currently recommends two CSS frameworks. Team members can choose the framework that best meets project and design and development needs.

1. [Bourbon](http://bourbon.io/)
2. [PureCSS](http://purecss.io/)

## Rationale
These frameworks were chosen because they're relatively unopinionated about design decisions while still providing the helpers that make frameworks essential to fast and accurate frontend work, for example, solutions for responsive design, grids, and common design patterns. In addition, both frameworks, through modular design and excellent documentation, make it easy for the designer or developer to only use the parts that they need, rather than including a hefty library. Of the two, PureCSS is extremely lightweight, while Bourbon is a Sass mixin library that has extensions for a robust semantic grid ([Neat](http://neat.bourbon.io/)), base scaffold ([Bitters](http://bitters.bourbon.io/)) and patterns ([Refills](http://refills.bourbon.io/)).

18F specifically does not recommend using Twitter/Bootstrap for production work because of one, the difficulty in adapting its opinionated styles to bespoke design work and two, its CSS style places semantic layout instructions directly in HTML classes.
