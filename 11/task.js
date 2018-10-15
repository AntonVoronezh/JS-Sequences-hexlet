// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

const flatten = (list) => {
  const fn = (element, acc) => {
    if (isEmpty(l(element))) {
      return acc;
    }
    return isList(element) ? reduce(fn, acc, element) : cons(element, acc);
  };
  return reverse(reduce(fn, l(), list));
};

export default flatten;