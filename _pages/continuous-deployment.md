---
title: Continuous Deployment
layout: post
---

## Pre-requisites

This guide assumes that you already have:
- [a GitHub account](https://handbook.18f.gov/github/) and a GitHub repository, typically [under the 18F organization](https://github.com/18F)
- [a CircleCI account](https://circleci.com/signup/) (Log In with GitHub)
- [a cloud.gov account](https://cloud.gov/docs/getting-started/accounts/?)

## 1. Getting deployer credentials

Use the instructions on [Cloud.gov](https://cloud.gov/docs/apps/continuous-deployment/#provisioning-deployment-credentials) to create a deployer account for your app. Your deployer credentials will regularly expire, so please make sure to update them periodically.


## 2. Configure the continuous integration service

### Circle CI

Add your cloud.gov deployer service credentials as environment variables to CircleCI. Save them as the CF_USERNAME and CF_PASSWORD.

**Update `.circleci/config.yml`**

```yml
version: 2.1

jobs:
  test:
    # Your test configuration goes here.
    # Ruby - https://circleci.com/docs/2.0/language-ruby/
    # Python - https://circleci.com/docs/2.0/language-python/
    # JS - https://circleci.com/docs/2.0/language-javascript/

  deploy:
    docker:
      # This image has the latest cf-cli as well as zero downtime plugins, if needed.
      - image: governmentpaas/cf-cli:latest

    steps:
      - checkout
      - run:
          name: deploy to cloud.gov
          command: |
            # Set $CF_USERNAME and $CF_PASSWORD in CircleCI settings.
            # $CF_ORG, $CF_SPACE, and $APP_NAME can also be set in CircleCI settings or hardcoded here.
            cf api https://api.fr.cloud.gov
            cf auth "$CF_USERNAME" "$CF_PASSWORD"
            cf target -o "$CF_ORG" -s "$CF_SPACE"
            cf zero-downtime-push "$APP_NAME" -p '.' -f path/to/manifest.yml

workflows:
  test:
    jobs:
      - test:
          filters:
            branches:
              ignore: master
  deploy:
    jobs:
      - test:
          filters:
            branches:
              only: master
      - deploy:
          requires:
            - test
          filters:
            branches:
              only: master
```

Done!


## Add manifests
Cloud.gov (and Cloud Foundry) use manifest files to specify how an app should be built on cloud.gov. You will now add two separate files, a `manifest.yml` for your production app and a `manifest-staging.yml` for your development application.

Generally your production application will have multiple instances while your staging will only have one. Manifests can be short and sweet, or extensive. For the full cloud foundry documentation on manifests see here: <https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html#minimal-manifest>.

For an example manifest and manifest-staging see here:
[Acquisitions Manifest](https://github.com/18F/acquisitions.18f.gov/blob/develop/manifest.yml)
[Acquisitions Manifest-Staging](https://github.com/18F/acquisitions.18f.gov/blob/develop/manifest-staging.yml)


## Zero Downtime Deploy Options
- `v3-zdt-push` is an official command, yet is in active development. See <https://docs.cloudfoundry.org/devguide/deploy-apps/rolling-deploy.html>
- `zero-downtime-push` is the popular Autopilot plugin used by a lot of TTS projects and used in both of the above examples. It is now unmaintained and archived though. Does not support buildpacks. If your application successfully deploys to cloud.gov but does not start, which may happen for an application that does not have an adequate test suite, you may have to go into the cf target space and manually delete the "APP_NAME-venerable" application in order to make use of `autopilot` again.
- `blue-green-deploy` another plugin similar to autopilot. <https://github.com/bluemixgaragelondon/cf-blue-green-deploy>
- An official CircleCI / Cloud Foundry Orb is also available at <https://circleci.com/orbs/registry/orb/circleci/cloudfoundry>
