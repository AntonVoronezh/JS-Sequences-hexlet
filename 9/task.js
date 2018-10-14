// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

const take = (num, list) => {
  const iter = (listIter, accList, accNum) => {
    if (isEmpty(listIter)) {
      return listIter;
    }
    return num === accNum ? accList : cons(
      head(listIter), iter(tail(listIter), accList, accNum + 1),
    );
  };
  return iter(list, l(), 0);
};
export default take;
