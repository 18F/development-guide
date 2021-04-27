---
title: Incident Response Drills
sidenav: security
sticky_sidenav: true
---

## Why do Incident Response drills?

You don't want to be creating or testing recovery processes while things are on fire. Preparing and practicing ahead of time is a good idea.

## Preparing for the Drill

### Finding your weak points

First, create a boundary diagram. (You will very likely need to create a boundary diagram as part of your system's security and compliance process.)

Then, pull out your boundary diagram and determine where your system can be accessed. Make sure that you include third party products (analytics, CI/CD pipelines, code hosting) in this analysis.

Look at each box and each connection on the diagram separately. Figure out how someone who isn't supposed to be there could get there, or how each component could fail unexpectedly.

This will help you build a set of incident scenarios to practice recovering from.

### Gathering Organization Policies

It is likely that your Agency or OCIO has existing policies around reporting for security or data breach incidents. Gather them to ensure they are built into your response.

## Example Incident Response drills

Scenarios worth practicing for a web app include:

* [A deploy goes wrong](#a-deploy-goes-wrong)
* [PII exposed](#pii-exposed)
* [API Keys or passwords exposed](#api-keys-or-passwords-exposed)
* [Oops, I deleted the database](#oops-i-deleted-the-database)
* [S3 buckets are erased](#s3-buckets-are-erased)
* [Site defacement](#site-defacement)
* [Denial of Service](#denial-of-service)
* [Service Downtime](#service-downtime)

You don't need to drill each and every one of these scenarios each time, but they are good to plan for.

These examples a web application hosted on [Cloud.gov](https://cloud.gov) that generally follows [our approach](/workflow).

Please adjust for your infrastructure.

## A Deploy Goes Wrong

It turns out, the new release doesn't deploy properly. It has successfully deployed in all the other environments.

### Mitigation:

Re-deploy last successful release from  your CI/CD pipeline. (You are deploying from a CI/CD pipeline, right?)

### Step-by-step template:

1. Go to `<<Insert CI/CD URL>>` to view recent deploys
1. Rerun the deploy step for the last known-good deploy
1. If necessary, roll back the database to the correct version

## PII Exposed

It's discovered that PII is being leaked to unauthorized users through the site.

### Mitigation

1. Contact `<<Insert email of POC laid out in Agency policies>>` and inform them of a breach
1. Stop the exposure
  1. Assess the severity and impact of the potential leak
  1. Decide if the site needs to be set into a maintenance mode to stop further exposure. If yes, then bring up the maintenance page
  1. If you are able to isolate the section of the site where the issue is occurring and remove/hide the page
1. If this is in code version control history, be sure to scrub references to the PII from all versions.
1. Identify root cause of the issue and deploy a hotfix
1. Take necessary corrective action as directed by your agency security team. If there are corrective actions that the PO is able to handle in terms of contacting the affected users, do so.

## API Keys or Passwords Exposed

An API Key for an AWS service was accidentally committed to our public code repository!

### Mitigation

1. Contact `<<Insert email of POC laid out in Agency policies>>` and inform them of a breach
1. Rotate keys

## Oops, I deleted the database

## S3 buckets are erased

## Site defacement

## Denial of Service

## Service Downtime
