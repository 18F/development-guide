---
permalink: /recommendations/mvv-frameworks/
title: M**V frameworks
parent: Recommendations
---

## Angular
AngularJS (commonly referred to as "Angular") is an open-source web application framework maintained by Google and by a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications ([Wikipedia](http://en.wikipedia.org/wiki/AngularJS)).

#### When to use:
- Sites with heavy Front end, Javascript UI interactions (single page apps) such as 
  - creating, updating, deleting of information without a server reload, 
  - real-time messaging platforms, such as chat or complex messaging such as email.
  - complex data visualization dashboards, 
  - lazy-loaded from the back end
- When the site's design specifies a single page app architecture over classic server request and response.
- When the whole site will be built with Angular to maintain front end code consistency.

#### When not to use:
- For a single or a few simple components (with the rest of the site not using Angular), instead see React or Web Components.
- Exporting a module that isn't an Angular module.
- If there is a strict requirement that the site should work for users that have JavaScript disabled.
- If there already is an active M**V framework (Backbone, ampersand, Ember) being used on the site.
- When the site's design doesn't benefit from a single page app architecture.
- When the long-term maintenance dev team is very unfamiliar with Angular and don't have the resources to learn or hire for it.

#### Pros:
- Takes care of a lot of boilerplate code for front end interactions.
- Attempts to extend HTML itself, and was designed so less experienced devs could use it.
- Being maintained and developed by Google generally means good support.

#### Cons:
- While open source, is maintained primarily by Google.
- Has been known to implement breaking changes in major version updates.
- Built with Typescript and Dart, both of which are not ECMA standardized (as opposed to vanilla JS or ES6).
- Has a steep learning curve and is very opinionated, meaning you learn Angular rather then JavaScript.


## Backbone
Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the model–view–presenter (MVP) application design paradigm([Wikipedia](http://en.wikipedia.org/wiki/Backbone.js)).

#### When to use:
- A page design that requires dynamic data manipulation on the front end without a server request response, such as a todo app.
- When a small front end framework is required due to performance constraints.
- When the long-term dev maintenance team is unfamiliar with any full frameworks, such as Angular.
- To use as a wrapper and rest data manipulation library around a view-only framework, such as React.
- When the dev team is familiar enough with Backbone to know how to write maintainable Backbone code.

#### When not to use:
- When the javascript components don't keep data or manipulate data, in which case Backbone's functionality is too heavy and not specific enough for just view rendering.
- If there is a strict requirement that the site should work for users that have JavaScript disabled.
- When another full javascript framework is already in use, such as Angular.
- When working with a data source that is NOT RESTful. Backbone was built for RESTful services, instead see Flux.

#### Pros:
- Relatively un-opinionated, meaning a lot of freedom in development.
- Open source, and has an active, large community.

#### Cons:
- Still requires a lot of boilerplate code (this can be mitigated by pairing with a library like Marionette)
- Since it has very little structure, unexperienced programs can easily create unmaintainable code with Backbone.
- Designed primarily for REST data.


## React
React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for creating user interfaces that aims to address challenges encountered in developing single-page applications ([Wikipedia](https://en.wikipedia.org/wiki/React_(JavaScript_library))).

#### When to use:
- Single page apps that requires data manipulation on the front end without a server side request/response architecture.
- When there's a strong need to render JavaScript based UI on the server due to performance or accessibility reasons.
- JavaScript UI that incorperates many nested components.
- A UI with many components and updates that needs to be performance conscious.
- When only a "view" framework is desired/required.
- To ensure all front end components conform to a single standard.

#### When not to use:
- When a complex build process is not feasible. React requires transforming "jsx" files to regular JavaScript.
- When developers unfamiliar with JSX and don't have time to learn.
- While open source, is maintained primarily by Facebook.


## Flux
Flux is not a framework, nor is it M**VC. Its a software architecture for
writing complex single page applications.

#### When to use:
- A complex JavaScript app that requires both viewing and modifying (CRUD) data
  in a UI rendered on the client. Flux will likely be overkill for apps that
  don't modify data in any way.
- When the data service for the front end is REST and/or something besides REST,
  such as Websockets.
- An app that's data flow has grown or will grow overly complex.

#### When not to use:
- Applications that don't require any updating (create, update, delete) of data.
- When the cost of updating an apps architecture to flux is more then the cost
  of writing the software as it exists.

#### Pros:
- Easily add non-REST services to a front end, in a transparent way.
- Cleans up complex data flow by using uni-directional data flow.
- Cleans up complex async behavior and nested callbacks by using an evented
  system and functionality to wait for data.
- Can use simple JavaScript objects rather then a complex framework.
- Easily tie components together in a clean way.
- Requires little 3rd party software.

#### Cons:
- More verbose in file and directory structure.
- Finding best way to use can be difficult for beginners.
- Can be hard to find a good structure when beginning.
