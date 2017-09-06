var x = Number(prompt("Введите число x", ""));
var y = Number(prompt("Введите число y", ""));

function minMax(x, y) {
   if (x <= y){
      return x;  
   } else {
      return y;
   }
}

console.log (minMax(x,y));