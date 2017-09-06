var salaries = {
   "John": 100,
   "Bill": 300,
   "Mike": 250
};

console.log(getAverageSalary(salaries));

var salaries = {
   "Cris": 150,
   "Brain": 600,
   "John": 300,
   "Steve": 400,
   "Bill": 50
};

console.log(getAverageSalary(salaries));

function getAverageSalary(obj) {
   var sumSalary = 0;
   var coount = 0;
   
   for (var key in obj) {
      sumSalary = sumSalary + obj[key];
      coount++;
   };
   return sumSalary / coount;
}
