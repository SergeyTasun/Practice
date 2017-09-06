var integer = Number(prompt("Введите целое число", ""));
if (integer === 0){
      console.log('Нулевое число: ' + integer);
} else if (integer > 0 && integer % 2 === 0){
      console.log('Положительное четное число: ' + integer);
} else if (integer > 0 && integer % 2 === 1){
      console.log('Положительное нечетное число: ' + integer);
} else if (integer < 0 && integer % 2 === 0){
      console.log('Отрицательное четное число: ' + integer);
} else { 
   console.log('Отрицательное нечетное число: ' + integer);
}