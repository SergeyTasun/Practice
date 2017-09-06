var twoDigitNumber;
var ten;
var unit;

twoDigitNumber = prompt("Введите двухзначное число", "");

unit = twoDigitNumber % 10;
ten = twoDigitNumber - unit;
console.log("Десятки: " + ten);
console.log("Единицы: " + unit);

