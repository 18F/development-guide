---
title: Content Security Policy
permalink: /security/content-security-policy
layout: docs
sidenav: security
---

# Content Security Policy

## What is Content Security Policy?
Content Security Policy (referred to as **CSP** in the rest of this guide) is a security measure designed to mitigate the likelihood of Cross-Site Scripting (XXS) attacks and data injection.

It can be enabled on either client- or server-side, and is unobtrusive in unsupported browsers — that is, browser that don't support CSP will ignore it's directives and load the page as normal.

CSP is supported by the current versions of **all modern desktop browsers**: Safari, Chrome, Firefox, and IE Edge. It is also supported in recent versions iOS Safari and Chrome for Android.

Unfortunately, support for numbered versions of IE is essentially zero, with no support for IE < 10 and only two directives supported in IE 10+.

All of the above supported browsers support CSP Level 1, with 100% Level 2 support present in Webkit/Blink browsers, and partial, but very good, support in Firefox. The usage section contains more detailed information about the differences between the levels.

## Usage
CSP is straigtforward to implement, and supports providing a policy via HTTP header or `<meta>` tag.

The most important aspect of CSP is the policy itself, which is written as a string of **directives**. Directives describe how the browser should treat different content types. They are represented as a `;` delimited key-value pair.

For example, a basic directive to control where your site's `src` (e.g. images, stylesheets, and JavaScript) content must be loaded from is written as `"default-src: https://*.federal-site.gov"`

In general, your policy will restrict loading of content to known
sources, and a usable sample policy could look something like this:

`"default-src 'self'; srcipt-src https://facebook.com; child-src https://youtu.be; object-src 'none';"`

Let's break this down:

```
  default-src self : Only load content from the current
    origin, exluding subdomains

  script-src https://facebook.com : Allow
    scripts (e.g. `Like` button code) from Facebook
    to load over HTTPS

  child-src https://youtu.be : Allow embedded content
    from youtube over HTTPS

  object-src none : Prevent any flash content from loading
```

A full list of available directives and keywords is outside the scope of this guide, but is available in the excellent Google CSP guide linked in the [Further Reading](#further-reading) section.

<!-- !!add info about reporting¡¡ -->
<!-- not sure yet where the level info goes -->


### Client-side Implementation
To implement CSP on the client, add a `<meta>` tag to your web site's `<head>`.

`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">`;

### Server-side Implementation
Similarly, to include CSP on the server, simply return a `Content-Security-Policy: {my-policy-string}` HTTP header in your web responses.


Although a basic CSP policy is relatively easy to write, developers may wish to use a library to assist them with defining their policies in a declarative way on the server. Two of the most well known libraries are [secureheaders](https://github.com/twitter/secureheaders), a `ruby` gem written and maintained by Twitter, and `express.js` middleware [helmetjs](https://github.com/helmetjs/helmet).

## Caveats
The biggest caveat is that CSP, by default, prevents the developer from adding inline `<style>` and `<script>` tags, and from specifying JavaScript behavior or CSS `style` attributes on DOM elements. This isn't a bad thing, as all current best practices in front-end development discourage the use of the aforementioned patterns.

However, there are scenarios in which a developer may want to include an inline content tag, such as including a Google Analytics initializion script. For these cases, CSP allows the user to supply a `nonce` attribute to the inline script: `<script nonce=GHDGsfsd83hfdfFD3>...javascript here...</script>`. Then, in your policy, `script-src 'nonce-GHDGsfsd83hfdfFD3'`. Nonces must be regenerated on each request. Additionally, CSP Level 2 allows the developer to generate a SHA hash of the script content, and pass that to the `srcipt-src` directive as `'sha-{content-sha}'`. This eliminates the need for a `nonce` attribute.

## Further Reading

The information contained is this guide is only a primer, and was sourced from the following articles:
- [MDN CSP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Google CSP Guide](https://developers.google.com/web/fundamentals/security/csp/)
- [caniuse.com CSP Support](https://caniuse.com/#search=Content%20Security%20Policy)
- [CSP Quick reference guide](https://content-security-policy.com/)

_the following links are fairly old, but pretty short and worth skimming_
- [Twitter CSP blog post](https://blog.twitter.com/engineering/en_us/a/2011/improving-browser-security-with-csp.html)
- [GitHub CSP blog post](https://blog.twitter.com/engineering/en_us/a/2011/improving-browser-security-with-csp.html)
