"use strict"
/*Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/

let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray", 
   fourth: "Bob"
};
let {first: f, second, third: x, fifth = "Name №5"} = names;
console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"
