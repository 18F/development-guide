---
title: Incident Response Drills
sidenav: security
sticky_sidenav: true
---

## Why do Incident Response drills?

You don't want to be creating or testing recovery processes while things are on fire. 🔥

Preparing and practicing ahead of time is a good idea.

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

* [Scenario: A Deploy Goes Wrong](#a-deploy-goes-wrong)
* [Scenario: API Keys or Passwords Exposed](#api-keys-or-passwords-exposed)
* [Scenario: Site Defacement](#site-defacement)
* [Scenario: Oops, I Deleted the Database](#oops-i-deleted-the-database)
* [Scenario: PII Exposed](#pii-exposed)
* [S3 buckets are erased](#s3-buckets-are-erased)
* [Denial of Service](#denial-of-service)
* [Service Downtime](#service-downtime)

You don't need to drill each and every one of these scenarios each time, but they are good to plan for.

These examples a web application hosted on [Cloud.gov](https://cloud.gov) that generally follows [our approach](/workflow).

Please adjust for your infrastructure.

## Scenario: A Deploy Goes Wrong

It turns out, the new release doesn't deploy properly. It has successfully deployed in all the other environments. Let's re-deploy.

![Rerun job workflow in CircleCI]({{site.baseurl}}/assets/images/rerun-workflow-circleci-screenshot.png)
<caption>
  <i>Screenshot of how to re-run a workflow in a CI/CD tool (in this case, CircleCI)</i>
</caption>

### Example mitigation steps:

Re-deploy last successful release from  your CI/CD pipeline. (You are deploying from a CI/CD pipeline, right?)

1. Go to `<<Insert CI/CD URL>>` to view recent deploys.
1. Rerun the deploy step for the last known-good deploy.
1. If necessary, roll back the database to the correct version.

### Example drill:

Follow the mitigation steps above in a development environment.

## Scenario: API Keys or Passwords Exposed

An API Key for an AWS service was accidentally committed to our public code repository! (Use tools like [caulking](https://github.com/cloud-gov/caulking) to prevent issues like this from happening in the first place.)

### Example mitigation steps:

1. Contact `<<Insert email of POC laid out in Agency policies>>` and inform them of a breach.
1. Write down which keys and services were exposed.
1. Rotate all exposed keys.
1. Remove any exposed keys from the commit history.

### Example drill steps:

1. Acknolwedge that the first step would be to inform points of contact; establish that everyone knows who to inform in the event of an incident.
1. To simulate the real thing, push up a file to GitHub or whichever code repository use with a fake service key. (No using real keys for drills, please.)
1. Practice rotating the keys for that service in a development context.
1. Practice scrubbing the fake key from the commit history.

## Scenario: Site Defacement

The website has been hacked due to a compromised key! Now instead of our link to submit a report, we have a cute image of a cat and a spam link to follow cute cats on instagram.

![Screenshot of Engineering Practices Guide homepage with cute cat photo in the middle of it]({{site.baseurl}}/assets/images/screenshot-fake-epg-hacked.png)
<caption>
  <i>Oh no! Who added this cute cat photo to our website?!?</i>
</caption>

### Example mitigation steps:

TK

### Example drill steps:

TK

## Scenario: Oops, I Deleted the Database

The database needs to be restored from a backup.

### Example mitigation steps:

1. If you're using Cloud.gov, follow [Cloud.gov database backup procedures](https://cloud.gov/docs/services/relational-database/#backups).

### Example drill steps:

Assuming you have a staging database using a dedicated Cloud.gov database plan:

1. Delete some data from your staging database. (No deleting data from a production database, please.)
2. Reach out to Cloud.gov using the [the non-emergency email address provided in thir docs](https://cloud.gov/docs/services/relational-database/#backups); request a backup.
3. Practice restoring the staging database to the point in time before you deleted the data.

## Scenario: PII Exposed

It's discovered that PII is being leaked to unauthorized users through the site.

### Example mitigation steps:

1. Contact `<<Insert email of POC laid out in Agency policies>>` and inform them of a breach.
1. Stop the exposure.
  * Assess the severity and impact of the potential leak.
  * Decide if the site needs to be set into a maintenance mode to stop further exposure. If yes, then bring up the maintenance page.
  * If you are able to isolate the section of the site where the issue is occurring and remove/hide the page.
1. Identify root cause of the issue and deploy a hotfix.
1. Take necessary corrective action as directed by your agency security team. If there are corrective actions that the PO is able to handle in terms of contacting the affected users, do so.

### Example drill steps:

1. Acknolwedge that the first step would be to inform points of contact; establish that everyone knows who to inform in the event of an incident.
1. In a development environment, practice putting the site into a maintenance mode or removing/hiding a page on the site, whichever would be most relevant to your project.
1. Review any relevant corrective action / affected user notification procedures.

## S3 buckets are erased

### Example mitigation steps:

TK

### Example drill steps:

TK


## Denial of Service

### Example mitigation steps:

TK

### Example drill steps:

TK

