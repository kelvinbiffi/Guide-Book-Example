
# Guide-Book-Example

This is an example project showing how to consume the [Guide Book Package](https://github.com/kelvinbiffi/Guide-Book) to generate a guide book for your CSS preprocessor files.
It helps you document your SCSS, LESS, and Stylus files in a clear, structured HTML guidebook.

---

## Prerequisites

Before using this example, make sure you have:

* [Node.js](https://nodejs.org/) installed
* The [guide-book-generator](https://www.npmjs.com/package/guide-book-generator) package installed in your project:

```bash
npm install guide-book-generator
```

---

## How to Use

See below how to use [Guide Book](https://www.npmjs.com/package/guide-book-generator) with examples.

---

### SCSS

```javascript
const GuideBook = require('guide-book-generator');
let guideBook;

const scss_settings = {
  style: 'build/scss/style.css',
  source: 'source/scss',
  output: 'guidebook/scss.html',
};

guideBook = new GuideBook();
guideBook.generate(scss_settings);
```

*This will generate a guidebook HTML file `scss.html` documenting all your SCSS source files.*

---

### LESS

```javascript
const GuideBook = require('guide-book-generator');
let guideBook;

const less_settings = {
  style: 'build/less/style.css',
  source: 'source/less',
  output: 'guidebook/less.html',
};

guideBook = new GuideBook();
guideBook.generate(less_settings);
```

*This will generate `less.html` with a complete guide for your LESS files.*

---

### STYLUS

```javascript
const GuideBook = require('guide-book-generator');
let guideBook;

const stylus_settings = {
  style: 'build/stylus/style.css',
  source: 'source/stylus',
  output: 'guidebook/stylus.html',
};

guideBook = new GuideBook();
guideBook.generate(stylus_settings);
```

*This will generate `stylus.html` documenting all your Stylus source files.*

---

## Next Steps

* Customize the style of your guidebook using the `style` property.
* Add more source directories to generate multiple guidebooks in one project.
* Explore advanced options in the [guide-book-generator documentation](https://www.npmjs.com/package/guide-book-generator).

---
