---
title: Workflow Best Practices
---
# Workflow Best Practices

Project teams may vary, but across 18F engineering we aim for consistency
around deployments, git etiquette, and similar workflow conventions.

## Continuous Integration & Deployment

{%include components/tag-standard.html %}

* Ensure that your project is running **automated tests** in CI. Successful
  test completion should be a requirement for deployment.
* Generally, **CI should perform deployments**. This ensures the deployments
  are repeatable and don’t rely on individual development environments. See
  our [documentation on continuous deployment]({{site.baseurl}}/continuous-deployment) for
  details on how to set this up.
* Deployments should be **zero-downtime**, achievable through tools like
  [Cloud Foundry's rolling deployment process](https://docs.cloudfoundry.org/devguide/deploy-apps/rolling-deploy.html).
* In addition to deployments after code change, we generally need to
  (automatically) **re-deploy daily** to ensure the running containers haven’t
  been tampered with (an ATO compliance requirement). See CircleCI’s
  [“schedule”
  docs](https://circleci.com/docs/2.0/configuration-reference/#schedule) for
  details.

## Git & GitHub

Git is our version control system of choice and GitHub is our current
repository platform, but how to use these tools can be spelled out in a bit
more detail. Note that we are looking to consolidate this with our existing
documentation on [code review]({{site.baseurl}}/code-review) and [example
workflows]({{site.baseurl}}/example-workflows).

{%include components/tag-requirement.html %}

* [Install](https://github.com/18F/laptop#git-seekret) our version of
  **git-seekret** as a pre-commit hook. This will check for many common types
  of API tokens and other sensitive information from making its way into
  version control.
* Enable [**two-factor
  authentication**](https://help.github.com/articles/about-two-factor-authentication/)
  for your GitHub account. This is required for all 18F employees.
* Default to **public** for new repositories. See our
  [guidelines](https://github.com/18F/open-source-policy/blob/master/practice.md)
  about open source for more detail.
* As part of the ATO process, we require any branches which trigger automated
  deployment be
  [**protected**](https://help.github.com/articles/about-protected-branches/)
  by passing CI and peer review.

{%include components/tag-default.html %}

* Generally we prefer **branches** over forks to ease internal collaboration.
  If your project has many outside contributors, consider forks instead.
* When in doubt, use feature branches and
  [**gitflow**](http://nvie.com/posts/a-successful-git-branching-model/) as
  your branch naming scheme.
* Keep your repository **clean**; delete merged branches and avoid committing
  files specific to your dev environment (e.g. `.DS_Store`).
* Follow [this
  guidance](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
  about **good commit messages**.
* Consider [**signing commits** with a GPG
  key](https://help.github.com/articles/signing-commits-with-gpg/)
