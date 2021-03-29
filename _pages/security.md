---
title: Security
sidenav: security
sticky_sidenav: true
---

Security is everybody's responsibility at TTS but if you're not used to thinking about security in your day-to-day job, 
that's understandable. We come from a range of different backgrounds, some of which involved security more than others. 

There are practices that we should adhere to as much as possible when building websites and this guide contains ones 
that front-end designers and developers need to be aware of. We aim to give everyone a framework to think about security, and
ways to approach it with our partners.

This is an ever-expanding list; if an important issue is unrepresented, please feel free to open up a PR with your expertise 
or add an issue!

## FISMA
Every system you'll work on at TTS has a FISMA level of impact. 
The [Federal Information Security Modernization Act](https://www.cisa.gov/federal-information-security-modernization-act)
(FISMA) was introduced to ensure that all government systems have a framework to handle confidential and sensitive information
in a secure way.

The impact level of a system is determined by how adverse the impact would be if the confidentiality, integrity and/or 
availability of system was compromised. 

```
The potential impact is LOW if the loss of confidentiality, integrity, or availability could be expected to have a limited adverse effect on organizational operations, organizational assets, or individuals.
...
The potential impact is MODERATE if the loss of confidentiality, integrity, or availability could be expected to have a serious adverse effect on organizational operations, organizational assets, or individuals. 
...
The potential impact is HIGH if the loss of confidentiality, integrity, or availability could be expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, or individual
```
[Standards for Security Categorization of Federal Information and Information Systems](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf)

## When Should I Be Thinking About Security?

The short answer: Always!

Some longer answers:

### When starting work on a new system

When starting work on a brand new system, it can feel like everything is going to go perfectly! But it's important to begin 
building keeping in mind that things can (and likely will!) go wrong in unexpected ways.

Make sure you, or the system owners, have a way of knowing when something goes wrong. Start by asking some difficult questions:

* How will we know if the system is hacked?
* How will we know if there is a data leak?
* What will happen if there is a data breach?
* What is our escalation policy when things go wrong?

### When starting work on an existing system

Ideally, every vendor would be employing security best practices! But sometimes we'll start working on a project, and encounter a security 
flaw or potential breach that needs to be addressed ASAP. While those flaws need to be escalated, we should be thinking about how to
communicate those kinds of issues without potentially alienating important relationships.

*Before* getting access to a project's code base, it's a good idea to ask about a preferred escalation policy.

* If I see a security problem, what is the best way to communicate that? 
* If it's an issue that needs to be addressed immediately, how should we work together to escalate?

Premptively asking these questions can help keep focus on the security issues at hand if you immediately see problems when you get code
access -- and having an answer to those questions is important for every project! 

After you get access, it's a good idea to ensure that there are also answers to the questions listed in the New System section

### Data Flow

Security is paramount when thinking about how data flows into, through, and out of your system. 

When the boundaries of different systems or domains bump up against each other, there are opportunities for security breaches.
These "boundaries" can be in forms such as: 

* third party API
* installed agent
* form that posts input to your database
* downloading/uploading to any part of the cloud
* webhook integration

Thinking about the edges of your system, how they're exposed, and to whom will help you make better decisions about security.