"use strict"

/*Задание №6. Исключения
Возьмите функцию sumSliceArray(arr, first, second) из предыдущего задания и
напишите код, который ее использует, но перед самим использованием проверяет
все параметры на правильность. Таким образом, никогда не должны генерироваться
исключения, которые есть внутри данной функции.*/

var array = [1, 8, 5, 9, 3, 7, 4];

function sumSliceArray(array, first, second) {
   try { 
      if (typeof(array[first]) !== "number" 
         ||  typeof(array[second]) !== "number" 
         ||  first < 0 
         ||  second < 0 
         ||  first > array.length 
         ||  second > array.length) {  
            array.err();  
      }
      return array[first] + array[second];
      
   } catch (error) {
      return "Обработка исключения";
   }   
}

//console.log(sumSliceArray(array, 2, 5));

function processingArray (array, first, second) {
   if (typeof(array[first]) !== "number" 
      ||  typeof(array[second]) !== "number" 
      ||  first < 0 
      ||  second < 0 
      ||  first > array.length 
      ||  second > array.length) {  
         return "Проверка не пройдена";
      } else {
         return sumSliceArray(array, first, second);
   }
}

console.log(processingArray(array, 2, 5));