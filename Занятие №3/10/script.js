var a = Number(prompt("Введите целое число", ""));
var b = Number(prompt("Введите целое число", ""));

var j = 0;
var numberOfRepetitions = 1;

for (var i = a; i <= b; i++){
   j = numberOfRepetitions;
   while (j !== 0){
      console.log(i);
      j--;
   }
 numberOfRepetitions++
}
