"use strict"
/*Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, ,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]
