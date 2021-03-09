When choosing a JavaScript web framework, also consider if vanilla JavaScript would satisfy your project needs. "Vanilla JavaScript" (or "vanilla JS") refers to using just JavaScript and the [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) provided natively by web browsers. For simpler project, vanilla JavaScript helps avoid overengineering, can reduce security and compliance complexity, and may reduce maintenance costs by making it possible for any JavaScript developer to work on it. However, vanilla JavaScript can be unwieldy in complex applications.

## React
{%include components/tag-default.html %}
[React](https://reactjs.org/) (sometimes styled React.js or ReactJS) is an open-source JavaScript library for creating user interfaces that aims to address challenges encountered in developing single-page applications ([Wikipedia](https://en.wikipedia.org/wiki/React_(JavaScript_library))).

#### When to use:
- Single page apps that requires data manipulation on the front end without a server side request/response architecture.
- When there's a strong need to render JavaScript based UI on the server due to performance or accessibility reasons.
- JavaScript UI that incorperates many nested components.
- A UI with many components and updates that needs to be performance conscious.
- When only a "view" framework is desired/required.
- To ensure all front-end components conform to a single standard.

#### When not to use:
- When a complex build process is not feasible. React requires transforming "jsx" files to regular JavaScript.
- When developers unfamiliar with JSX and don't have time to learn.
- While open source, is maintained primarily by Facebook.

#### Goes well with:
- [Redux](https://redux.js.org/) - An application state management library.
  - **When to use:**
    - When an application has complex internal state that affects how the site is rendered in realtime.
    - When one-way data flow is desired for performance.
  - **When not to use:**
    - When application internal state is simple
    - When all state changes result in cheap re-rendering

## Angular
{%include components/tag-suggestion.html %}
[Angular](https://angular.io/) (sometimes styled Angular 2+) is an open-source web application framework maintained by Google and by a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications ([Wikipedia](https://en.wikipedia.org/wiki/Angular_(web_framework))

We don't work with Angular a lot ourselves, but it is a well-maintained, highly-used modern framework and we should not discourage or frown on its use by our partners. In our consulting and acquisition work, we view Angular as a solid choice for a frontend web framework, given the considerations below.

#### When to use:
- Sites with heavy front end, JavaScript UI interactions (single page apps) such as:
  - creating, updating, deleting of information without a server reload
  - real-time messaging platforms, such as chat or complex messaging such as email
  - complex data visualization dashboards
  - lazy-loaded from the back end
- When the site's design specifies a single page app architecture over classic server request and response.
- When the whole site will be built with Angular to maintain front-end code consistency.

#### When not to use:
- For a single or a few simple components (with the rest of the site not using Angular), instead see React or Web Components.
- Exporting a module that isn't an Angular module.
- If there is a strict requirement that the site should work for users that have JavaScript disabled.
- If there already is an active M**V framework (Backbone, ampersand, Ember) being used on the site.
- When the site's design doesn't benefit from a single page app architecture.
- When the long-term maintenance dev team is very unfamiliar with Angular and don't have the resources to learn or hire for it.

#### Pros:
- Takes care of a lot of boilerplate code for front-end interactions.
- Attempts to extend HTML itself, and was designed so less experienced devs could use it.
- Being maintained and developed by Google generally means good support.

#### Cons:
- While open source, is maintained primarily by Google.
- Has been known to implement breaking changes in major version updates.
- Built with Typescript, which is not ECMA standardized (as opposed to vanilla JS or ES6).
- Has a steep learning curve and is very opinionated, meaning you learn Angular rather than JavaScript.

# Deprecated

## AngularJS

{%include components/tag-caution.html %}
AngularJS is the legacy version of Angular and is not actively developed. Maintenance will be discontinued on July 21, 2021. New projects should not use AngularJS.

([Wikipedia](http://en.wikipedia.org/wiki/AngularJS)).
