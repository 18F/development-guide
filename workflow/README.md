# Workflow Best Practices

Project teams may vary, but across 18F engineering we aim for consistency
around deployments, git etiquette, and similar workflow conventions.

## Continuous Integration & Deployment

* Ensure that your project is running **automated tests** in CI. Successful
  test completion should be a requirement for deployment.
* Generally, **CI should perform deployments**. This ensures the deployments
  are repeatable and don’t rely on individual development environments. See
  our [documentation on continuous deployment](/continuous_deployment) for
  details on how to set this up.
* Deployments should be **zero-downtime**, achievable through tools like
  “autopilot” (see the above docs for more detail).
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
documentation on [code review](/code_review), [git protocol](/git_protocol),
and [example workflows](/example_workflows).

* [Install](https://github.com/18F/laptop#git-seekret) our version of
  **git-seekret** as a pre-commit hook. This will check for many common types
  of API tokens and other sensitive information from making its way into
  version control.
* As part of the ATO process, we require any branches which trigger automated
  deployment be
  [**protected**](https://help.github.com/articles/about-protected-branches/)
  by passing CI and peer review.
* Generally we prefer **branches** over forks to ease internal collaboration.
  If your project has many outside contributors, consider forks instead.
* When in doubt, use
  [**gitflow**](http://nvie.com/posts/a-successful-git-branching-model/) as
  your branch naming scheme.
