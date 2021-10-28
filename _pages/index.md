---
title: TTS Engineering Guide
permalink: /
sticky_sidenav: true
---

_A set of guidelines and best practices for an awesome software engineering team._

{% for cat in site.data.navigation %}

{% if cat[0] != "primary" %}

## {{ cat[0] | capitalize }}

{% for link in cat[1] %}

- [{{ link.text }}]({{ link.href }})

{% endfor %}
{% endif %}
{% endfor %}
