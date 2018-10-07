import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

export const extractHeaders = (elements) => {
  const extractH = filter(element => is('h2', element), elements);
  const replace = map(element => node('p', value(element)), extractH);
  return replace;
};

export const wordsCount = (tagName, word, elements) => {
  const extractWords = filter(element => is(tagName, element), elements);
  const fn = (element, acc) => (
    wc(word, value(element)) > 0 ? acc + wc(word, value(element)) : acc
  );
  return reduce(fn, 0, extractWords);
};