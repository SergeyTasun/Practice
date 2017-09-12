"use strict"

/*Задание №1. Встроенные типы объектов
1. Создайте массив с элементами "Джаз", "Блюз";
2. Добавьте в конец элемент "Рок-н- Ролл";
3. Замените предпоследний элемент с конца на "Классика". Код замены должен
быть универсальный, т.е. работать для массивов любой длины;
4. Удалите первый элемент массива и выведите его на экран;
5. Добавьте в начало элементы "Рэп" и "Регги".
Массив в результате каждого шага:
1. ["Джаз", "Блюз"]
2. ["Джаз", "Блюз", "Рок-н- Ролл"]
3. ["Джаз", "Классика", "Рок-н- Ролл"]
4. ["Классика", "Рок-н- Ролл"]
5. ["Рэп", "Регги", "Классика", "Рок-н- Ролл"]*/

var array = ["Джаз", "Блюз"];
console.log(array);

array.push("Рок-н- Ролл");
console.log(array);

array.splice(array.length - 2, 1, "Классика");
console.log(array);

console.log("4. Удалите первый элемент массива и выведите его на экран: " + array.splice(0, 1));
console.log(array);

array.unshift("Рэп", "Регги");
console.log(array);