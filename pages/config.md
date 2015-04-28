---
permalink: /updating-the-config-file/
layout: default
title: Updating the Config File
---
- [Set the base URL and guide name](#set-baseurl-and-name)
- [Copy the `exclude:` entries](#copy-exclude-entries)
- [Register new pages](#register-new-pages)
- [Update the repository list](#update-repository-list)
- [Set `google_analytics_ua`](#set-google-analytics)

Once you're finished updating the config file, click the _GitHub Setup_
entry in the table of contents.

## <a name="set-baseurl-and-name"></a>Set the base URL and guide name

The configuration file is called `_config.yml`. The first properties to update
are `baseurl:`, which determines the top-level URL of your guide relative to
the host; and `name:`, which appears as the guide's overall title. Make sure to
set `baseurl:` to the name of your new guide's repository; this is important
to ensure that it will be published correctly.

For example, for this template, these values are set to:

```yaml
baseurl: {{site.baseurl}}
name: {{site.name}}
```

When run locally, the URL for this guide is
`http://localhost:4000{{site.baseurl}}/`. _Remember to include the trailing
`/` when serving locally!_ The Jekyll built-in webserver doesn't redirect to
it automatically.

The URLs of the individual section pages are relative to the `baseurl:`. For
example, the `permalink:` of this page is `{{page.permalink}}`. The full local
URL is `http://localhost:4000{{site.baseurl}}{{page.permalink}}`.

## <a name="copy-exclude-entries"></a>Copy the `exclude:` entries

Make sure that you update the `exclude:` list to contain at least the
following files so that they are not copied to your generated `_site`
directory:

```yaml
exclude:
{% for i in site.exclude %}{% if i != 'copy-template' %}- {{ i }}
{% endif %}{% endfor %}```

## <a name="register-new-pages"></a>Register new pages

The `navigation:` list is used to generate the table of contents. Add a new
entry for any new page added. For example, the `navigation:` section of this
guide contains:

```yaml
navigation:
{% for i in site.navigation %}- text: {{ i.text }}
  url: {{ i.url }}
  internal: {{ i.internal }}
{% endfor %}```

## <a name="update-repository-list"></a>Update the repository list

You will also need to update the `repos:` list to reflect the GitHub
repository containing your guide. The `repos:` entry of this template
contains:

```yaml
repos:{% for i in site.repos %}
- name: {{ i.name }}
  description: {{ i.description }}
  url: {{ i.url }}
{% endfor %}
```

## <a name="set-google-analytics"></a>Set `google_analytics_ua`

Set `google_analytics_ua` to the following, if it isn't set already:

```yaml
google_analytics_ua: {{ site.google_analytics_ua }}
```
