var x = Number(prompt("Введите число x", ""));
var n = Number(prompt("Введите число (степень) n", ""));

function degree(x, n) {
   var res = x;
   while (n > 1){
      res = res * x;
      n--;
   }  
   return res;
}


console.log (degree(x,n));