---
title: Choosing a Web App Architecture
sidenav: tools
sticky_sidenav: true
---

The goal of this guide is to help you decide how to approach a web application’s architecture, driving towards simplicity.

Simpler approaches involve:

- **fewer layers of technology**
- **using stable technology over cutting-edge**, and
- **less computation or no computation when possible**

### Why push for simplicity

Government software projects often face tight budgets, are used long-term, and have a broad user base with diverse needs. Because of these factors, simpler is better.

- **Cost-effectiveness**: Government agencies need to carefully steward public funds. Because budgets for software development in government can be tight, the technology we buy and build should be cost-efficient as well as high-quality. We’ve found that simpler UI technologies are more cost-effective to build and maintain, and easier to understand for members of the public who want to contribute.
- **Maintainability**: Government is long-term, so we want government software to last. We want to be kind to the future maintainers of our software and leave them with the minimum possible complexity to maintain.
- **Accessibility**: As government employees we serve the public, so the websites we build must be highly accessible to the public. The more complexity involved in building UI views, the more work it takes to build an accessible site.

### How to choose an approach

How much complexity does your web application need to include? That depends on what kind of features it requires.

- If you can make it a static site, you should.
- If you can’t, it should probably be a server-rendered app.
- If your use case requires a bit of client-side interactivity, use the above options with a bit of JavaScript.
- If your use case requires complex client-side interactivity, then you may need a single-page application.

<ins>Web applications can and do shift approaches over time.</ins>

Many web apps begin their life cycles with server-side rendering only, and add more client-side functionality over time in response to user behavior. Consider whether your application could initially launch as a server-rendered app, with the potential to add more client-side functionality based on user behavior.

See below for examples and heuristics to help you decide which architecture could make the most sense for your project as a starting point:

### If you can make it a static site, you should.

_When thinking about a static site, you might use words like: [Jekyll](https://jekyllrb.com), [Hugo](https://gohugo.io), [Federalist](https://federalist.18f.gov), static HTML._

#### Benefits to this approach:

- Simple to keep running (low maintenance cost)
- Can use Federalist to outsource deployment of the site
- Quick path to ATO, or no ATO at all since Federalist has its own ATO
- Automatic accessibility testing is extremely straightforward
- Searching with search.gov/search engines is easy

#### When this might be the right fit:

- A site used mostly to publish static content, such as public-facing agency information, articles, or press releases
- An informational handbook or guide
- A blog

#### When you might need something more complex:

- When your app needs authentication, user roles or permissions
- When your app needs to draw from live data feeds or APIs
- When your app needs to handle sensitive data or PII

### If you can’t, it should probably be a server-rendered app.

_When thinking about a server-rendered app, you might use words like: [Django](https://www.djangoproject.com/), [Rails](https://rubyonrails.org/)._

#### Benefits to this approach:

- Stable, tried-and-true tooling
- Only one set of development skills needed, as opposed to separate back-end and front-end development skills
- Faster development velocity and lower costs to build and maintain than an equivalent project with separate front-end and back-end apps
- Can use tools like [Cloud.gov](https://cloud.gov)
- Easy to see if it’s working (compared to purely client-side functionality) if status codes returned are 200
- Changes to data are easy to manage using tools like Admin Interfaces
- Custom implemented searching with SQL-y endpoints
- Adding basic forms with no client-side interactivity are a breeze
- Client doesn’t get out of sync with the server, as it’s served from the response.

#### Drawbacks to this approach:

- Applications with servers and databases will need their own ATO
- Deployment is more complex and requires more skills to maintain
- Zero downtime deployments are more complex

### If your use case requires a bit of client-side interactivity, use the above options with a bit of JavaScript.

_You might use words like: [Stimulus](https://stimulus.hotwire.dev), [jQuery](https://jquery.com), Plain JavaScript._

#### Benefits to this approach:

- Accessibility testing is relatively straightforward
- Interactivity that doesn’t require state management, like animations or visual graphics
- Because memory is dumped between pages, potential memory leaks or tricky to diagnose issues are less impactful
- Leverages the browser cache
- Can use more than one JavaScript framework, which may be useful for project transitions
- Leaves room for more flexible decisions for UI down the road

#### Drawbacks to this approach:

- Forms with complex state are harder to manage
- Build/deployment includes both server-side build patterns and client-side build patterns
- Hard to know where something is rendered
- No clear conventions, no standard way to build them.
- Can quickly turn into a ball of JavaScript with mixed frameworks
- Generally uses two (or more) package managers

### If your use case requires complex client-side interactivity, then you may need a single-page application.

_You might use words like: [React](https://engineering.18f.gov/javascript/frameworks/#react), [React Router](https://reactrouter.com), [Redux](https://redux.js.org), [Angular](https://engineering.18f.gov/javascript/frameworks/#angular), [Gatsby](https://www.gatsbyjs.com), [Vue.js](https://vuejs.org), [Ember](https://emberjs.com)_

#### Benefits to this approach:

- Handling offline support
- Managing client-side state is required and first-class, so handling complex interactions are more straightforward
- Clearer conventions for how code should be written, compared to server-side rendering with a bit of JavaScript

#### Drawbacks to this approach:

- Requires more specialist dev skills to build
- Can be costlier to build and maintain (both in time and money) than server-rendered or static sites
- Making pages and features accessible requires more developer time and effort
- Testing for accessibility is no longer straightforward
- Proper SEO also requires more developer time and effort
- Deployments: how do you monitor when a new version of a SPA is available and apply the code changes? What if the SPA is a different version than the server?
- An SPA can run for days, weeks, etc; which may highlight memory management problems
- Routing: the browser already handles this, but SPA's override it and it becomes your problem
- Caching can be tricky with many areas to maintain state storage (rather than just the browser’s cache)
- Execution environment is always unknown and changing

### Conclusion

Keeping UI architecture as simple as possible can help keep government websites cost-effective, maintainable, and accessible. Understanding your user requirements can help decide what kinds of client-side interactivity are nice-to-haves, must-haves, or not needed at all.
