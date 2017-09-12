"use strict"

/*Задание №5. Встроенные типы объектов

Напишите функцию matrixToArray(matrix), которая принимает двумерный
массив (матрицу) matrix, разворачивает двумерный массив в одномерный и
возвращает его. Данное задание необходимо решить при помощи
аккумулирующих методов.
function matrixToArray(matrix) {
// Ваш код
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]*/

function matrixToArray(arr) {
   arr = arr.reduce(reducer);
   arr = arr.split(',');
   return arr.map(toNumber);
}

function reducer(accumulator, currentValue) {
   return accumulator + "," + currentValue;
}

function toNumber(value) {
   return Number(value);
}

var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9] 