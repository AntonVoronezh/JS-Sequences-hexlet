import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings';

export const map = (fn, list) => {
	const iter = (items, acc) => isEmpty(items) ? acc : iter(tail(items), cons(fn(head(items)), acc));
	return iter(reverse(list), l());
};

export const mirror = (list) => {
    const reverseMirror = (elements) => node(name(elements), reverseStr(value(elements)));
  return map(reverseMirror, list);
}
