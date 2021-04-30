---
title: Incident Response Drills
sidenav: security
sticky_sidenav: true
---

*Table of Contents*

* [Why do Incident Response Drills?](#why-do-incident-response-drills)
* [How to Build Incident Response Drills](#how-to-run-an-incident-response-drill)
* [Example Incident Response Drills](#example-incident-response-drills)

## Why do Incident Response Drills?

You don't want to be creating or testing recovery processes while things are on fire. 🔥

Preparing and practicing ahead of time is a good idea. Running incident response drills on an annual basis at the very least is a good idea!

## How to Run an Incident Response Drill

### Identify Your Top Risks

First, create a boundary diagram. (You will very likely need to create a boundary diagram as part of your system's security and compliance process.)

Then, pull out your boundary diagram and determine where your system can be accessed. Make sure that you include third party products (analytics, CI/CD pipelines, code hosting) in this analysis.

Look at each box and each connection on the diagram separately. Figure out how someone who isn't supposed to be there could get there, or how each component could fail unexpectedly.

This will help you build a set of incident scenarios to practice recovering from.

### Gather Organizational Policies

It is likely that your Agency or OCIO has existing policies around reporting for security or data breach incidents. Gather them to ensure they are built into your response.

### Create the Drill

See [Example Incident Response Drills](#example-incident-response-drills) for inspiration!

### Invite Everyone to the Drill

Be sure to invite developers, infrastructure, and compliance professionals on your team to the drill. An open invitation for your team is a good idea! Letting the team know that you're doing this kind of activity builds confidence and assurance that the team takes security seriously.

Give advance warning to any third parties that might want to know that you're planning an incident response drill, such as Cloud.gov or Login.gov.

Schedule more time than you think you will need! If you schedule half a day, you may find you'll need the whole day!

Ask for a volunteer to take notes throughout the incident response drill.

### Conduct the Drill

Follow the steps in the drill, making sure good notes are taken.

Team members can rotate being the "driver" who shares their screen and walks through the steps in the drill.

![Image of a hardware drill]({{site.baseurl}}/assets/images/drill-small-wikimedia.png)
<caption>
  <i>This is a drill. <br/> Image attribution: Włodzimierz Wysocki. License: CC BY-SA 3.0</i>
</caption>

### After the Drill

You could end the drill with a practice "blameless postmortem". This is a low-pressure way to figure out your team's format for conducting postmortems after an incident.

[Cloud.gov's retrospective meeting guide](https://cloud.gov/docs/ops/service-disruption-guide/#retrospective-meeting-guide) has ideas and checklists for organizing a successful post-incident retrospective.

Send an email recapping the drill to all stakeholders. Include the outcomes of the drill, what you learned from the drill, and any follow-up actions.

## Example Incident Response Drills

Scenarios worth practicing for a web app include:

* [Scenario: A Deploy Goes Wrong](#scenario-a-deploy-goes-wrong)
* [Scenario: API Keys or Passwords Exposed](#scenario-api-keys-or-passwords-exposed)
* [Scenario: Compromised Account](#scenario-compromised-account)
* [Scenario: PII Exposed](#scenario-pii-exposed)
* [Scenario: Oops, I Deleted the Database](#scenario-oops-i-deleted-the-database)
* [Scenario: Oops, I Erased the S3 Bucket](#scenario-oops-i-erased-the-s3-bucket)

You don't need to drill each and every one of these scenarios each time, but they are good to plan for.

These examples are for a web application hosted on [Cloud.gov](https://cloud.gov) that generally follows [our approach](/workflow).

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

## Scenario: Compromised Account

The website has been hacked due to a compromised key! Now instead of our link to submit a report, we have a cute image of a cat and a spam link to follow cute cats on instagram.

![Screenshot of Engineering Practices Guide homepage with cute cat photo in the middle of it]({{site.baseurl}}/assets/images/screenshot-fake-epg-hacked.png)
<caption>
  <i>Oh no! Who added this cute cat photo to our website?!? <br/> Photo attribution: Tran Mau Tri Tam. Unsplash License.</i>
</caption>

What happened? Was a GitHub account compromised? A Cloud.gov account? A deploy key?

### Example mitigation steps:

1. Contact `<<Insert email of POC laid out in Agency policies>>` and inform them of a breach.
1. The first priority is to remove the unauthorized access so that there can't be further damage or information leakage. Figure out where the deploy came from.
  * *If the deploy was triggered from GitHub*, you would be able to see it in CI/CD history. In this case, the GitHub admin should immediately remove the account that triggered the malicious deployment. Rotate any deploy credentials that may have been compromised.
  * If you don't see the deploy in CI/CD, that means either deployment keys were compromised, or a Cloud.gov account was compromised. Look at the logs to see which deployment method was used.
  * *If you see that the deploy came from a compromised Cloud.gov account*: Remove the compromised account from the org, all spaces (starting with prod), and all application (starting with prod apps).
  * *If you see that the deploy came from a compromised deploy key*: In Cloud.gov delete the current deployment keys, remake them and add the new keys to your CI/CD tool.
1. Isolate resources: incidents that are likely to be malicious need to be handled with care to preserve forensics. The most important things to remember: do not delete an instance that has been tampered with, and do not redeploy from the last release without removing routes and renaming the instances. That could get rid of valuable forensic information. Instead:
  * Remove the route to the affected instances. (This will make the bad deploy inaccessible to the public.)
  * Rename the instance. (This will preserve forensics as you redeploy.)


### Example drill steps:

1. Acknolwedge that the first step would be to inform points of contact; establish that everyone knows who to inform in the event of an incident.
1. Choose a scenario to drill: compromised GitHub account, compromised Cloud.gov account, or compromised deploy key. (Compromised deploy key might be easiest to drill)
1. Practice the steps to remove compromised accounts or credentials, for example, by deleting the current deployment keys, remaking them, and adding them to CI/CD.
1. Using a development application instance, practice removing the route to a instance that may have been compromised and then renaming it to preserve forensics.

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


## Scenario: Oops, I Deleted the Database

The database needs to be restored from a backup.

### Example mitigation steps:

1. If you're using Cloud.gov, follow [Cloud.gov database backup procedures](https://cloud.gov/docs/services/relational-database/#backups).

### Example drill steps:

Assuming you have a staging database using a dedicated Cloud.gov database plan:

1. Delete some data from your staging database. (No deleting data from a production database, please.)
2. Reach out to Cloud.gov using the [the non-emergency email address provided in thir docs](https://cloud.gov/docs/services/relational-database/#backups); request a backup.
3. Practice restoring the staging database to the point in time before you deleted the data.

## Scenario: Oops, I Erased the S3 Bucket

Let's re-create and restore from a backup.

### Example mitigation steps:

1. If the bucket no longer exists, create a new bucket in Cloud.gov in the space where the bucket was deleted, ideally using infrastructure-as-code or a deploy script.
2. Restore bucket contents from a backup.
3. Verify the bucket settings, permissions, and contents are correct.

### Example drill steps:

Follow the mitigation steps above in a development environment.