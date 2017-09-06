var MyNumberFirst;
var MyNumberSecond;

MyNumberFirst = prompt("Введите первое число", "");
MyNumberSecond = prompt("Введите второе число", "");

if (MyNumberFirst > 2 && MyNumberSecond <= 3) {
   console.log("Всё верно: " + MyNumberFirst + " > 2 и " + MyNumberSecond + " ≤ 3 ");   
}else {
   console.log("Не верно: " + MyNumberFirst + " <= 2 или  " + MyNumberSecond + " > 3 ");     
}