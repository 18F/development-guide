---
permalink: /post-your-guide/
layout: default
title: Post Your Guide
---
**NOTICE:** This chapter reflects the _current_ method of publishing and
posting 18F Guides. This may change in the near future; stay tuned.

- [Create the `gh-pages` branch](#create-gh-pages-branch)
- [Set the default branch](#set-default-branch)
- [Add the new guide to 18F Guides](#add-new-guide)

## <a name="#create-gh-pages-branch"></a>Create the `gh-pages` branch

In order to publish your guide automatically to `18f.github.io`, you will need
to create a `gh-pages` branch. You can do this using the GitHub interface by
clicking the **branch: master** button and entering `gh-pages` in the **Switch
branches/tags** drop-down box:

<img src="{{site.baseurl}}/images/gh-pages.png" alt="GitHub branch creation
interface">

## <a name="#set-default-branch"></a>Set the default branch

You also need to set `gh-pages` branch as the default. First, click the **Settings** page button (on the right side of the screen):<br/>
<img src="{{site.baseurl}}/images/gh-settings-button.png" alt="GitHub settings page button">

This will present you with the **Options** page. In the **Settings** section, select `gh-pages` from the **Default branch** drop-down menu:<br/>
<img src="{{site.baseurl}}/images/gh-default-branch.png" alt="GitHub default branch option">

Deleting the original `master` branch, both on GitHub and locally, is left as
an exercise for the reader. Doing so will help avoid confusion in the long run,
but is not strictly necessary.

## <a name="https://github.com/CFPB/DOCter"></a>Add the new guide to 18F Guides

Now for the final step: Add an entry to the list of [18F
Guides](http://18f.github.io/guides/) linking to your new guide. You can [use
this link to edit the file directly in
GitHub](https://github.com/18F/guides/edit/gh-pages/index.md):

<img src="{{site.baseurl}}/images/gh-add-guide.png" alt="Add the new guide to 18F Guides using the GitHub text editor">

Congratulations! Your guide should now be published and accessible to the world
as one of the few, the proud, the [18F Guides](http://18f.github.io/guides)!
