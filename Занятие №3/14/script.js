var a = Number(prompt("Введите число a", ""));
var b = Number(prompt("Введите число b", ""));
var op = Number(prompt("Введите число op", ""));

function calc(a, b, op) {
   var res = 0;
      if (op === 1){
         res = a - b;
      } else if (op === 2){
         res = a * b; 
      } else if (op === 3){
         res = a / b; 
      } else {
         res = a + b; 
      }
      return res;
}

console.log (calc(a, b, op));