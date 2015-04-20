---
permalink: /
layout: default
title: Introduction
---
This is the template used for the [Jekyll](http://jekyllrb.com/)-based [18F
Guides](http://18f.github.io/guides), derived from
[CFPB/DOCter](https://github.com/CFPB/DOCter). It is structured to act as an
18F Guides Guide. The repository for this template is
[18F/guides-template](https://github.com/18F/guides-template/).

## Creating a guide

To create a brand new guide, first follow the instructions in the
[README.md](https://github.com/18F/guides-template/blob/gh-pages/README.md)
file of this guide's GitHub repository to create a local clone of this
template.

Once you've created a new clone, click the _Adding a New Page_ entry in the
table of contents.

## Updating an existing guide

First, clone this template:

```
$ git clone git@github.com:18F/guides-template.git
```

Run the `copy-template` script from this template, passing the path to your
guide's repository as the argument (replacing `MY-EXISTING-GUIDE` below):

```
$ guides-template/copy-template MY-EXISTING-GUIDE
```

Follow the instructions in _Updating the Config File_ to update your
`_config.yml` accordingly. You may also need to consult the _GitHub Setup_ and
_Post Your Guide_ chapters to ensure your guide is correctly published to
`18f.github.io` and linked from the main [18F
Guides](http://18f.github.io/guides/) site.
