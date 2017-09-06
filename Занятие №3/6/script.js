var n = Number(prompt("Введите целое число", ""));

while (n >= 10){
   console.log(n % 10);
   n = parseInt(n / 10);
}
console.log(n);
