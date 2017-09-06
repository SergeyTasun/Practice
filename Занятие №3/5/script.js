var a = Number(prompt("Введите целое число", ""));
var b = Number(prompt("Введите целое число", ""));

while (true){
   a = a-b
   if (a<b){
      break;
   }
}
console.log("Остаток: " + a);