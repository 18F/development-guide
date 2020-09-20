---
title: Ruby Guide
sidenav: languages
---
This is a **WORK IN PROGRESS**. Help us make it better by
[submitting an issue](https://github.com/18F/development-guide) or joining us
in the [#ruby](https://18f.slack.com/messages/ruby/) channel!

## Ruby Guide
A guide for writing and maintaining Ruby and Rails applications

### Style Guide

Follow the [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide) and
enforce it via static analysis tools such as [Code Climate] and [Rubocop]. You
can copy the [recommended Rubocop configuration](rubocop.yml) in your Ruby
project and make any changes based on your team's preferences.

Note that the Rubocop configuration linked above only includes settings that
differ from the default configuration. We tend to agree with most of the
default settings.

Whenever a `Style` Rubocop setting provides multiple options, at least one
option must be chosen. A cop that supports different styles must never be
disabled outright. The point is to pick one style and use it consistently.

[Code Climate]: https://codeclimate.com
[Rubocop]: https://github.com/bbatsov/rubocop
