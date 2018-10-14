import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const union = (list1, list2) => {
  const fn = (element, acc) => {
    if (isEmpty(l(element))) {
      return acc;
    }
  return has(acc, element) ? acc: cons(element, acc);
  };
return reverse(reduce(fn, reduce(fn, l(), list1), list2));
};

export default union;
