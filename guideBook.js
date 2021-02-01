const GuideBook = require('guide-book-generator');

const settings = {
  style: 'build/style.min.css',
  source: 'source/css',
  output: 'guidebook/index.html',
}

const guideBook = new GuideBook();
guideBook.generate(settings);