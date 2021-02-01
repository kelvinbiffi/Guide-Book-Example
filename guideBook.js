const GuideBook = require('guide-book-generator');
let guideBook;

// SCSS EXAMPLE

const scss_settings = {
  style: 'build/scss/style.css',
  source: 'source/scss',
  output: 'guidebook/scss.html',
}

guideBook = new GuideBook();
guideBook.generate(scss_settings);


// LESS EXAMPLE

const less_settings = {
  style: 'build/less/style.css',
  source: 'source/less',
  output: 'guidebook/less.html',
}

guideBook = new GuideBook();
guideBook.generate(less_settings);


// STYLUS STYLUS

const stylus_settings = {
  style: 'build/stylus/style.css',
  source: 'source/stylus',
  output: 'guidebook/stylus.html',
}

guideBook = new GuideBook();
guideBook.generate(stylus_settings);

