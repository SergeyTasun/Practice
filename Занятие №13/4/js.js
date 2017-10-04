"use strict"
/*Решите задание про функции как объект Занятие №06. JavaScript. ECMAScript 5. Объектно-ориентированное программирование, Задание №5. Функция как объект при помощи новых возможностей ECMAScript 2015.
Нельзя использовать свойство arguments, но в функцию mul() можно добавить один параметр.*/

/*6.5 Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.
*/

function mul(...rest) {
   let result = 0;

   for (var i in rest) {
      if (typeof(rest[i]) == 'number') {
         if (result === 0) {
            result = 1;
            }
         result = result * rest[i];         
      }
   }
   return result;
   
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

