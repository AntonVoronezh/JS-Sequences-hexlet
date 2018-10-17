// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

const sort = list => {
  if (isEmpty(list)) {
    return list;
  }
  const filteredRight = filter(element => element > head(list), tail(list));
  const filteredLeft = filter(element => element <= head(list), tail(list));
  return concat(sort(filteredLeft), cons(head(list), sort(filteredRight)));
};

export default sort;
