---
title: Accessibility Scanning
layout: post
---

## Accessibility Scanning using AccessLint

[AccessLintCI](https://github.com/accesslint/accesslint-ci) is an automated accessibility scanning tool. It is configured with CircleCI (Travis and Jenkins support pending) to leave comments on Pull Requests stating potential accessibility problems with the committed code.

### Getting started

Regardless of what framework your project is using, you will need to add `gem: accesslint-ci` to your `Gemfile` with the  gem.

### Setup with Jekyll

The setup is detailed [here](https://github.com/accesslint/accesslint-ci#installation) for Rails, but can also easily be configured with Jekyll sites as follows. In the `circle.yml` file of your repo add the following:

```yml
general:
  artifacts:
    - "tmp"

machine:
  environment:
    ACCESSLINT_MASTER_BRANCH: <Branch that you want accesslint to test against>
  node:
    version: 6.1.0

dependencies:
  pre:
    - gem install bundler
    - bundle install
  override:
    - npm install -g accesslint-cli
    - gem install accesslint-ci

test:
  post:
    - bundle exec jekyll serve --detach
    - accesslint-ci scan http://localhost:4000
```

The `ACCESSLINT_MASTER_BRANCH` should be set to the branch that PRs are being made to. If it is not set, it will default to `master`. For TTS repos, this will generally be `dev` or `development`.

### Accesslint API access

In order for AccessLint to access your GitHub webhooks, you will need to

1. [Create an token](https://accesslint.com/)
1. Reference it. In your Circle CI settings for your repo, create a variable named `ACCESSLINT_API_TOKEN` with the token you created.
1. Also add a variable named `ACCESSLINT_GITHUB_USER` to your Circle CI repo settings, with a value of the GitHub username that was used to create the token in step 1.

### Configuring ther project frameworks

If your project is not a Rails or Jekyll project, you can still use AccessLintCI!

To do so, make a few changes to the `post` section of your configuration. Replace `bundle exec jekyll serve --detach` with a repo-specific server command that detaches, and allows accesslint-ci to run on the same process to check your server port.

```yml
test:
  post:
    - <your detached server command>
    - accesslint-ci scan http://localhost:<your server port>
```

### What it does

Once configured, AccessLintCI will leave a single comment on a Pull Request to the `ACCESSLINT_MASTER_BRANCH`. If errors are accepted, they will be cached, and not checked again in the next PR to that branch.

## Accessibility Scanning Using Pa11y-ci

### Introduction

Building a website or application that is easy accessible toeveryone is  not only an important of the user experience, but also a requirement of all federally funded projects. GSA provides a helpful [Section 508](https://section508.gov)  portal. [Pa11y](https://github.com/pa11y/pa11y) is an automation tool that helps you scan your static web pages to check for accessibility problems and errors. It can be setup on your machine locally or remotely using a CI tool.

## Running Pa11y locally

### Installation and setup (For MacOS)

1. [Concourse CI](https://concourse.ci/index.html) allows you to run multiple compliance scanning jobs  on your machine using a virtual machine. It is highly recommended to go through its [excellent documentation and "Hello World" tutorial ](https://concourse.ci/hello-world.html) before writing custom jobs for your project.

2. If you want to run locally Pa11y-ci you will need to :

   * [install **vagrant** and **virtualbox** ](http://sourabhbajaj.com/mac-setup/Vagrant/README.html)
   * use [The Fly CLI](https://concourse.ci/fly-cli.html) , a command line tool for Concourse which is  used for a number of tasks from connecting to a shell in one of your build's containers to uploading new pipeline configuration into a running Concourse.

3. If you're on MacOS , you will have to `chmod +x` the downloaded binary and put it in your `$PATH`. This can be done in one fell swoop with `install path/to/fly /usr/local/bin/fly`

4. Run Vagrant

   ```sh
   vagrant init concourse/lite # creates ./Vagrantfile
   vagrant up                  # downloads the box and spins up the VM
   ```

5. Log into fly

   `fly -t lite login -c http://192.168.100.4:8080`

   ​

### Running Pa11y-ci on your local machine

 1. Create a `.yml` file containing the job with tasks that you want to run

     `touch accessibility-scan.yml`

     `vim accessibility-scan.yml`
      ```yml
      jobs:
        - name: accessibility-scan
          plan:
          - task: run-pa11y
            config:
              platform: linux
              image_resource:
                type: docker-image
                source:
                  repository: node
              run:
                path: sh
                args:
                - -exc
                - |
                  npm install -g pa11y-ci
                  npm install -g phantomjs
                  mkdir accessibility-scan
                  pa11y-ci --json --sitemap https://18f.gsa.gov/sitemap.xml > accessibility-scan/summary.txt
                  cat accessibility-scan/summary.txt
      ```

      `type` is almost always going to be `docker-image` . `pa11y-ci` requires node, so we are using a `node` docker-image.

      `run` section contains a series of shell command that we are executing:

      * install `pa11y-ci`  and `phantomjs` from the node package manager(`npm`)

      * making a directory and telling pa11y-ci to pipe the results of the scan into a `json` file

        the command is like so `pa11y-ci --json --sitemap https://[18f-static-site-url]/sitemap.xml > dir/file`

      * printing the results in our CLI `cat…` (for debugging purposes, optional)

      **Note that** we are using the `sitemap.xml`  file instead of individual files(much more efficient)


 2.  Run

      ```shell
      fly -t lite set-pipeline -p accessibility-scan -c accessibility-scan.yml
      ```

 3. Go to the `URL` displayed on your CLI. **Click the plus sign on top right corner and toggle side bar and press play on         your pipeline**. Pipelines are posed by default.

   ​

## Running Pa11y-ci  with CI

### Circle CI Setup Instructions

If you want to run Pa11y-ci per pull request on your project:

1. Create a bash file  `accessibility-scan.sh` in your project home directory  to tell it to run either on a circleci supported branch or your localhost

   ```shell
   if [[ -n $CIRCLE_BRANCH ]]; then

     echo "scanning site using sitemap from 18F/${CIRCLE_BRANCH}"

     pa11y-ci --sitemap https://federalist.18f.gov/preview/18F/18f.gsa.gov/${CIRCLE_BRANCH}/sitemap.xml

   else

   echo "scanning site using localhost sitemap"
   pa11y-ci --sitemap http://localhost:4000/sitemap.xml
   ```

2. Modify your `circle.yml` to add pa11y-ci

   ​

   ```yaml
   machine:
      ruby:
       version:
            2.2.3

   dependencies:
            pre:
               - [Your-other-commands]
               - nvm install stable && nvm alias default stable
               - npm test
               - npm install -g pa11y-ci
   test:
      pre:
          - bundle exec htmlproofer _site --disable-external --allow-hash-href --empty-alt-ignore --url-ignore 18f@gsa.gov
          - echo CIRCLE_BRANCH
          - echo
          - npm run --harmony accessibility-scan
   ```

### Travis CI Setup Instructions(To Be Written)

## Adding Pa11y To The Compliance Viewer(To Be Written)
