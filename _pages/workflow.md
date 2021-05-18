---
title: Our approach
sidenav: approach
sticky_sidenav: true
---

Project teams may vary, but across TTS engineering we aim for consistency
around deployments, git etiquette, and similar workflow conventions.

## Continuous Integration & Deployment

### All Projects {%include components/tag-standard.html %} 

- Ensure that your project is running **automated tests** in CI. Successful
  test completion should be a requirement for deployment.
- Generally, **CI should perform deployments**. This ensures the deployments
  are repeatable and don’t rely on individual development environments. See
  our [documentation on continuous deployment]({{site.baseurl}}/continuous-deployment) for
  details on how to set this up.
- Deployments should be **zero-downtime**, achievable through tools like
  [Cloud Foundry's rolling deployment process](https://docs.cloudfoundry.org/devguide/deploy-apps/rolling-deploy.html).
- In addition to deployments after code change, we generally need to
  (automatically) **re-deploy daily** to ensure the running containers haven’t
  been tampered with (an ATO compliance requirement). See CircleCI’s
  [“schedule”
  docs](https://circleci.com/docs/2.0/configuration-reference/#schedule) for
  details.

## Git & GitHub {%include components/tag-standard.html %} 

Git is our version control system of choice and
GitHub is our current repository platform, but how to use these tools can be spelled out
in a bit more detail. Note that we are looking to consolidate this with our existing
documentation on [code review]({{site.baseurl}}/code-review) and [example
workflows]({{site.baseurl}}/example-workflows).

### Security {%include components/tag-requirement.html %}

[Install Caulking](https://github.com/cloud-gov/caulking). 
It's easy to accidentally push secrets to GitHub. Caulking checks for many common types of API tokens 
and other sensitive information before you commit, allowing you to remove sensitive data before
accidentally publishing it. (This repo assumes MacOS with Homebrew installed.)

Enable 
[**two-factor authentication**](https://help.github.com/articles/about-two-factor-authentication/) for
your GitHub account. This is required for all TTS employees.

As part of the ATO process, we require any branches which
trigger automated deployment be [**protected**](https://help.github.com/articles/about-protected-branches/)
by passing CI and peer review.

### Other considerations

#### {%include components/tag-standard.html %} 
* Default to **public** for new repositories. See our
  [guidelines](https://github.com/18F/open-source-policy/blob/master/practice.md)
  about open source for more detail.
* We prefer **branches** over forks to ease internal collaboration. *If your project has many outside contributors, consider forks instead.*
* Keep your repository **clean**; delete merged branches and avoid committing
files specific to your dev environment (e.g. `.DS_Store`).
* Consider [**signing commits** with a GPG
  key](https://help.github.com/articles/signing-commits-with-gpg/)


#### {%include components/tag-suggestion.html %}
* When in doubt, use feature branches and [**gitflow**](http://nvie.com/posts/a-successful-git-branching-model/) as your branch naming scheme.
* Follow [this
  guidance](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) about **good commit messages**.

## Code style

{%include components/tag-standard.html %}  Write code and documentation that is easy to understand, is accessible and welcoming to everyone, and helps users do what they want to do. Adhere to the guidance for [Inclusive Language](https://content-guide.18f.gov/our-style/inclusive-language/) and others provided by https://content-guide.18f.gov/. 

{%include components/tag-standard.html %}  Use an opinionated automated code formatter whenever possible. This saves teams from wasting time arguing about code style, and makes it easy to comply. Specific suggestions in [the pages for each language]({{site.baseurl}}/language-selection/).
