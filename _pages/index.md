---
title: TTS Engineering Guide
permalink: /
sticky_sidenav: true
---

_A set of guidelines and best practices for an awesome software engineering team._

{% for cat in site.data.navigation %}

{% if cat[0] != "primary" and cat[0] != "sitemap" %}

{% for link in cat[1] %}

{% if forloop.first == true %}

### [{{ link.text }}]({{ link.href }})

{% else %}

- [{{ link.text }}]({{ link.href }})
  {% endif %}
  {% endfor %}

---

{% endif %}
{% endfor %}
