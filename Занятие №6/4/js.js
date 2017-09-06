"use strict"

var calculator = {
   a: 0,
   b: 0,  
   
   read: function () {
      this.a = prompt("Введите первое число", "");
      this.b = prompt("Введите второе число", "");
   },
   
   sum: function () {
      return Number(this.a) + Number(this.b);
   },   
   
   mul: function (number) {
      return Number(this.a) * Number(this.b);
   }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());