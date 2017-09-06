"use strict"

var salaries = {
   "John": 100,
   "Bill": 300,
   "Mike": 250
};

console.log(maxSalary(salaries));

var salaries = {
   "Cris": 150,
   "Brain": 600,
   "John": 300,
   "Steve": 400,
   "Bill": 50
};

console.log(maxSalary(salaries));

function maxSalary(obj) {
   var maxSalary = 0;
   
   for (var key in obj) {
      if (maxSalary < obj[key]) {
      maxSalary = obj[key];
      }
   };
   return maxSalary;
}
