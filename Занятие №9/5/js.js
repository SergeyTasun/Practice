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
      if (typeof(array[first]) !== "number" 
      ||  typeof(array[second]) !== "number" 
      ||  first < 0 
      ||  second < 0 
      ||  first > array.length 
      ||  second > array.length){  
         array.err();  
      }
      return array[first] + array[second]; 
   } catch (error) {
      return "Обработка исключения";
   }   
}

console.log(sumSliceArray(array, 2, 5));