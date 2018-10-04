export const filter = (fn, list) => {

  const iter = (items, acc) => {
    if(isEmpty(items)) {
      return acc;
    } 
    if(fn(head(items))) {
      return iter(tail(items), cons(head(items), acc));
    }
  return iter(tail(items), acc);
  }
   
return iter(reverse(list), l());
};

export const quotes = (list) => {
const filtered = filter(element => is('blockquote', element), list);
return map(element => value(element), filtered);
}
