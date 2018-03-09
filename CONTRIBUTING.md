## Building the guide locally
The front end guide is built on the [USWDS Jekyll theme gem](https://github.com/18F/uswds-jekyll).

To run it locally, clone this repo and then:
1. Install [http://bundler.io/](Bundler) if you don't already have it: `gem install bundler`
1. Run `bundle install`.
1. Run `bundle exec jekyll serve`.

## Submitting a pull request
We welcome pull requests! Here's how to submit a PR:
1. The guide publishes the `master` branch, so make sure you have the latest version of it.
1. Create a new branch named in a way that describes your changes, optionally prefixed with your initials. Example: Heather Billings wants to create a PR that adds guidance around atomic CSS. She calls her branch `hjb-add-atomic-css`.
1. Push your branch and open a work-in-progress (WIP) PR as soon as you have commits, rather than waiting until you feel you are finished. **A WIP PR includes `[WIP]` in the title and contains a list of unfinished tasks.** WIP PRs allow for early feedback and help prevent wasted time. It also allows other guild members to pick up and work on pull requests that have been abandoned for whatever reason.
1. When your PR is ready for review, remove `[WIP]` from the title. This lets us know it's game time!
1. A PR must pass the automatic Federalist build check in order to be merged into master.
1. A PR must have one `approved` review in order to be merged into master. Any guild member with write access should be able to approve and merge PRs. (You cannot approve your own PR, sorry!)

## Submitting issues
Don't have time to file a pull request, but want to flag something? [Open an issue](https://github.com/18F/frontend/issues) stating what you think we should add or change and why, and we'll discuss it as a group.

## Public domain

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
