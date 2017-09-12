"use strict"

/*Задание №4. Встроенные типы объектов
Есть следующий код:
var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength); // ["<li>Tom</li>",
"<li>Sam</li>", "<li>Bob</li>"]
Перепишите данный код, заменив цикл for на метод map().*/

var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];

function addTagLi(value) {
   return "<li>" + value + "</li>";
}

arrLength = arr.map(addTagLi);
console.log(arrLength);