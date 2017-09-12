"use strict"

/*Задание №3. Встроенные типы объектов
Напишите функцию deleteEvenNumbers(array), которая принимает массив
array, удаляет из массива array четные числа и возвращает его.
function deleteEvenNumbers(array) {
// Ваш код
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]*/

function condition(value) {
   return value % 2 !== 0;
}

function deleteEvenNumbers(array) {
   return arr.filter(condition);
}

var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]