import {
  l, isEmpty, head, tail, filter, toString as listToString,
} from 'hexlet-pairs-data';

const sameParity = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  return head(list) % 2 === 0 ? filter(
    element => element % 2 === 0, list,
  ) : filter(element => element % 2 !== 0, list);
};

export default sameParity;
