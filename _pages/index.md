---
title: TTS Engineering Guide
permalink: /
sticky_sidenav: true
---

_A set of guidelines and best practices for an awesome software engineering team._

This guide is where the TTS Engineering Practices Guild collects its best practices and resources for software development at TTS, as well as on our partner engagements. Our focus is cloud-native digital services and our recommendations in this guide reflect the needs of that domain.

<div class="grid-container">
  <div class="grid-row">
    {% include categorylinks.html links=site.data.navigation.about %}
    {% include categorylinks.html links=site.data.navigation.approach %}
  </div>
  <div class="grid-row">
    {% include categorylinks.html links=site.data.navigation.tools %}
    {% include categorylinks.html links=site.data.navigation.languages %}
  </div>
  <div class="grid-row">
    {% include categorylinks.html links=site.data.navigation.security %}
  </div>
</div>

<hr />

<div class="layout-table-of-contents">
  <div class="wrapper usa-prose">
      {% for cat in site.data.navigation %}
      {% if cat[0] != "primary" %}
        {% for link in cat[1] %}
          {% if forloop.first == true %}
            <h3><a href = "{{ link.href }}">{{ link.text }}</a></h3>
          {% else %}
            <a href = "{{ link.href }}">{{ link.text }}</a><br />
          {% endif %}
        {% endfor %}
      {% endif %}
      {% endfor %}
      <hr />
  </div>
</div>

<hr />
