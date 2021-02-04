---
title: Remediating vulnerable dependencies
sidenav: security
sticky_sidenav: true
---

Your application should have dependency scanning to ensure that the
libraries your code relies on do not have vulnerabilities within them.
For more on how to set up vulnerability scanning see the
[Before you ship
guide<](https://before-you-ship.18f.gov/security/static-analysis/#dependency-analysis)’s
suggestions.

In operating a system with a dependency scan you’ll find that
vulnerabilities do pop up in your dependencies, and this is a guide on
how to remediate those vulnerabilities to keep your application secure.

The following suggestions are in the order in which you would try these
strategies.

## Apply a patch

Oftentimes when your dependency scanner finds a vulnerability, it will
provide a suggested patch to remediate the vulnerability. If the scanner
doesn’t provide a patch a quick search of the package’s documentation
may also reveal a patch that you can use. In this case, create a new
branch via git version control and ensure that your tests pass; that the
application still runs as expected; and finally, run your code with your
continuous integration suite. If there are unexpected behaviors or
failing tests, you may have to refactor your code to incorporate the
patch. Once you’ve applied the patch and refactored it, you can submit a
pull request to fix your application.

## Use selective resolutions

In some cases, your dependency scanner will not be able to provide an
immediate patch but it will indicate a package version in which the
vulnerability is fixed. In some package managers such as \`yarn\` you
can pin your dependency to the fixed version by using a
“[selective
resolution](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/)”.
This will bump up versions that are children of top level dependencies.
If you are using \`npm\` you can install
\`[<span class="underline">https://www.npmjs.com/package/npm-force-resolutions</span>](https://www.npmjs.com/package/npm-force-resolutions)\`
to draw the same behavior.

## Check if it is a false positive

If there is no existing patch or version update that will remediate the
vulnerabilities, you may want to investigate the offending code and see
if your use of that library would even trigger that part of the code. If
it does not, the vulnerability may be a false positive. If you can
confirm this, you should document this — ideally in your dependency
scanners configuration (ex. .snyk) or somewhere within your code
repository.

## Pull upstream

In cases where the maintainer of a package has not yet resolved the
security vulnerability and you are able to patch it yourself, fork the
original package to fix it locally and then create a pull request in the
package repository. Not only does this help fix the security concern,
but also promotes good open-source culture. Because this requires the
maintainer of the package to review and accept your pull request, this
strategy may take longer to complete. If your pull request is accepted,
be sure to update your dependency file back to the main distribution of
the dependency.

## Accept the risk

If the risk is low, take a look at where the vulnerability resides in
your dependency tree. If the vulnerability is associated with a
development dependency rather than with public code, the risk associated
with the vulnerability might be acceptable (in the short term).
