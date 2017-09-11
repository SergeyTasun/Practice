"use strict"
/*Напишите программу, которая запрашивает у пользователя строки (prompt()). Ввод строк должен быть завершен, когда пользователь вводит строку end. Далее программа проверяет, есть ли в строке цифры, если да, добавляет в начало строки текст "Numbers: ", если нет – "No numbers: " и выводит результат в виде следующей таблицы:

+-----------------+---------------------+
| Исходная строка | Обработанная строка |
+-----------------+---------------------+
| строка_1        | строка_1_обр        |
+-----------------+---------------------+
| строка_2        | строка_2_обр        |
+-----------------+---------------------+
*/

var arrayOriginal = [];
var arrayResult = [];
var inputString;
var iteration = 1;
arrayOriginal[0] = "Исходная строка";
arrayResult[0] = "Обработанная строка";

while (true){
   inputString = prompt("Введите что-то, но последней строкой введите end", "");
   if (inputString === "end") {
      break;
   }

   if (/\d/.test(inputString)) {
      arrayOriginal[iteration] = inputString;
      arrayResult[iteration] = "Numbers: " + inputString;
       iteration++;   
   } else {
      arrayOriginal[iteration] = inputString;
      arrayResult[iteration] = "No numbers: " + inputString; 
      iteration++;      
   }
}

for (var i=0; i<arrayOriginal.length; i++) {
 console.log(arrayOriginal[i]  + "    ----    " + arrayResult[i]) 
}