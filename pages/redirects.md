---
permalink: /redirects/
links:
- old: /css-coding-styleguide/
  new: /#css
  migrated: true
- old: /css-coding-styleguide/preprocessor/
  new: /#css-preprocessors
  migrated: true
- old: /css-coding-styleguide/frameworks/
  new: /#css-frameworks
  migrated: true
- old: /css-coding-styleguide/units/
  new: /#css-units
  migrated: true
- old: /css-coding-styleguide/naming/
  new: /#css-naming
  migrated: true
- old: /css-coding-styleguide/inheritance/
  new: /#css-inheritance
  migrated: true
- old: /css-coding-styleguide/architecture/
  new: /#css-architecture
  migrated: true
- old: /css-coding-styleguide/specificity/
  new: /#css-specificity
  migrated: true
- old: /css-coding-styleguide/variables/
  new: /#css-variables
  migrated: true
- old: /css-coding-styleguide/variables/
  new: /#css-variables
  migrated: true
- old: /css-coding-styleguide/documentation/
  new: /#css-documentation
  migrated: true
- old: /recommendations/
  new: ''
  migrated: false
- old: /recommendations/dependency-management/
  new: /#javascript-dependencies
  migrated: false
- old: /recommendations/libraries/
  new: /#javascript-libraries
  migrated: false
- old: /recommendations/mvv-frameworks/
  new: /#javascript-frameworks
  migrated: false
- old: /web-components/
  new: /#web-components
  migrated: false
---

old URI | new URI | migrated?
:--- | :--- | :--- {% for link in page.links %}
[{{ link.name|default:link.old }}]({{ site.baseurl }}{{ link.old }}) | [link]({{ site.baseurl }}{{ link.new }}) | {{ link.migrated }}{% endfor %}
