"use strict"

/*Задание №2. Встроенные типы объектов
Расширьте тип объектов Array методом sortDesc(), который сортирует массив
по убыванию.
// Ваш код
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]*/

Array.prototype.sortDesc =  function() {
   this.sort();
   this.reverse();
};

var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]
