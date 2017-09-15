"use strict"

/*Задание №6. Исключения
Возьмите функцию sumSliceArray(arr, first, second) из предыдущего задания и
напишите код, который ее использует, но перед самим использованием проверяет
все параметры на правильность. Таким образом, никогда не должны генерироваться
исключения, которые есть внутри данной функции.*/

var array = [1, 8, 5, 9, 3, 7, 4];

function sumSliceArray(array, first, second) {
   try { 
      if (typeof(array[first]) !== "number") {
         throw new Error("Первый элемент не является числом");
      }
           
      if (typeof(array[second]) !== "number") {
         throw new Error("Ощибка!!! Второй элемент не является числом");
      }
     
      if (first < 0) {
            throw new Error("Ощибка!!! Первый элемент меньше нуля");
      }
      
      if (second < 0) {
            throw new Error("Ощибка!!!Второй элемент меньше нуля");
      }
      
      if (first > array.length) {
            throw new Error("Ощибка!!! Первый элемент больше длинны массива");
      }
      
      if (second > array.length) {
            throw new Error("Ощибка!!! Второй элемент больше длинны массива");
      }
      
   return array[first] + array[second]; 
   } catch (error) {
      return error.message
   }
}

function processingArray(array, first, second) {
   if (typeof(array[first]) === "number" 
      ||  typeof(array[second]) === "number" 
      ||  first >= 0 
      ||  second >= 0 
      ||  first < array.length 
      ||  second < array.length) {  
      return sumSliceArray(array, first, second);
    } else {
    return "Проверка не пройдена";        
    }  
}

console.log(processingArray(array, 2, 5));
