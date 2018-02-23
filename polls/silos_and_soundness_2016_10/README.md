Many of the issues we care about the most are very difficult to quantify. In
this survey, we asked three questions meant to gauge how engineers felt about
knowledge silos and the technical soundness of their projects. We invited all
of engineering (and their engineering-minded co-workers) to fill out the
survey via email and facilitation groups, which translates to roughly 70
potential submitters; 30 submitted answers, though all questions were
optional. See data below for further breakdowns.

## Learning from other projects

![I have learned from the technical experience of projects I have no directly
worked on. 0 (Strongly Disagree) to 10 (Strongly Agree). Votes: 1x1, 3x3, 1x4,
3x6, 8x7, 7x8, 2x9, 5x10](question1.png)

Here, we tried to get a sense of how siloed developers felt from their
colleagues. On a 0 to 10 scale, we averaged just over 7. As you can see from
the graph, however, the data's scattered (standard deviation is around 2.3).
In the 17 written responses, folks appreciated having multiple avenues for
learning, working in the open (which allows us to look up completely unrelated
projects), and our [tech talks](https://github.com/18F/tech-talks). Others
noted that while we have _exposure_ to many topics, we rarely get to deep dive
into another project's technology. The two biggest problems surfaced here were
around time management (particularly bill-ability for these learnings) and a
desire to hear about more mistakes and retrospectives.

We're hoping that the following practices will help resolve these issues,
particularly for the pocket of engineers on the low end of the scale.

* The ability to use continuing ed funds for
  [self-study](https://handbook.18f.gov/professional-development-and-training/#self-directed-study-for-engineers)
* More [architecture reviews](/architecture_reviews)

We're also exploring

* Additional project review systems
* Additional, less polished tech-talks
* Engineering-wide best practices discussions
* Standardizing public retrospectives for our projects

## Where to get advice

![When I encounter a technical challenge, I know who/where to ask for advice.
0 (None of the time) to 10 (All of the time). Votes: 1x5, 3x6, 6x7, 11x8, 5x9,
4x10](question2.png)

With this question, we wanted to know if folks felt comfortable around
resources for solving technical problems. We averaged just about 8 on this
question, forming a nice bell curve (stdev around 1.3). In the 19 written
responses, we saw Slack (and language channels) mentioned repeatedly; folks
also noted that they would go to individuals who had domain or professional
expertise. A few respondents also mentioned pairing as a solution. Problems
raised in this portion were around delayed responses in Slack ("crickets"), a
desire for a skill inventory, and concerns of how to log related time.

Immediate steps:

* The [functional
  leads](https://handbook.18f.gov/engineering/#functional-leads) are meant as
  a resource for this sort of advice, either directly or by redirecting
* Though the asynchronous nature of Slack should be respected, lack of
  response shouldn't be interpreted as rejection. Bring the topic up for
  conversation again later and someone'll bite.
* Tock advice: if seeking information for a project, you should be billing
  that project. If providing feedback and ideas outside the scope of your
  projects, you're contributing to the 18F workplace and hence should Tock to
  whatever's most appropriate of General, Prof. Dev, Guilds, etc.

Longer term:

* We're re-evaluating the skills inventory and how it relates to similar
  systems in Float

## Project status

![I think my project(s) is/are technically sound. 0 (Strongly Disagree) to 10
(Strongly Agree). Votes: 1x2, 1x3, 1x4, 1x5, 1x6, 7x7, 8x8, 5x9,
4x10](question3.png)

Here we averaged about 7.5 with a stdev around 2; as you can see, we're top
heavy, with the majority of respondents seeing their project as relatively
sound but a long tail of concerns. In the 18 written responses, the phrase
"there's always room for improvement" appeared several times. We admitted to
pain points around test coverage, monitoring, integrating with systems like
cloud.gov, and code complexity, but overall felt that we _know_ where those
pain points lie. This dovetails with concerns around project hand-offs and
losing that knowledge. One responder (an excellent JS coder) suggested we
standardize our back ends further, particularly preferring Rails and Django
and dropping Node. The other major problem cited was around getting time to
circle back and clean projects up. On a positive note, one commenter wrote,
our projects are "by far the most technically sound portfolio I've ever seen".

Immediate guidance:

* We'll be reaching out to the five folks on the tail end of that curve,
  except for the anonymous poster :) Please reach out to the functional leads
  or your facilitators if you feel your project heading the wrong direction
* Regarding time management, know that writing proper test coverage,
  code reviews, and monitoring are all part of 18F's product -- that quality
  is what we're selling. While we shouldn't be receiving pressure to skip
  these steps, speak with your facilitator if you need support in this area.

Future plans:

* Several people are focusing their time on project hand-offs. We're hoping to
  have better guidance and examples in the near future
* Balancing standardization and flexibility is difficult, but we should have
  that discussion. Keep an eye out for an upcoming discussion around
  centralizing on Rails and Django!
