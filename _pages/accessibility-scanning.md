---
title: Accessibility Scanning
sidenav: tools
sticky_sidenav: true
---

Building a website or application that is easy accessible to everyone is  not only an important of the user
experience, but also a requirement of all federally funded projects. GSA provides a helpful 
[Section 508](https://section508.gov) portal. Accessibility should not just be an afterthought! Start thinking
about how to make your projects accessible before you begin any development.

While coding a site to be accessible is a responsibility for engineers, accessibility is not just a concern 
for engineering. [Accessibility for Teams](https://accessibility.digital.gov/front-end/getting-started/)
is a GSA-owned guide that gives explicit suggestions for the whole team product team can approach accessibility.
It lists out ways to manually test your site, as well as giving automated testing guidance.

A more exhaustive list of elements and tools can be found at the [18F Accessibility Guide](https://accessibility.18f.gov/).

# Recommended Tools

## Pa11y With aXe-core {%include components/tag-standard.html %}

[Pa11y](https://pa11y.org/) maintains a handful of open-source automated testing tools that scan your
sites to check for accessibility problems. Their tools can be setup on your machine locally or remotely 
using a CI tool.

We are going to focus on [Pa11y-ci](https://github.com/pa11y/pa11y-ci), which is more geared towards use on
projects in CI. (But can be run locally.)

Pa11y also maintains [Pa11y](https://github.com/pa11y/pa11y) that allows you to look at live sites or
incorporate pa11y tests into an integration testing framework. ([See below](#pa11y-cli))

While Pa11y gives you the option of different test runners, we recommend using aXe-core.

### aXe-core {%include components/tag-standard.html %}
[aXe-core](https://github.com/dequelabs/axe-core) is an open source accessibility testing engine; it includes
a set of accessibility rules that Pa11y will test against. It is also possible to incorporate aXe-core directly
into your integration tests as well.

### Running Pa11y in CI

- [GitHub Actions](#github-actions-on-every-pull-request)
  - [Jekyll Specific Setup](#jekyll-specific-setup)
  - [Eleventy Specific Setup](#eleventy-specific-setup)
- [Circle CI](#circle-ci-setup-instructions)

#### GitHub Actions On Every Pull Request

If you are not familiar with GitHub Actions, you may want to start by reading their [quick start guide](https://docs.github.com/en/actions/quickstart).

Thanks to Daniel Mundra and the folks at CivicActions Accessibility and their [comprehensive documentation](https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe) 
on setting up Pa11y-ci with GitHub Actions. Much of the below code is taken from that blog post; read through for more details.

Their instructions are specific to Jekyll but can be leveraged for other types of projects.

Install pa11y locally:

```bash
  $ npm i --save-dev pa11y-ci
```

Create a `.pa11yci` in the root of your directory to [configure your pa11y CI run](https://github.com/pa11y/pa11y-ci#configuration). This step is optional, but helpful if you want to change any default configuration.

For an example, take a look at the [18F accessibility site's .pallyci file](https://github.com/18F/accessibility/blob/18f-pages/.pa11yci):

```json
    {
      "defaults": {
        "concurrency": 4,
        "standard": "WCAG2AA",
        "runners": ["axe"]
      }
    }
```

Create a `.github/workflows` directory in the root of your project, and then add a file `accessibility-scan.yml` (or whatever you want to call it).

```bash
  $ mkdir -P .github/workflows
  $ touch .github/workflows/accessibility-scan.yml
```

Copy the following into your `accessibility-scan.yml` file :

```yaml
name: accessibility tests

on: [pull_request]

jobs:
  build:
    name: Build site and run pa11y-ci tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source.
        uses: actions/checkout@v2
```

Depending on the type of technology you have built your site in, the rest of this file will vary.

##### Jekyll Specific Setup

Add pa11y-specific scripts to `package.json`:

``` json
    "scripts": {
      "start-detached":
        "bundle exec jekyll serve --detach",
      "pa11y-ci:sitemap":
        "pa11y-ci --sitemap http://localhost:4000/sitemap.xml --sitemap-exclude \"/*.pdf\""
    }
```

Add the following lines to your `accessibility-scan.yml` file at the end of the steps key:

```yaml
  # steps:
    - name: Install jekyll site dependencies
        uses: ruby/setup-ruby@v1
        with:
          # your preferred version here
          ruby-version: 2.7.2
          bundler-cache: true

      - name: Install JS dependencies including pa11y-ci
        run: npm install

      - name: Start up jekyll server
        run: npm run start-detached

      - name: Run pa11y-ci
        run: npm run pa11y-ci:sitemap
```

This installs Ruby and JavaScript dependencies, then starts Jekyll with the `start-detached` script you added to `package.json` in an earlier step. Once Jekyll has started and detached, pa11y-ci will scan URLs from the sitemap.

To see a pa11y.yml live in the wild, check out [18F Accessibility site's pa11y.yml](https://github.com/18F/accessibility/blob/18f-pages/.github/workflows/pa11y.yml).


##### Eleventy Specific Setup

Install `start-server-and-test`:

```bash
  $ npm i --save-dev start-server-and-test
```

Add the following to your `package.json`:

```json
  "scripts": {
    "pa11y-ci:sitemap": "pa11y-ci --sitemap http://localhost:8080/sitemap.xml --sitemap-exclude \"/*.pdf\"",
    "test:pa11y-ci": "npx start-server-and-test start 8080 pa11y-ci:sitemap"
  }
```

Add the following lines to your `accessibility-scan.yml` file at the end of the steps key:

```yaml
    # steps:
      - name: Install node.js.
        uses: actions/setup-node@v2
        with:
          # your preferred version here
          node-version: '16'

      - name: Install NPM dependencies
        run: npm install

      - name: Build eleventy and run pa11y-ci
        run: npm run test:pa11y-ci
```

Eleventy does not have a `--detach` option unlike Jekyll, so therefore we use `start-server-and-test` to run eleventy and our tests for us.

You can see an example of this setup in the [Federal Audit Clearinghouse Front-End repository](https://github.com/GSA-TTS/FAC-Frontend).

#### Circle CI Setup Instructions

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


### Pa11y CLI

If you'd like to test a live website, whether or not you have accesss to the code, the Pa11y CLI can help!

The CLI requires [Node.js](http://nodejs.org/) 8+, which you can install with homebrew or nvm.

`$ brew install node`
or
`$ nvm install node`

Install the CLI globally on your machine:

`$ npm install -g pa11y`

and then you can run it against a live site.

> ```
> $ pa11y https://engineering.18f.gov/
> 
> Welcome to Pa11y
>
> > Running Pa11y on URL https://engineering.18f.gov/
>
> No issues found!
> ```
