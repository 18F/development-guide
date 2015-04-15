## 18F Guides Template

This is a skeleton repo containing the DOCter-based Jekyll template for 18F
Guides.

### Generating the site/hosting locally

You will need [Ruby](https://www.ruby-lang.org) ( > version 2.1.5 ). You may
also consider using a Ruby version manager such as
[rbenv](https://github.com/sstephenson/rbenv) to help ensure that Ruby version
upgrades don't mean all your [gems](https://rubygems.org/) will need to be
rebuilt.

To run your own local instance:

```
$ git clone git@github.com:18F/guides-template.git MY-NEW-GUIDE
$ cd MY-NEW-GUIDE
$ ./go init
$ ./go serve
```

This will check that your Ruby version is supported, install the [Bundler
gem](http://bundler.io/) if it is not yet installed, install all the gems
needed by the playbook, and launch a running instance on
`http://localhost:4000/guide/`.

After going through these steps, run `./go` to see a list of available
commands. The `serve` command is the most common for routine development.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
