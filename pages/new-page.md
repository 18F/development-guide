---
permalink: /adding-a-new-page/
layout: default
title: Adding a New Page
---
To add new pages to the guide, first create a new
[Markdown](http://daringfireball.net/projects/markdown/syntax) file in the
`pages/` directory of the repository. As an example, the Markdown text for
this page is
[`pages/new-page.md`](https://github.com/18F/guides-template/blob/18f-pages/pages/new-page.md).

The Markdown document begins with this [YAML front
matter](http://jekyllrb.com/docs/frontmatter/):

```yaml
---
permalink: {{ page.permalink }}
layout: {{ page.layout }}
title: {{ page.title }}
---
```

_The `/` at the end of the `permalink:` attribute is important!_ It ensures
the page is generated as `{{ page.permalink }}index.html`. Without it, it would
be generated as `{{ page.permalink | remove_first: '/' | replace:'/','.'}}html`.

Now click on the _Adding Images_ entry in the table of contents to learn how
to add images to your guide.
