var n = Number(prompt("Введите целое число", ""));

function SumNumber(n) {
   if (n >= 10) {
         return (n % 10) + SumNumber(parseInt(n / 10));
      } else {
         return n;
      }
   }

console.log(SumNumber(n));