---
title: Output Encoding
sidenav: security
---

# Output Encoding

## What is cross site scripting (XSS)?

Cross site scripting, or XSS, is a form of attack on a web application which involves executing code on a user's browser. Output encoding is a defense against XSS attacks.

To get a more extensive understanding of XSS, see [excess xss](https://excess-xss.com/).

## How to correctly encode output

Protecting from XSS attacks requires developers to consider how data is being displayed on a page. If the data could come from a user's input in any way (including through the site's URL), then correct encoding of the output has to be considered.

Since most web applications at 18F are built through JavaScript or backend frameworks, this guide will go over output encoding issues by those frameworks in addition to plain JavaScript.

### Vanilla JavaScript

When writing plain JavaScript, developers have to consider where data is coming from whenever it's being output in the web application. While data that comes from a backend database usually needs output encoding, code also could need output encoding when extracting data from the current page's url (which an attacker could modify and send to a user).

The [excess xss prevention](https://excess-xss.com/#xss-prevention) section has up-to-date information on how to prevent XSS attacks in all the possible ways they could happen.

### React

By default React DOM escapes all output. This means that output in JSX components will usually be safe, which is great news. This is discussed in [React's documentation](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks).

There are some cases where output may not be correctly escaped in React components. Here are some of those cases:

- Using the `dangerouslySetInnerHTML` prop (it's named this for a reason)
- Passing state from the server, JSON stringifying it without serializing it
- Using user supplied `href` values
- Incorrect usages of `eval`

This [dailyjs article](https://medium.com/dailyjs/exploiting-script-injection-flaws-in-reactjs-883fb1fe36c1) discusses these various problems and how to avoid them.

### Angular

Angular also does a good job of escaping output by default. In general, earlier versions of Angular 1 had more security vulnerabilities, so a safe bet is to ensure the project is on the most recent version of Angular. To learn more about potential vulnerabilities, the [Angular site](https://docs.angularjs.org/guide/security) provides detailed information.
