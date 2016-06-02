## Scrolling
### skrollr
[Skrollr] is stand-alone parallax scrolling library for mobile (Android + iOS) and desktop.

#### When to use
- For building scrolling effects that have different requirements that very standard parallax. Skrollr has a lot of flexibility.
- When supporting mobile web (even though it won't be a perfect experience) is a requirement.
- Does not require jQuery

#### When not to use
- If there are concerns the library has been inactive for too long and will break with newer browsers. skrollr hasn't been under active development since about September 2014.
- If skrollr's method of controlling animation in the markup doesn't work for the project's architecture.

### stellar.js
Parallax scrolling made easy, [stellar.js].

#### When to use
- For building simple parallax effects as well as more complex ones through the use of advanced configuration.

#### When not to use
- If there are concerns the library has been inactive for too long and will break with newer browsers.
- When some amount of experience on mobile is required. Stellar on mobile requires more configuration than something like skrollr.
- When you don't want to require jQuery, instead see skrollr.


## Tables
### DataTables
[DataTables] is a jQuery tool to progressively enhance HTML tables with advanced interactive features, such as sorting, paging, filtering, etc.

#### When to use
- Creating an interactive table that doesn't need to be configured or restyled very much from what DataTables offers.

#### When not to use
- When the interactive table being created will be very custom and will not look and/or function like the basic examples on the data tables website.
- When your site doens't require jQuery.
- When elements around or interacting with the table use percentages for positioning. DataTables forces the table to use absolute units (pixels) which get manipulated. This means it can be problematic for responsive sites.

#### Pros
- Is relatively easy to set up for a table in default styling and functionality.

#### Cons
- Has a confusing syntax for expressing HTML in its API.
- No ability to work without JavaScript.
- Uses absolute units for everything rather than percentages, making it very hard to make it work with other responsive elements.
- Tries to accomplish everything possible, which makes the API confusing.
- Documentation on the API can be incomplete and hard to follow.


[Datatables]: https://www.datatables.net
[Skrollr]: http://prinzhorn.github.io/skrollr/
[stellar.js]: http://markdalgleish.com/projects/stellar.js/

