function createArrayIterator(array) {
var arrItr = 0;
   return function () {
      arrItr++;
      return array[arrItr-1];
   };
}
var arr = [5, 6, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 6
console.log(itr()); // 7
console.log(itr()); // undefined