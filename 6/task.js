import {
  l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
} from 'hexlet-pairs-data';
import {
  is, toString as htmlToString, hasChildren, children, filter, reduce,
} from 'hexlet-html-tags';

const select = (tag, tree) => {
  const fn = (element, acc) => {
    if (!hasChildren(element)) {
      return is(tag, element) ? concat(l(element), acc) : acc;
    }
    const accChildren = is(tag, element) ? concat(children(element), acc) : acc;
    return reduce(fn, accChildren, children(element));
  };
  return reduce(fn, l(), tree);
};

export default select;
