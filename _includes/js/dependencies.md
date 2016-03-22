The word "dependency" refers to all of the frameworks, libraries, and other tools that your project relies on. *Dependency management* is the process by which tools are incorporated into your project, removed and updated (for instance, when you need a new version of [jQuery]). Here are the tools that we recommend for managing dependencies:

## Bower
#### Do not use Bower.

It's not needed and should be phased out and replaced by npm. More information can be found here: [Why We Should Stop Using Bower – And How to Do It](http://gofore.com/ohjelmistokehitys/stop-using-bower/).


## npm
[npm] informally stands for *N*ode *P*ackage *M*anager, and is the package manager node uses. Its usage is very similar to Bower because the latter was inspired by the former.

#### npm Instructions
1. Get [Node.js].
2. To initialize your project, run `npm init` in your project directory, which will create a `package.json`.
3. Install some dependencies with `npm install --save [name]`, e.g.
  - [jQuery]: `npm install --save jquery`
  - [D3]: `npm install --save d3@v3.5.5` (version 3.5.5)

npm installs its dependencies in the `node_modules` directory. Common conventions dictate that `node_modules` should be excluded from source control by adding it to your project's `.gitignore`, primarily because Node.js-friendly environments (such as 18F's deployment service, [Cloud Foundry], and other such as [Heroku]) recognize the existence of `package.json` and automatically install dependencies as needed.

#### Node and the Browser
Using [Node.js] modules in the browser can be either straightforward or convoluted, depending on the project. Some project packages come with browser-ready `.js` files, whereas others require build tools such as [Browserify] or [Webpack] to translate some Node-specific JavaScript so that it can be run in browsers. Visit the #javascript or #nodejs channels on Slack if you need help with these tools.

## Manual Dependency Management
Many dependencies consist of a single file and can be more easily incorporated simply by copying them into your project. We have some recommendations for how this should be done:

1. Establish a specific directory for 3rd-party assets, e.g. `js/vendor` for JavaScript or `assets/vendor` for frameworks that consist of CSS, images and/or JavaScript.
2. Download the assets to this directory, e.g. in your terminal:

  ```sh
  cd js/vendor
  curl -O http://code.jquery.com/jquery.min.js
  ```

3. Add these dependencies to version control.

[jQuery]: http://jquery.com/
[npm]: https://www.npmjs.com/
[Node.js]: https://nodejs.org/
[D3]: http://d3js.org/
[Browserify]: http://browserify.org/
[Webpack]: http://webpack.github.io/
[Cloud Foundry]: https://www.cloudfoundry.org/
[Heroku]: https://www.heroku.com/

