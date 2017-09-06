var n = Number(prompt("Введите целое число", ""));
var factorial = 1;
for (var i = 1; i <= n; i++){
 factorial = factorial * i;
}
console.log(factorial); 