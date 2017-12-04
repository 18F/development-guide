---
title: Content Security Policy
permalink: /security/content-security-policy/
layout: docs
sidenav: security
---

# Content Security Policy

## What is Content Security Policy?
Content Security Policy (referred to as **CSP** in the rest of this guide) is a security measure designed by the W3C (World Wide Web Consortium) to mitigate the likelihood of Cross-Site Scripting (XSS) attacks and data injection. It is designed to be used in conjunction with other security practices currently recommended for web development.

It can be enabled on either client- or server-side, and is unobtrusive in unsupported browsers — that is, browsers that don't support CSP will ignore its directives and load the page as normal.

CSP is supported by the current versions of **all modern desktop browsers**: Safari, Chrome, Firefox, and IE Edge. It is also supported in recent versions iOS Safari and Chrome for Android.

Unfortunately, support for numbered versions of IE is essentially zero, with no support for IE < 10 and only two directives supported in IE 10+.

All of the above supported browsers support CSP 1.0, with 100% support for 2.0 in Webkit/Blink browsers, and partial, but very good, support in Firefox. CSP 2.0 has all the features of 1.0, with several additional directives and support for inline `<script>` and `<style>` tags (see [Caveats](#caveats)).

## Usage
CSP is straigtforward to implement, and supports providing a policy server-side [via HTTP header](#server-side-implementation) or client-side via a [`<meta>` tag](#client-side-implementation).

#### Policies
The most important aspect of CSP is the policy itself, which is written as a string of **directives**. Directives describe how the browser should handle loading different content types. These directives are represented as a `;` delimited key-value pair.

The values in this pair can either be **keywords**, **schemes**, **mime-types**, or **urls**. Keywords are always enclosed in single quotes, while all other values are left unquoted. Multiple values may be supplied in a single directive, they are always separated by a space.

A comprehensive list of values and directives can be found at the [Content Security Policy cheatseet](https://content-security-policy.com/).


In general, your policy will restrict loading of content to known
sources, and a usable sample policy could look something like this:

`"default-src 'self'; script-src https://facebook.com; child-src https://youtu.be; object-src 'none';"`

Let's break this down:

```
  default-src self : Only load content from the current
    origin, exluding subdomains

  script-src https://facebook.com : Allow
    scripts (e.g. `Like` button code) from Facebook
    to load over HTTPS

  child-src https://youtu.be : Allow embedded content
    from YouTube over HTTPS

  object-src none : Prevent Flash content from loading
```

The `default-src` directive should always be defined! This directive acts as a fallback for all other `*-src` directives that are not defined within in the policy or are unsupported.

It might be useful to test your policies before letting them loose on your users. To do this, use the `Content-Security-Policy-Report-Only` HTTP header. Combined with the reporting information in the next section, you can monitor the kinds of content your user's are encountering and tweak the your policy accordingly.


#### Reporting
CSP can also be configured to send reports to an endpoint you control when content that violates your policies is encountered.

To do this, use the `report-uri` directive, passing it a fully qualified URI, e.g. `https://my-public-site.gov/reports/csp`. Now, each time content from an invalid source is encountered, your browser will POST a JSON payload to the provided URI.

Here is an example, from the MDN article linked in [Further Reading](#further-reading)

```
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
  }
}
```

This data can of course be mixed with other request metadata, like IP address or browser User-Agent, and fed into whatever log processing system your app has in place.

Reporting can only be enabled via HTTP header, not inside a `<meta>` tag!

### Client-side Implementation
To implement CSP on the client, add a `<meta>` tag to your web site's `<head>`. Your policy will be a doubled-quoted string placed inside the `content` attribute of the tag.

`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">`

You're done!

### Server-side Implementation
To include a CSP headers on the server, simply return a `Content-Security-Policy: {my-policy-string}` HTTP header in your web responses.

<br>

Although a basic CSP policy is relatively easy to write, you might find it easier to use a server-side library to define your policies declaratively. Some well-known and actively maintained libraries include:

* [secureheaders](https://github.com/twitter/secureheaders), a **Ruby** gem written and maintained by Twitter
* [helmetjs](https://github.com/helmetjs/helmet), middleware for **Express.js**
* [django-csp](https://github.com/mozilla/django-csp), maintained by Mozilla.

Note that this list is neither exhaustive nor prescriptive. These libraries are included in this guide to give you a sense of the capabilities that might be included in a library that works with the CSP header.

## Caveats
A major caveat is that CSP, by default, prevents developers from adding inline `<style>` and `<script>` tags, and from specifying JavaScript behavior or CSS `style` attributes directly on DOM elements. This isn't a bad thing, as current best practices in front-end development discourage the use of these patterns.

However, there are scenarios in which you may want to use an inline content tag, such as including a Google Analytics initialization script. For these cases, CSP allows the user to supply a `nonce` attribute to the inline script: `<script nonce=GHDGsfsd83hfdfFD3>...javascript here...</script>`. Then, in your policy, `script-src 'nonce-GHDGsfsd83hfdfFD3'`. Nonces must be regenerated on each request. Additionally, CSP 2.0 allows you to generate a SHA hash of the script content, and pass that to the `script-src` directive as `'sha-{content-sha}'`. You don't need to use a `nonce` attribute if your content is hashed.

Another potential issue is third-party libraries that automatically inject JavaScript and CSS into your HTML. If your project utilizes a library that does this, the only guaranteed solution is
to use the `unsafe-inline` value when setting the `script-src` directive; this obviously defeats the purpose of having a CSP for your JavaScript.

If you must load external scripts inline and are not allowed to use the `unsafe-inline` keyword, you could also make a SHA hash of the script being included, and whitelist that in your content security policy.

This technique will allow those scripts to load, with the following caveats:

* Each the time the third-party script changes, a new hash will have to be computed, and your policy's `script-src` whitelist will need to be updated
* Inline the SHAs of multiple scripts adds bloat to the policy, and increases the number of bytes needed to transmit the header to the browser.

As each project has its own needs, you should always perform your own research on a per-project basis to determine the best way to handle third-party scripts!


## Further Reading

The information contained is this guide is only a primer, and was sourced from the following articles:
- [MDN CSP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Google CSP Guide](https://developers.google.com/web/fundamentals/security/csp/)
- [caniuse.com CSP Support](https://caniuse.com/#search=Content%20Security%20Policy)
- [CSP Quick reference guide](https://content-security-policy.com/)
- [Wikipedia reference](https://en.wikipedia.org/wiki/Content_Security_Policy)

_the following links are fairly old, but pretty short and worth skimming_
- [Twitter CSP blog post](https://blog.twitter.com/engineering/en_us/a/2011/improving-browser-security-with-csp.html)
- [GitHub CSP blog post](https://blog.twitter.com/engineering/en_us/a/2011/improving-browser-security-with-csp.html)
