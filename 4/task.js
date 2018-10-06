import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const reduce = (fn, acc, elements) => {

  const iter = (items, accIter) => 
  isEmpty(items) ? accIter : iter(tail(items), fn(head(items), accIter));

return iter(elements, acc);
};

export const emptyTagsCount = (tag, elements) => {
const fn = (element, acc) => (is(tag, element) && value(element) === '' ? acc + 1 : acc)
return reduce(fn, 0, elements);
};


