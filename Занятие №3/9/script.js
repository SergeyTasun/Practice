var arr = new Array();
var i=0;
var n;
var sum = 0;

while (true){
   n = prompt("Введите что-то", "");
   if (n === "" || isNaN(Number(n)) || n === null){
      break;
   }
Array[i] = Number(n);
sum = sum + Array[i];
i++;
}

console.log(sum);