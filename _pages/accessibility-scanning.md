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

#### GitHub Actions On Every Pull Request

Thanks to Daniel Mundra and the folks at CivicActions Accessibility and their [comprehensive documentation](https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe) 
on setting up Pa11y-ci. All below code is taken from that blog post; read through for more details.

Their instructions are specific to Jekyll but can be leveraged for other types of projects.

* Install pa11y locally

  `$ npm i --save-dev pa11y-ci`
* Add pa11y-specific scripts to `package.json`

``` json
    "scripts": {
      "start-detached": 
        "bundle exec jekyll serve --detach",
      "pa11y-ci:sitemap": 
        "pa11y-ci --sitemap http://localhost:4000/sitemap.xml --sitemap-exclude \"/*.pdf\""
    }
```

* Create a `.pa11yci` in the root of your directory to [configure your pa11y run](https://github.com/pa11y/pa11y#configuration)

[18F accessibility site's .pallyci](https://github.com/18F/accessibility/blob/18f-pages/.pa11yci).
  `$ touch .pa11yci`

``` json
    {
      "defaults": {
        "concurrency": 4,
        "standard": "WCAG2AA",
        "runners": ["axe"]
      }
    }
```

* Create `.github/workflows` directories in the root of your project, and then a `pa11y.yml` file in `workflows`.

```
  $ mkdir -P .github/workflows
  $ touch .github/workflows/pa11y.yml
```

Create your [Github Action workflow](https://docs.github.com/en/actions/quickstart)! 

To see a pa11y.yml live in the wild, check out [18F Accessibility site's pa11y.yml](https://github.com/18F/accessibility/blob/18f-pages/.github/workflows/pa11y.yml).

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
