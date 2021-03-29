---
title: Amazon Web Services (AWS) 
sidenav: security
sticky_sidenav: true
---
A common practice is storing files in [Amazon Simple Storage Service](https://docs.aws.amazon.com/s3/index.html) (Amazon S3).
S3 gives the developer an easy way to store data in the cloud in a "bucket", and download it when needed. But this 
introduces security concerns.

When thinking about how to upload or download data in your application, there are always tradeoffs to think about -- often
processes that are easier to use are less secure; likewise a workflow that is more complex is often more secure. 

These tradeoffs get more significant depending on the FISMA level of your system.

### Presigned URLs 
All objects in S3 are private by default. This is great for security practices, but can make it tricky if you want to allow users to upload or download objects programmatically via an application. A method of allowing users to transfer
data without AWS credentials is to use [presigned urls](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

#### Things to know about presigned URLs
* They can be reused until they expire
  * Default expiration time is 15 minutes
* They can be used by *anyone*
* There is no default file size limit on uploads
* Uploads use PUT by default

A presigned URL is an easily-shareable URL that is generated with an authenticated user's security credentials. They 
are created with specific actions attached to them, as well as an expiration date and time; the URL will remain valid
until that expiration moment.

A shareable URL that bypasses security authentication is very convenient to use! However, the tradeoff is that anyone
with access to that URL can use it. If a user for some reason decided to post a presigned upload URL to reddit or
twitter, anyone could use that URL to upload data to your bucket until the expiration time was passed.

If you are working on a project that is storing Personally Identifiable Information (PII), especially sensitive data like Social
Security Numbers, presigned URLs is probably a bad approach! Remember, the only barrier between a bad actor and user data is the
obscurity/randomness of the URL. 

#### FISMA Low:
Be cautious but proceed with presigned URLs if you feel it is the right choice for your system.

 We recommend taking [mitigation steps](#mitigation-steps) to secure your system.

#### FISMA Medium:
Really consider the tradeoffs. What kind of adverse impact might happen if a bad actor gets hold of a presigned URL to your system?

* Can they access PII?
* Can they upload junk data or other harmful information?

If you've thought things through and it's the best or only option, proceed but definitely take [mitigation steps](#mitigation-steps)
to secure your system. 

#### FISMA High:
{%include components/tag-caution.html %} We do not recommend using presigned URLs for this kind of system.

#### Mitigation Steps
**All Actions**
* Generate expiration times that are *very* short lived -- think seconds rather than minutes.
* Don't log unencrypted presigned URLs

**Upload Actions**
* Use a [POST action](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html) rather than PUT
* Construct a [POST policy](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html) to
  * limit file size as appropriate to your use case
  * limit file type as appropriate to your use case
* Scan for viruses

### Proxying the file download

