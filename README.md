# Guide-Book-Example
Example of how consume [Guide Book Package](https://github.com/kelvinbiffi/Guide-Book) to Generate a Guide Book

------------------------

## HOW TO USE

See below how to use [Guide Book](https://www.npmjs.com/package/guide-book-generator) with examples

------------------------

### SCSS
```
const GuideBook = require('guide-book-generator');
let guideBook;

const scss_settings = {
  style: 'build/scss/style.css',
  source: 'source/scss',
  output: 'guidebook/scss.html',
}

guideBook = new GuideBook();
guideBook.generate(scss_settings);
```

------------------------

### LESS
```
const GuideBook = require('guide-book-generator');
let guideBook;

const less_settings = {
  style: 'build/less/style.css',
  source: 'source/less',
  output: 'guidebook/less.html',
}

guideBook = new GuideBook();
guideBook.generate(less_settings);
```

------------------------

### STYLUS
```
const GuideBook = require('guide-book-generator');
let guideBook;

const stylus_settings = {
  style: 'build/stylus/style.css',
  source: 'source/stylus',
  output: 'guidebook/stylus.html',
}

guideBook = new GuideBook();
guideBook.generate(stylus_settings);
```
