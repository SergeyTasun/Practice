var k = Number(prompt("Введите число k", ""));
var n = Number(prompt("Введите число n", ""));

function digitN(k, n) {
   var res = 0;
   var count = 0;
   var arr = [];

   while (k >= 10){
      arr[count] = k % 10;
      k = parseInt(k / 10);
      count ++;
   }
   arr[count] = k;

   if (count < n - 1){
      res = -1;
   } else {
      res = arr[count + 1 - n ];
   }
      return res;
}

console.log (digitN(k, n));