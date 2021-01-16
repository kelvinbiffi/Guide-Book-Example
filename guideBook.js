import { GuideBook } from 'C:/PROJETOS/Guide-Book/index.js';

const settings = {
  style: 'build/style.min.css',
  source: 'source/css'
}

const guideBook = new GuideBook(pageBase);
guideBook.generate(settings);