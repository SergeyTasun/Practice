"use strict"

function mul() {
   var result = 0;

   for (var i in arguments) {
      if (typeof(arguments[i]) == 'number') {
         if (result === 0) {
            result = 1;
            }
         result = result * arguments[i];         
      }
   }
   return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0