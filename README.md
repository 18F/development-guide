## 18F Guides Template

This is a skeleton repo containing the
[CFPB/DOCter](https://github.com/CFPB/DOCter)-based
[Jekyll](http://jekyllrb.com/) template for
[18F Guides](http://18f.github.io/guides/).

### Generating the site/hosting locally

You will need [Ruby](https://www.ruby-lang.org) ( > version 2.1.5 ). You may
consider using a Ruby version manager such as
[rbenv](https://github.com/sstephenson/rbenv) or [rvm](https://rvm.io/) to
help ensure that Ruby version upgrades don't mean all your
[gems](https://rubygems.org/) will need to be rebuilt.

On OS X, you can use [Homebrew](http://brew.sh/) to install Ruby in
`/usr/local/bin`, which may require you to update your `$PATH` environment
variable:

```shell
$ brew update
$ brew install ruby
```

To create a new guide and serve it locally, where `MY-NEW-GUIDE` is the name
of your new repository:

```shell
$ git clone git@github.com:18F/guides-template.git MY-NEW-GUIDE
$ cd MY-NEW-GUIDE
$ ./go init
$ ./go serve
```

This will check that your Ruby version is supported, install the [Bundler
gem](http://bundler.io/) if it is not yet installed, install all the gems
needed by the template, and launch a running instance on
`http://localhost:4000/guide/`. (Make sure to include the trailing slash! The built-in
Jekyll webserver doesn't redirect to it.) That page contains further
instructions on how to adapt the template to a new guide repository.

After going through these steps, run `./go` to see a list of available
commands. The `serve` command is the most common for routine development.

You'll need to create a new Github repository for your new guide. To do this, go to github.com/18f and click the "New Repository" button. Enter the title and description for your new guide and then click "Create Repository".

After the repository is created, you'll see the repo URL at the top. Copy this url by hitting the handy "Copy to Clipboard" button next to the text box. 

Go back to the directory where you cloned the guides-template repository. We're going to change this repo to point to the one you just created (which is empty) and push the template to it.
```
git remote set-url origin https://github.com/18F/MY-NEW-GUIDE.git
git push origin 18f-pages
```

Now you can edit the template freely, and push up changes as you need. 

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
