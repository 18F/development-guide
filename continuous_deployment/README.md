# Continuous Deployment with Contraband's Autopilot
## What to do?

1. [Get deployer credentials](https://github.com/18F/development-guide/tree/add-autopilot/adding-autodeployment#1-getting-deployer-credentials)
2. [Configure the continuous integration service](https://github.com/18F/development-guide/tree/add-autopilot/adding-autodeployment#2-update-travisyml)
3. [Add `deploy.sh`](https://github.com/18F/development-guide/tree/add-autopilot/adding-autodeployment#3-add-deploysh)
4. [Add manifests](https://github.com/18F/development-guide/tree/add-autopilot/adding-autodeployment#4-add-manifests)

## What is this guide for?

This guide is to help developers implement [Contraband's Autopilot](https://github.com/contraband/autopilot) plugin on a [cloud.gov](https://cloud.gov/) hosted app.

By following this guide, you'll be able to deploy by merging pull requests. A benefit of Autopilot is that deploys cause zero downtime.

In the future we hope to provide you with a small script to generate this all for you!

## Pre-requisites

This guide assumes that you already have:
- a git repository
- continuous integration services on [Travis CI](https://travis-ci.org/).
- [a cloud.gov account](https://cloud.gov/docs/getting-started/accounts/?)

## 1. Getting deployer credentials

Use the instructions on [Cloud.gov](https://cloud.gov/docs/apps/continuous-deployment/#provisioning-deployment-credentials) to create a deployer account for your app.

In order for the Travis CI build environment to have access to the deployer credentials, you can either use `travis encrypt` to add an encrypted hash of the credentials to your `.travis.yml` file, _or_ you can use Travis CI's web-based GUI for adding secrets.

Because of some character escape issues posed by `travis encrypt`, we suggest that you store these credentials using the web-based GUI. To access this, visit: https://travis-ci.org/18F/YOUR_REPO/settings. Make sure that the *Display value in build log* setting is **OFF** for this value. For more on this see the [Travis Docs]( https://docs.travis-ci.com/user/encryption-keys/#Note-on-escaping-certain-symbols).

## 2. Configure the continuous integration service
### Travis CI
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

### Other Continuous Integration Tools
Coming Soon!

## 3. Add `deploy.sh`

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

## 4. Add manifests
Cloud.gov (and Cloud Foundry) use manifest files to specify how an app should be built on cloud.gov. You will now add two separate files, a `manifest.yml` for your production app and a `manifest-staging.yml` for your development application.

Generally your production application will have multiple instances while your staging will only have one. Manifests can be short and sweet, or extensive. For the full cloud foundry documentation on manifests see here: https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html#minimal-manifest.

For an example manifest and manifest-staging see here:
[Acquisitions Manifest](https://github.com/18F/acquisitions.18f.gov/blob/develop/manifest.yml)
[Acquisitions Manifest-Staging](https://github.com/18F/acquisitions.18f.gov/blob/develop/manifest-staging.yml)

### Additional Considerations
Your deployer credentials will regularly expire, so please make sure to update them periodically.

Also, if your application successfully deploys to cloud.gov but does not start, which may happen for an application that does not have an adequate test suite, you may have to go into the cf target space and manually delete the "APP_NAME-venerable" application in order to make use of `autopilot` again.
