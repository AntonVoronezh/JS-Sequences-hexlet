import { getX, getY, toString as pointsToString } from 'hexlet-points';
import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const fnPerimeter = (p1, p2) => Math.sqrt((getX(p1)-getX(p2)) ** 2 + (getY(p1)-getY(p2)) ** 2);

const calculatePolygonPerimeter = list => {
  const iter = (listIter, acc, x) => {
    if (isEmpty(listIter)) {
      return x < 3 ? null : acc;
    }
   if (tail(listIter) !== null) {
      acc += fnPerimeter(head(listIter), head(tail(listIter)));
      x += 1;
    } else {
      acc += fnPerimeter(head(listIter), head(list));
      x += 1;
    }
return iter(tail(listIter), acc, x);
  };
return iter(list, 0, 0);
};

export default calculatePolygonPerimeter;
