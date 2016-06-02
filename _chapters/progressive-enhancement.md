---
title: Progressive Enhancement
---
This is a really important topic.

```css
.row .column {
  /* do nothing on mobile */
}

@media (screen and min-width: 640px) {
  .row {
    display: flex;
  }

  .row .column {
    flex: 1;
  }
}
```
