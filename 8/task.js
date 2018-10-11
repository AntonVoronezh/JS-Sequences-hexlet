import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

export default (list1, list2) => {
  const iter = (list1Iter, list2Iter, accIter) => {
    if (isEmpty(list1Iter) || isEmpty(list2Iter)) {
      return reverse(accIter);
    }
    accIter = cons(l(head(list1Iter), head(list2Iter)), accIter);
    return iter(tail(list1Iter), tail(list2Iter), accIter);
  };
  return iter(list1, list2, l());
};
