"use strict"

function CreateAdder () {
   var _firstNumber = 0;
   var _secondNumber = 0;
   this.result = 0;

   var calc = function () {
       return _firstNumber + _secondNumber;
   };
   
   this.getSetFirstNumber = function (firstNumber) {
      if (typeof(arguments[0]) === "number") {
            _firstNumber = firstNumber;
            this.result = calc();
            return this.result;
      } else {
            return _firstNumber;   
      }
   };
      
    this.getSetSecondNumber = function (secondNumber) {
      if (typeof(arguments[0]) === "number") {
         _secondNumber = secondNumber;
         this.result = calc();
         return this.result;
      } else {
            return _secondNumber;  
      }
   };
};

var adder = new CreateAdder(); 

console.log(adder.getSetFirstNumber()); // 0
console.log(adder.getSetFirstNumber(5)); // 0 
console.log(adder.getSetFirstNumber()); // 5
console.log(adder.getSetFirstNumber("we")); // 5
console.log(adder.getSetSecondNumber(7)); // 12
console.log(adder.getSetSecondNumber()); // 7
