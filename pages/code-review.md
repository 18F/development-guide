---
permalink: /code-review/
title: Code Review
---

> A friendly guide for reviewing code--and not each other--at 18f.

(Forked from the excellent Consumer Financial Protection Bureau
[guide](https://github.com/cfpb/front-end/blob/master/code-reviews.md)). This
is a **WORK IN PROGRESS**. Help us make it better by
[submitting an issue](https://github.com/18F/development-guide) or joining us
in the [#wg-code-reviews](https://18f.slack.com/messages/wg-code-reviews/)
channel!

## Why reviews?

Code reviews are incredibly important step to the development process. Our
goals when reviewing code are to:

- expose bugs before they make it to production;
- ensure a consistent quality in the codebase;
- create an environment for sharing knowledge and developing skills;
- cross-pollination of debugging skills when problems arise;
- cultivation of the ability to critique one’s own code more strongly;
- encourage open communication between the entire team.

## Potential obstacles to be mindful of

If you are attempting to establish code reviews as a part of your team's or
organization's workflow, there are several obstacles you might run into:

- Code reviews require intense concentration when they are to be done right,
  which in turn requires additional time that will have an impact on story
  effort estimates in a sprint.
- Introducing the idea of writing tests and requiring them in order for a code
  review to pass will take time and commitment from all team members if they
  have not already bought into the benefits of TDD.
- Additional training may be needed for folks who are unfamiliar with
  what linters and/or testing harnesses.
- Writing a style guide that is firm but reasonable requires time and a strong
  commitment from all team members to adhere to and hold each other accountable
  for.
- Maintaining a well-organized code base requires strict discipline from all
  team members.

In order to overcome these obstacles be sure to maintain a positive but
persistent attitude around the benefits of code reviews.  Continue to work with
your colleagues and managers to demonstrate the benefits of code reviews by
exhibiting patience with them and finding ways that showcase how code reviews
can have a direct impact on improving their work.

By maintaining a positive attititude, leading by example, and demonstrating an
honest willingess to work with others you will begin to see people come
around to the idea that code reviews are beneficial for everyone involved.

## Tips for a successful review

For a code review to be successful, we all need to be on the same page. To
help accomplish this, everyone should follow these tips.

### For everyone

- Remember that we're reviewing the code, not the author. Nothing should be
  given or taken taken personally.
- Understand the difference between "this isn't how I would do it" vs.
  "this is fundamentally wrong and needs to be addressed."
- There is often more than one way to approach a solution. Discuss tradeoffs
  and reach a resolution quickly.
- Ask questions rather than make statements. ("What do you think about...?")
- Ask for clarification if the code or comments are unclear. ("I didn't
  understand. Can you please clarify?")
- Avoid selective ownership of code. ("mine", "not mine", "yours")
- Avoid using terms that could be seen as referring to personal traits.
- Be explicit, people don't always understand your intentions online.
- Be humble. ("I'm not sure - let's look it up.")
- Don't use hyperbole. ("always", "never", "endlessly", "nothing")
- Don't use sarcasm.
- Keep it real. If emoji, animated gifs, or humor aren't you, don't force them.
  If they are, use them with aplomb.
- Talk offline if there is too much back and forth. Post a follow-up comment
  summarizing the discussion.
- Praise team members when they create exemplary work or suggestions.

### For code submitters

- Link to the code review from the originating task/issue, if applicable.
- Remember that the code isn't you, don't get defensive when a reviewer is
  critical of the code; instead, look at it as a learning opportunity.
- Seek to understand the reviewer's perspective.
- Try to respond to every comment.
- Be grateful for the reviewer's suggestions. ("Good catch, fixing in a4994ec")
- Explain why the code exists. ("We need to work around these existing
  patterns")
- Extract out-of-scope changes and refactorings into future tasks/issues.
- Push commits based on earlier rounds of feedback as isolated commits to the
  branch. Do not squash until the branch is ready to merge. Reviewers should be
  able to read individual updates based on their earlier feedback.

### For code reviewers

- Understand why the code is necessary (bug, user experience, refactoring)
- Seek to understand the author's perspective.
- Clearly communicate which ideas you feel strongly about and those you don't.
- Identify ways to simplify the code while still solving the problem.
- Offer alternative implementations, but assume the author already considered
  them. ("What do you think about such-and-such here?")
- Sign off on the pull request with a :thumbsup: or "Ready to merge" comment.
- Wait to merge the branch until it has passed Continuous Integration testing.
  (TDDium, TravisCI, etc.)

### Who merges

There's lively debate over whether the code author or reviewer should merge
the pull request. Follow the idioms that your team has set; if none are
present, discuss until you have a consensus. Write that down to resolve the
issue quickly in the future.

## Submitting code

Before seeking a review, you should be able to check off each of the following:

    - [ ] Changes are limited to a single goal (no scope creep)
    - [ ] Code can be automatically merged (no conflicts)
    - [ ] Code follows the standards laid out in this playbook
    - [ ] Passes all existing automated tests
    - [ ] New functions include new tests
    - [ ] New functions are documented (with a description, list of inputs,
          and expected output)
    - [ ] Placeholder code is flagged
    - [ ] Visually tested in supported browsers and devices
    - [ ] Project documentation has been updated (including the "Unreleased"
          section of the CHANGELOG)

### Opening a PR

Once your code meets the checks above, open a Pull Request for your new
feature or bugfix. Remember that the more information you provide to reviews,
the more context they will have. This leads to faster reviews, and less back
and forth between everyone.

CFPB has published a nice [PR Template](https://raw.githubusercontent.com/cfpb/front-end/master/pr-template.md)
which might make this easier. You can also create a [Bookmarklet based on this
template](https://gist.github.com/cfarm/b9b638943a2eea52a3a8).

## Reviewing code

When reviewing code, you should be able to check off each of the following:

    - [ ] Do the changes address the project's needs?
    - [ ] Do the changes respect the project's existing style?
    - [ ] Does the new code avoid reproducing existing functionality?
    - [ ] Are functions/classes as simple as possible?
    - [ ] Is the code as efficient as possible?
    - [ ] Is the usage of each function/class clear?
    - [ ] Have edge cases been considered and tested for?
    - [ ] Does the code represent a logical unit of work?
    - [ ] Are there any glaring syntax errors that were missed?
    - [ ] Are language constructs being utilized properly?
    - [ ] Are there no unecessary premature optimizations?
    - [ ] Are any frameworks/libraries being used leveraged properly?
    - [ ] Are the changes clean and would they pass through a linter?
    - [ ] Are there useful comments/documentation where needed?
    - [ ] Is the commit message well-formed with succinct details about
          what the change is intended for?

In adition to this checklist, you should also pull down the actual changes
and run them manually to put them through their paces.  Does the code
actually do what you expect it to do after reading through it?

Use this bookmarklet code to add this checklist to your Pull Request comments:
[Code Review Checklist](https://gist.github.com/cfarm/a4174fe6f775353a3115)

## Credits

- [CFPB's Frontend Code Review Guide](https://github.com/cfpb/front-end/blob/master/code-reviews.md).
- [Code Review in the Lab](http://mozillascience.github.io/codeReview/intro.html)
- [GitHub Code Reviews](https://blog.codeship.com/github-code-review/)
- [thoughtbot Code Review Guide](https://github.com/thoughtbot/guides/blob/master/code-review/README.md)
- [Effective Code Reviews without the Pain](http://www.developer.com/tech/article.php/3579756/Effective-Code-Reviews-Without-the-Pain.htm)
