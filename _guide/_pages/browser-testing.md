---
title: Browser Testing
sidenav: tools
sticky_sidenav: true
---

Regular cross-browser testing helps ensures your web site or application is accessible and functional to a broad audience, especially as Internet Explorer 11 is pervasive in federal government but TTS developers use Chrome on macOS almost exclusively.

Using a responsive web design and a standards-based approach will result in wide compatibility across modern browsers, but at the edges your product can still trip up on browser-specific quirks. For example, compare the [list of web technologies supported in Internet Explorer 11 versus Chrome](https://caniuse.com/#compare=ie+11,chrome+86). [Progressive Web Application](https://web.dev/progressive-web-apps/)-related features and behaviors also vary widely across devices and browsers.

A few options are available at TTS that allow testing on multiple browser platforms. An automated testing solution is ideal, but even manual cross-browser testing remains valuable.

## Windows

To test with Windows-native browsers like Internet Explorer or Microsoft Edge: 

- [Citrix Workspace](https://handbook.tts.gsa.gov/vmware-horizon/)
  * Pros:
     * No extra installation necessary
  * Cons:
     * You can’t pick the browser versions; the Standard Desktop image includes Internet Explorer 11 and Microsoft Edge (EdgeHTML layout engine) 
     * You can’t access localhost
     * Manual testing only
- Virtual machine (VM)
  * [Request access to VirtualBox](https://gsa.servicenowservices.com/sp/?id=sc_cat_item&sys_id=1bfdfdca78d3a400ce3ddff91a64940b).
  * Pros:
    * [VMs are available for IE8+ at no cost from Microsoft](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)
    * You can [access localhost](https://medium.com/@urubuz/accessing-localhost-in-mac-from-windows-vm-in-virtualbox-312a3de6fedb)
    * Can support local, automated testing through [Selenium](https://www.selenium.dev/)
  * Cons:
    * Takes a bit of setup

## Android 

For Google Chrome for Android:

- [Android Studio](https://developer.android.com/studio) with [AVD Manager](https://developer.android.com/studio/run/managing-avds)
  * The GSA IT Helpdesk will need to configure policy on your macOS workstation in order for the Android emulator to run.

## iOS

For Safari on iOS:

- [Xcode](https://developer.apple.com/xcode/) with Simulator
  * If you are using the latest version of macOS currently released by Apple, Xcode is available in the Mac App Store. Otherwise, find the version of Xcode that maps to your macOS version on [Apple Developer](https://developer.apple.com/download/). 

## Chrome-family browsers and Firefox

- [Cypress](https://www.cypress.io/features)
  * The command-line test runner and local GUI is [approved for use](https://handbook.tts.gsa.gov/software/search/#cypress). However, the [Cypress Dashboard SaaS](https://www.cypress.io/dashboard/) is not.
