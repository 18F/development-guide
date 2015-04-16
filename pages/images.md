---
permalink: /adding-images/
layout: default
title: Adding Images
---
To add images to your guide, first create an `images/` directory and place
your images inside. You may want to use
[jpegoptim](https://github.com/tjko/jpegoptim) or
[optipng](http://optipng.sourceforge.net/) to optimize your images. (On OS X,
both are available via [Homebrew](http://brew.sh/).)

Then, from your documents, you can reference your images like so (abiding by
the advice in the [Accessibility
Guide](http://18f.github.io/accessibility/images/)):

```
<img src="{%raw%}{{site.baseurl}}{%endraw%}/images/images.png" alt="Example of
an included image">
```

<img src="{{site.baseurl}}/images/images.png" alt="Example of an included image">

Now click on the _Updating the Config File_ entry in the table of contents.
