---
title: Cloud Services 
sidenav: security
sticky_sidenav: true
---
A common practice is storing files in the cloud; places like [Amazon Simple Storage Service](https://docs.aws.amazon.com/s3/index.html)
(Amazon S3), [Google Cloud](https://cloud.google.com/storage/docs/introduction), or 
[Azure Storage](https://docs.microsoft.com/en-us/rest/api/storageservices/delegate-access-with-shared-access-signature).
These services give developer an easy way to store data in the cloud, and download it when needed. But this
introduces security considerations.

When thinking about how to upload or download data in your application, there are always tradeoffs to think about -- often
processes that are easier to use are less secure; likewise a workflow that is more complex is often more secure. 

These tradeoffs get more significant depending on the FISMA level of your system.

## Presigned URLs 
A common method of allowing users to transfer data without credentials is to use [presigned urls](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).
(Azure refers to these as [shared access signatures](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-storage-sharedaccesssignature-permissions), but they are a similar concept.)

There are some differences between service providers; the below details are specific to S3 as that has
been our most common use case and is supported by [cloud.gov](https://cloud.gov/docs/services/s3/).

### Some Things to know about S3 presigned URLs
* They can be reused until they expire
  * Default expiration time is 15 minutes
* They can be used by *anyone*
* There is no default file size limit on uploads
* Uploads use PUT by default

A presigned URL is an *easily-shareable* URL that is generated with an authenticated user's security credentials. They 
are created with specific actions attached to them, as well as an expiration date and time; the URL will remain valid
until that expiration moment.

A shareable URL that bypasses security authentication is very convenient to use! However, the tradeoff is that anyone
with access to that URL can use it. If a user for some reason decided to post a presigned upload URL to the internet,
anyone could use that URL to upload data to your bucket until the expiration time was passed. 

This introduces a "user error" or "insider threat" security vulnerability to your system. Even if your users are good actors,
some attack vectors could be:
* A bad actor scanning spaces of URLs to find publicly-available files.
* Anything with access to the client would have access to the URLs and the accompanying actions - this could include an installed untrustworthy browser extension.

### FISMA Low:
Be cautious but proceed with presigned URLs if you feel it is the right choice for your system.

 We recommend taking [mitigation steps](#mitigation-steps) to secure your system.

### FISMA Medium:
Really consider the tradeoffs. What kind of adverse impact might happen if a bad actor gets hold of a presigned URL to your system?

* Can they access PII?
* Can they upload junk data or other harmful information?

If you've thought things through and it's the best or only option, proceed but definitely take [mitigation steps](#mitigation-steps)
to secure your system. 

### FISMA High:
{%include components/tag-caution.html %} We do not recommend using presigned URLs for this kind of system. The only real barrier 
between a bad actor and user data is the obscurity/randomness of the URL and the expiration duration. 

### Mitigation Steps
**All Actions**
* Generate expiration times that are *very* short lived -- think seconds rather than minutes.
* Don't log unencrypted presigned URLs

**Upload Actions**
* Use a [POST action](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html) rather than PUT
* Construct a [POST policy](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html) to
  * limit file size as appropriate to your use case
  * limit file type as appropriate to your use case
* Scan for viruses

## Proxying the file download

This option is less "convenient" in that there is no easily-shareable URL that is generated. However, if your 
system has a higher FISMA impact level, or if you don't need to generate a shareable URL, this is often a more 
secure option.

This will be more specific to your server, but the basic steps are:

* Create an endpoint in your server that the client can call
* Check authentication and authorization when the endpoint is hit
  * Gracefully capture the issue and respond with an error if the client is not authorized for this action
* If the client is authenticated and authorized, construct an authenticated GET to the cloud provider
* Serve the file to the client as a response to the endpoint