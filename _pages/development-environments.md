---
title: Development Environments
layout: post
---

## Why this guide?

This guide discusses some principles we should strive to achieve when architecting development environments along with some examples techniques for achieving them. By following this guide, you'll learn how to create environments that are easy to setup, well-documented, and are reproducible (great for finding and fixing bugs). This will keep your colleagues happy, save you time from supporting developer ramp-up, make your repo much more likely to receive open source contributions, and is also generally a good practice as a matter of course.

## Principles

The _why_ section sort of gives it away, but a development environment should be:

**Easy to set up**

Dependencies should be easy to install, and a new developer should be able to clone the application and run its "hello world" equivalent with just a few commands. Seed data creation, database schema migrations, and configuration should be automated. Configuration that requires the developer to obtain keys from an external source (such as signing up for an API) should be kept to a minimum. If possible, try to use a mocked version of any external services by default. Many of the good practices for testing (e.g. don't rely on external services) can and should be applied to the development environment.

**Well-documented**

At minimum, there should be a README.md file describing what the software does, how to run its "hello world" equivalent, how to run tests, and all dependencies. If the software is easy to set up, the documentation need not be very long, which is easier to maintain and to keep accurate.

Moreover, while it's great to use code comments or other documentation tools, often the best documentation is the code itself--that is, if the code is easy to comprehend and contextualize, there might not be a pressing need for extraneous explanation of each and every function.

Sometimes configuration files (e.g. `.travis.yml`) get more as scripts. This should be avoided. Instead, leverage these files as "runnable" documentation. For example, the declarative nature of a `.travis.yml` file is a perfect opportunity to document how to do everything needed to set up and run tests.

Instead of:

```yml
before_install:
  - . $HOME/.nvm/nvm.sh
  - nvm install stable
  - nvm use stable
  - npm install
  # Install PhantomJS 2.1.1 manually
  - "export PHANTOMJS_VERSION=2.1.1"
  - "phantomjs --version"
  - "export PATH=$PWD/travis_phantomjs/phantomjs-$PHANTOMJS_VERSION-linux-x86_64/bin:$PATH"
  - "phantomjs --version"
  - "if [ $(phantomjs --version) != '$PHANTOMJS_VERSION' ]; then rm -rf $PWD/travis_phantomjs; mkdir -p $PWD/travis_phantomjs; fi"
  - "if [ $(phantomjs --version) != '$PHANTOMJS_VERSION' ]; then wget https://github.com/Medium/phantomjs/releases/download/v$PHANTOMJS_VERSION/phantomjs-$PHANTOMJS_VERSION-linux-x86_64.tar.bz2 -O $PWD/travis_phantomjs/phantomjs-$PHANTOMJS_VERSION-linux-x86_64.tar.bz2; fi"
  - "if [ $(phantomjs --version) != '$PHANTOMJS_VERSION' ]; then tar -xvf $PWD/travis_phantomjs/phantomjs-$PHANTOMJS_VERSION-linux-x86_64.tar.bz2 -C $PWD/travis_phantomjs; fi"
  - "phantomjs --version"
before_script:
  - cp config/application.yml.example config/application.yml
  - cp certs/saml.crt.example certs/saml.crt
  - cp keys/saml.key.enc.example keys/saml.key.enc
  - bin/rake db:setup --trace
  - bin/rake assets:precompile
```

Refactor both blocks into shell scripts:

```yml
before_install:
  - ./script/install_dependencies.sh
  - ./script/install_phantomjs.sh

before_script:
  - ./script/setup_config.sh
  - bin/rake db:setup --trace
  - bin/rake assets:precompile
```

Now each set of scripts are much easier run in other environments: locally, in a different CI environment, etc. Moreover, think of the YAML keys as annotations for the scripts.


**Reproducible**

A good development environment should be reproducible across different computers, platforms, and environments. Reproducibility helps ensure that bugs are not idiosyncratic to any one person's bespoke computing environment--rather they are intrinsic to the repository itself such that time can be spent debugging the repository code and not the environment on a person's computer. Pinning dependencies such as language runtimes and databases to specific versions is a great way to help achieve this.
