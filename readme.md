# Themedd Starter

This is my very personal child theme for building websites based on [Themedd](https://github.com/easydigitaldownloads/themedd).

## Features

* Integrated grunt workflow supporting LESS/JS compiling as well as a text-domain checker
* Ready for translations

## Setup

### Placeholders

Due to the fact that I used placeholder names, prefixes and labels, you must do some replacements inside the files. 

Let's assume your project will be called "Jumping Donut", then we're going to find a short version (e.g. _jd_) which will be used as prefix for functions, constants etc.

* Search for: `Themedd Starter` and replace with: `Jumping Donut`
* Search for: `TEDDS_` and replace with: `JD_`
* Search for: `tedds_` and replace with: `jd_` 

_In case I missed some placeholders, please gimme a shout._

### Grunt (LESS, Uglify etc.)

In order to setup the grunt workflow, simply execute the following commands via your console:

``` php
// Installing dependencies
npm install

// Run watcher while developing and updating less/js files
grunt watch

// Finish the work and generating the zip file of the plugin
grunt finish
```

### Credits

This Themedd Starter theme is built by [flowdee](https://twitter.com/flowdee). 

You like my work? [Support me](https://donate.flowdee.de/) or not. I don't mind, as long as I was able to help you :wink:
