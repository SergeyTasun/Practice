//Стандартный
//var car = new Object();
var car = {};
car.model = "X5";
car.speed = "220";
car.run = function () {
   console.log(car.model + ' едет со скоростью ' + car.speed);   
};
car.stop = function () {
   console.log(car.model + ' остановилась');   
};
car.run(); 
car.stop(); 

//Массивов
var car = {};
car["model"] = "X5";
car["speed"] = "220";
car["run"] = function () {
   console.log(car.model + ' едет со скоростью ' + car.speed);   
};
car.stop = function () {
   console.log(car.model + ' остановилась');   
};
car["run"]();
car["stop"]();


//Упращенный
var car = {
   "model": "X5",
   "speed": "220",
   "run": function () {
   console.log(car.model + ' едет со скоростью ' + car.speed);   
   },
   "stop": function () {
   console.log(car.model + ' остановилась');   
   }
};
car.run();
car.stop();