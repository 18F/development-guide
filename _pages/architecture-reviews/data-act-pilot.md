---
title: 'DATA Act Pilot: Simplicity is Key'
sidenav: approach
sticky_sidenav: true
---

## TL;DR

* Select an MVP target; ignore tasks which don’t meet that
* Design for the least capable of your users
* Validation logic should be maintainable outside the source code

## Purpose

18F has the pleasure of employing a plethora of truly great software
developers. Unfortunately, our project-focus tends to silo our engineers from
each other. Rather than wait for knowledge to naturally diffuse through team
changes, we can kick-start transfer by highlighting some of the more
interesting design decisions from existing projects. Today, we’ll focus on the
(completed) DATA Act pilot. Importantly, though that project has finished,
this is _not_ meant to be a full retrospective or post-mortem; we’ll be
focusing on technical decisions.

As context, the recently minted DATA Act requires agencies generate better,
public records around money appropriated from Congress. Treasury has only
recently (as of April, 2016) released the final, XBRL (a schema of XML) -based
data standard. However, they did not want delays in creating the
standard--which caused policy concerns, not technical concerns--to delay the
start of agencies’ implementation work. The _real_ hard work for agencies
would be around connecting data sources which haven’t been joined before, not
around formatting and syntax. Unfortunately, when the agencies hear “XBRL”,
they think “contractors”. Rather than planning out how to combine data in
house, they plan how to pay someone to generate the appropriate file format.
This pilot aimed to remove this excuse by providing a simple interface for
agencies to verify that they could combine the data.

## Minimum viable product

While some agencies debated how to make a “data lake” and vendors assembled
sales teams to sell DATA Act solutions, the engineers on this pilot focused on
a minimal viable product. It would contain two endpoints: one to display a
form and one to accept input and report validation errors. There would be no
file storage, no authentication (aside from minimal Basic Auth), and no
front end build process. They would deploy on cloud.gov and selected a
familiar, Flask stack. The team anticipated writing “throwaway” code, a simple
demonstration that such an application _could_ exist; they wanted to create
that demonstration quickly with few resources. Ultimately, they were quite
successful in achieving this goal. The application has been a routine
reference point during DATA Act conversations long after the pilot ended.

The proof-of-concept focus had its drawbacks, however. While the team argues
that actively ignoring certain best practices was the right choice for many of
their decisions, the lack of test coverage would be painful as the project
wound down. For example, during this period, they realized that the “happy
path” (with no validation errors) caused the application to explode; they had
only (manually) run through a handful of scenarios while testing. The team
described viewing code as “not real” to be a trap. Their small code base
quickly grew larger than anticipated and their early technical decisions would
have long lasting ramifications.

![Diagram matching above description]({{site.baseurl}}/architecture-reviews/data-act-pilot/data-act-diagram.png)

## Simplicity avoids scary

One of the earliest decisions the team grappled with centered around the data
format they would receive from agencies. XML/XBRL was off the table as even a
simpler schema would surely trigger the CIO search light. After an initial
attempt using Protocol Buffers (“a terrible decision”), they realized they
needed something that the folks responsible for the data would understand.
Comma Separated Values fit the bill; they aren’t intimidating and are easy to
export from existing spreadsheet software and database applications. With
them, agencies could focus on _finding_ the data, not encoding it.

Relevant data would be submitted as four separate CSVs, each listing entries
for one type of data. Think of it as a _very_ rudimentary (and therefore
approachable) set of four RDMS tables, complete with foreign keys. Rather than
defining a schema (or waiting for the official schema to be complete), the
team generated example CSVs to serve as templates. These were made available,
along with the codebase, on GitHub, and would be referenced long after the
pilot completed. By defining a set of validations over these files rather than
the too-difficult-to-generate-and-not-completely-defined XML schema, agencies
could receive feedback about their data _now_. Further, in the final sprints
of the pilot project, the team implemented a simple conversion between the CSV
files and the “final” XML/XBRL format, meaning that agencies could continue to
work with a format they understood.

## Validation rules

Two basic schools of thought dominate discussions of data standards. One holds
that data validation should be defined along with the standard. Database
schemas include constraints, XML files can be validated against an XSD; by
using the sophisticated rules of these and similar languages, one can
_prevent_ bad data from entering the system. The second camp  argues that the
standards are constantly evolving and need to remain flexible, that the
validation rules are akin to unit tests for the schema. Further, the language
of validation isn’t rich enough to support all of the rules needed. As we will
be writing validation rules outside of the data format, why not keep the two
separate from the beginning?

With experience of similar problems in industry and knowledge that the
XML/XBRL schema was still in flux, the team aligned itself with the second
camp. The rules shouldn’t be part of the schema (and couldn’t easily, given
CSV input), but they also didn’t want validation logic to live entirely in
Python. Requiring developer intervention for all edits would be quite costly,
particularly as the rules would be changing over the course of the pilot. If
CSVs were a good common denominator for accepting data, perhaps they would be
a good format for defining simple validation rules?

| fieldname | required | data_type | field_length | unique |
| --- | --- | --- | --- | --- |
| AwardandModificationEntryID | False | int | 25 | False |
| PlaceOfPerformanceEntryNumber | False | int | 25 | False |
| ... | ... | ... | ... | ... |

This approach proved to be quite handy. It enforced a very clean separation
between “business logic” and the rest of the application. It also meant that
maintaining these rules as the formal specification changed would be very
easy. Editing rules was so easy, in fact, that our agency partner could
_maintain the rules themselves_; they’ve modified these rules over time to fit
new expectations. Additional fields could be added and rules applied to them
all by simply editing a spreadsheet.

Of course, this scheme doesn’t scale forever. Certain requirements can’t be
easily described this way, but these requirements were not encountered over
the course of the pilot. The team says that they would have tried to tackle
more complex validations in a similar manner, defining the new rule via CSV
descriptions. They gained so much value from the approach that they’d work
hard to extend it to new problems. When asked how these types of problems are
handled in industry, the team pointed to Google’s use of Prolog as a rule
engine.

## Conclusion

Though this pilot had a very tight focus, it offers several interesting
technical decisions which are worth sharing. Determining, at the outset, what
a minimum viable product looked like and avoiding “production-ready” concerns
like server load, malicious users, etc. allowed the team to exceed their
client’s expectations in short order. Building for a least common denominator
(CSVs) gave the project reach (more users could participate) and reduced code
complexity. Pulling out validation rules into a separate, easy-to-modify
format made the product flexible and simple to maintain. Do any of these
principles make sense for your project?

---

This document is the distillation of an architecture discussion between Aaron
Borden, Jacob Kaplan-Moss, CM Lubinski, Micah Saul, Marco Segreto, and Becky
Sweger. For more information about the DATA Act pilot, see
https://github.com/18F/data-act-pilot, particularly their
[screencasts](https://github.com/18F/data-act-pilot/tree/master/assets/screencast).

