const { GuideBook } = require('C:/PROJETOS/Guide-Book/index.js');

const settings = {
  style: 'build/style.min.css',
  source: 'source/css',
  output: 'guidebook',
}

const guideBook = new GuideBook();
guideBook.generate(settings);