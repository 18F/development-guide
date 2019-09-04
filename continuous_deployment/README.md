# Continuous Deployment

## Pre-requisites

This guide assumes that you already have:
- a git repository
- continuous integration service set up - CircleCI or Travis
- [a cloud.gov account](https://cloud.gov/docs/getting-started/accounts/?)

## 1. Getting deployer credentials

Use the instructions on [Cloud.gov](https://cloud.gov/docs/apps/continuous-deployment/#provisioning-deployment-credentials) to create a deployer account for your app. Your deployer credentials will regularly expire, so please make sure to update them periodically.


## 2. Configure the continuous integration service

### Circle CI

Add your cloud.gov deployer service credentials as environment variables to CircleCI. Save them as the CF_USERNAME and CF_PASSWORD.

**Update `.circleci/config.yml`**

We're using the new CloudFoundry Orb in CircleCI. Get the latest orb version at https://circleci.com/orbs/registry/orb/circleci/cloudfoundry. There are also examples of blue green deploys for zero downtime deploys. 

```yml
version: 2.1

orbs:
  cloudfoundry: circleci/cloudfoundry@0.1.52

jobs:
  test:
    # Your test configuration goes here.
    # Ruby - https://circleci.com/docs/2.0/language-ruby/
    # Python - https://circleci.com/docs/2.0/language-python/
    # JS - https://circleci.com/docs/2.0/language-javascript/

workflows:
  test:
    jobs:
      - test:
          filters:
            branches:
              ignore: master
  build_deploy:
    jobs:
      - test:
          filters:
            branches:
              only: master
      - cloudfoundry/push:
          appname: YOUR_APP_NAME
          endpoint: 'https://api.fr.cloud.gov'
          manifest: 'path/to/manifest.yml'
          org: YOUR_ORG
          package: '.'
          space: YOUR_SPACE
          requires:
            - test
          filters:
            branches:
              only: master
```

Done!

### Travis CI

In order for the Travis CI build environment to have access to the deployer credentials, you can either use `travis encrypt` to add an encrypted hash of the credentials to your `.travis.yml` file, _or_ you can use Travis CI's web-based GUI for adding secrets.

Because of some character escape issues posed by `travis encrypt`, we suggest that you store these credentials using the web-based GUI. To access this, visit: https://travis-ci.org/18F/YOUR_REPO/settings. Make sure that the *Display value in build log* setting is **OFF** for this value. For more on this see the [Travis Docs]( https://docs.travis-ci.com/user/encryption-keys/#Note-on-escaping-certain-symbols).

**Update `.travis.yml`**

If you are following the instructions from above, you can ignore the continuous integration instructions in the Cloud.gov docs. We will be using a slightly different set of instructions from what is listed there.

#### The `before_deploy` block

To utilize Autopilot, you will need your Travis deployment to have both the Cloud Foundry CLI and Autopilot installed. To do this, you will modify your `before_deploy` section of your `.travis.yml` file.

First, find the latest release of the [Cloud Foundry CLI](https://github.com/cloudfoundry/cli/releases) (we want the Linux 64 bit binary).

Add the following lines to the `before_deploy` section of your `.travis.yml` file, replacing `LATEST_VERSION` on the second line with the version number of the latest stable release you found above:

```yml
- export PATH=$HOME:$PATH
- travis_retry curl -L -o $HOME/cf.tgz "https://cli.run.pivotal.io/stable?release=linux64-binary&version=LATEST_VERSION"
- tar xzvf $HOME/cf.tgz -C $HOME
- cf install-plugin autopilot -f -r CF-Community
```

#### The `deploy` block

In order to make use of conditional deployments to staging/master on different branches, add the following to the `deploy` section of the `.travis.yml`:

```yml
- provider: script
  script: "./deploy.sh staging"
  skip_cleanup: true
  on:
    branch: develop
- provider: script
  script: "./deploy.sh production"
  skip_cleanup: true
  on:
    branch: master
```

For more on conditional deployments, you can check out the [cloud.gov documentation](https://cloud.gov/docs/apps/continuous-deployment/#using-conditional-deployments).


#### Add `deploy.sh`

To account for the branch-wise logic that is generated in the `.travis.yml`, we will be using a separate `deploy.sh` shell script that will be called by Travis at the time of deployment.

Follow the comments to adjust the script to suit your needs as you see fit. You will need to update the `spaces` to account for what is available on your particular cloud.gov.

```sh
set -e

API="https://api.fr.cloud.gov" # This will be the following url if you are still deploying to E/W 'https://api.cloud.gov'
ORG="gsa-acq-proto"            #Or whatever cloud.gov org you wish to place the app in
APP_NAME=""                    # Enter your app name

SPACE=$1

if [ $# -ne 1 ]; then
  echo "Usage: deploy <space>"
  exit
fi

if [ $SPACE = 'production' ]; then
  NAME=APP_NAME
  MANIFEST="manifest.yml"
elif [ $SPACE = 'staging' ]; then
  NAME="$APP_NAME-staging"
  MANIFEST="manifest-staging.yml"
else
  echo "Unknown space: $SPACE"
  exit
fi

cf login -a $API -u $CF_USERNAME -p $CF_PASSWORD -o $ORG -s $SPACE
cf zero-downtime-push $NAME -f $MANIFEST
```

## Add manifests
Cloud.gov (and Cloud Foundry) use manifest files to specify how an app should be built on cloud.gov. You will now add two separate files, a `manifest.yml` for your production app and a `manifest-staging.yml` for your development application.

Generally your production application will have multiple instances while your staging will only have one. Manifests can be short and sweet, or extensive. For the full cloud foundry documentation on manifests see here: https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html#minimal-manifest.

For an example manifest and manifest-staging see here:
[Acquisitions Manifest](https://github.com/18F/acquisitions.18f.gov/blob/develop/manifest.yml)
[Acquisitions Manifest-Staging](https://github.com/18F/acquisitions.18f.gov/blob/develop/manifest-staging.yml)