// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (name, value) => cons(name, value);
export const name = node => car(node);
export const value = node => cdr(node);
export const append = (list, tag) => consList(tag, list);
export const toString = (numbers) => {
  let acc = '';
  const iter = (numbers) => {
      if (isEmpty(numbers) === false) {
        acc = '<' + name(head(numbers)) + '>' + value(head(numbers)) + '</' + name(head(numbers)) + '>' + acc;
        return iter(tail(numbers));  
      }
      return acc;
  }
  return listToString(iter(numbers));
}


