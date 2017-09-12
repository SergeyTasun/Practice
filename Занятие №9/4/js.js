"use strict"

/* Задание №4. Встроенные типы объектов
Напишите функцию addTwoDays(date), которая принимает объект типа Date и
добавляет к дате данного объекта два дня. */

var date = new Date();

function addTwoDays(date) {
   date.setDate(date.getDate() + 2);
   return date; 
// return  date.setDate(date.getDate() + 2); //- так не работает  :(, точнее работает но возвращает дату в миллисекундах
}

console.log(date);
console.log(addTwoDays(date));

