---
title: Automated Testing
sidenav: tools
permalink: /tests/
sticky_sidenav: true
---

There are many different types of automated testing, which all have
separate roles to play. Ideally, automated testing can be run locally
as well as part of a continuous integration workflow. 
## Validating HTML output

### Ruby {#html-output-ruby}

[HTMLProofer](https://github.com/gjtorikian/html-proofer) is the most common
tool in use for ruby projects at TTS for validating HTML output. It is used in our 
[guides](https://18f.gsa.gov/guides/) to ensure that internal links are not
broken, but it can also be used for a broad range of image, link, and script
tests.

HTMLProofer can be run on the command line directly, as a 
[Rake task](https://github.com/18F/isildurs-bane/blob/699502eeb374bf3414c1336290cb622e9a0f8847/Rakefile)
or as part of a [CI action](https://github.com/18F/handbook/blob/cf5a76af5a1463496cd7eb1a14fdc7a422aa5ae6/.circleci/config.yml#L58-L60).

**Warning**:
Some government websites are very sensitive to crawlers, and so testing external government links
can cause HTMLProofer to fail with an opaque error like `1 No Error`. If you are testing external
links in a CI/CD pipeline, you may regularly have to manually check errors to ensure that they are
valid.  When a link is actually broken, HTMLProofer will display a diagnostic message about where
the bad link originated.