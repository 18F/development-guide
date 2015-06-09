---
permalink: /github-setup/
layout: default
title: GitHub Setup
---
- [Create a new local repository](#create-local-repo)
- [Create a new 18F GitHub repository](#create-18f-repo)

Once you're finished pushing to your new 18F guide repo on GitHub, click the
_Post Your Guide_ entry in the table of contents for the final steps to
publish your guide.

## <a name="create-local-repo"></a>Create a new local repository

Once you've got the `_config.yml` file up-to-date, in the root directory of
your guide's repository, copy and paste these commands to remove all of the
pages and images that came with this template (careful not to remove any files
that you actually intend to keep):

```
$ rm copy-template {% for p in site.pages %}{% if p.path contains 'pages/' %}{{ p.path }} {% endif %}{% endfor %}
$ rm {% for f in site.static_files %}{% if f.path contains '/images/' %}{{ f.path | replace_first:'/','' }} {% endif %}{% endfor %}
```

Then execute the following to detach from the the original template repository
and create a new one for your guide:

```
$ rm -rf .git
$ git init
$ git add .
$ git commit -m 'Initial commit'
```

## <a name="create-18f-repo"></a>Create a new 18F GitHub repository

Now you're ready to [create a new 18F GitHub
repository](https://github.com/organizations/18F/repositories/new). You'll
want to set the `Public` attribute under the **Team** section and add a
fitting `Description`.

Do _not_ select **Initialize this repository with a README**. Instead, update
the `README.md` file in your own local repository as necessary.

After submitting the form to create a new repository, you will see GitHub's
instructions to create a local repository and push your changes up to it. At
this point, do the following, replacing `MY-NEW-GUIDE` with the name of your
guide's repository:

```
$ git remote add origin git@github.com:18F/MY-NEW-GUIDE.git
$ git push -u origin master
```

Note that you can update the description and add a website link to the
repository after creating it:

<img src="{{site.baseurl}}/images/description.png" alt="Setting the
description and website of the GitHub repository">
