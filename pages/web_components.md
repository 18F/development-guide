# Web Components

## Initial Impressions
First, check out [this article](http://developer.telerik.com/featured/web-components-arent-ready-production-yet/) and [its follow-up](http://developer.telerik.com/featured/web-components-ready-production/) for some background on whether Web Components (or, more specifically, [custom elements]) are ready for production. TL;DR:

* Custom element [polyfills](https://github.com/WebReflection/document-register-element) (needed for [every browser except Chrome](http://caniuse.com/#search=custom%20elements)) are indeed ready for production.
* If you need the [template tag] (and the so-called [shadow DOM]) for style encapsulation, you're [out of luck](http://caniuse.com/#search=shadow%20dom): outside of Chrome, only Firefox supports it, and only with a hidden setting. (The polyfills for shadow DOM, particularly, are *uuuuugly*.)
* The JavaScript libraries that expose similar APIs for defining web components are a mixed bag, as you'll see below.

My first stop when sussing out web components was [WebComponents.org], which appears to be a collaboration between Google (makers of [Polymer]), Mozilla (makers of [x-tag]) and other open web technology folks. There's also [CustomElements.io](https://customelements.io/), which serves as a showcase for [custom elements] made primarily with Polymer and x-tag. I also enjoyed poking around the [examples](http://component.kitchen/components) on [component.kitchen], which are all available on GitHub.

So, what about the tools?

### [x-tag]
I tried Mozilla's x-tag first, and was impressed. The [API](http://x-tags.org/docs) is simple, I liked that you can declare components in vanilla JS, and I was able to get something working in Chrome quickly. However, I was forced to abandon it after running into untraceable errors in x-tag core when testing in IE9. x-tag also relies on the same polyfills as Polymer, which are a pain to get and update (see below for more details). Survey says:

:-1: **I couldn't get it working in IE9**—or any browser other than Chrome, for that matter.

### [Polymer]
Google's Polymer Project fully embraces [HTML imports], which are a way to encapsulate your component's contents, behavior and appearance in a separate HTML file. It's a neat framework, but it also assumes that you want all of the bells and whistles, including two-way data binding and the [shadow DOM]. In my testing it also appeared to be wholly incompatible with IE9, and thus basically unusable at 18F.

:warning: The suite of polyfills that Polymer requires also entails an unnecessarily convoluted [build process](https://www.polymer-project.org/0.5/resources/tooling-strategy.html#building-individual-polyfills) if you don't need all of its features. Documentation for the polyfills is sparse, and I was unable to find any mention of the errors that I encountered in IE9. For future reference, it's best to get everything from a [CDN](http://cdnjs.com/libraries/webcomponentsjs) or [install them from npm or bower](http://webcomponents.org/polyfills/). Also, if you don't need the shadow DOM, save yourself some bytes and use the bundled `webcomponents-lite.js`, which just provides [custom elements] and [HTML imports].

:-1: **Polymer gets my thumbs down for trying to do too much.**

### Vanilla JS ([document.registerElement()](https://github.com/WebReflection/document-register-element))
Next up, I tried out [Andrea Giammarchi's](http://webreflection.blogspot.com/2014/07/a-w3c-custom-elements-alternative.html) [polyfill](https://github.com/WebReflection/document-register-element) for the core custom elements API, the `document.registerElement()` function. Andrea's polyfill has some major advantages over x-tag and Polymer:

1. At just 3K minified and zipped, it's *tiny* compared to Polymer's hefty 150K payload (after you include all of the necessary polyfills). Because x-tag relies on many of the same polyfills (which involve a 
2. It works in IE9 if you include either [aight] or Andrea's [dom4] polyfill.
3. The API does exactly what the spec says it should, and nothing more. No two-way data binding, no event delegation, no performance-hobbling shadow DOM shims (or shams).

:+1: **Use this! It works great!**

### [Bosonic]
A link to [Bosonic] features prominently on [WebComponents.org], and claims support for IE9. Unlike x-tag and Polymer, Bosonic simply follows the web component specs and uses a transpiler to convert [HTML imports] into vanilla JS and CSS at runtime. Check out the [docs](http://bosonic.github.io/documentation.html) for more info. The [platform](https://github.com/bosonic/bosonic/blob/master/dist/bosonic-platform.js) and [runtime](https://github.com/bosonic/bosonic/blob/master/dist/bosonic-runtime.js) JS files weigh in at about 82K total.

:question: **I didn't get a chance to try this one**, but it's worth a look if you need [HTML imports] and [shadow DOM].

[x-tag]: http://x-tags.org/
[Polymer]: https://www.polymer-project.org/
[Bosonic]: http://bosonic.github.io/
[WebComponents.org]: http://webcomponents.org/
[component.kitchen]: http://component.kitchen/
[custom elements]: http://www.smashingmagazine.com/2014/03/04/introduction-to-custom-elements/
[HTML imports]: http://webcomponents.org/articles/introduction-to-html-imports/
[template tag]: http://www.html5rocks.com/en/tutorials/webcomponents/template/
[shadow DOM]: http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/
[aight]: https://github.com/shawnbot/aight
[dom4]: https://github.com/WebReflection/dom4
