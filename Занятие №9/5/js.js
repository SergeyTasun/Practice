"use strict"

/*Задание №5. Исключения
Напишите функцию sumSliceArray(arr, first, second), которая принимает массив
arr и два числа (first и second) – порядковые номера элементов массива, которые
необходимо суммировать. Например, если ввели 3 и 5 – суммируются 3-й и 5-й
элементы.
Функция должна генерировать исключения если были введены не числа, и
когда одно из чисел, или оба больше размера массива.
Напишите код, который использует данную функцию, предусмотрите
обработку возможных исключений.*/

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

console.log(sumSliceArray(array, 2, 50));
