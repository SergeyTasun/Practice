var integer1 = Number(prompt("Введите целое число", ""));
var integer2 = Number(prompt("Введите целое число", ""));
var integer3 = Number(prompt("Введите целое число", ""));
var integer4 = Number(prompt("Введите целое число", ""));

if (integer1 !== integer2){
   if (integer1 !== integer3){
      console.log('Первое число оличается от остальных: ' + integer1);
   } else {
      console.log('Второе число оличается от остальных: ' + integer2); 
   }
} else if (integer3 !== integer2) {
   console.log('Третье число оличается от остальных: ' + integer3);
} else {
   console.log('Четвертое число оличается от остальных: ' + integer4);
}