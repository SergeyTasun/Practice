"use strict"
/* Задание №5. Прототипное наследование. Полиморфизм
В задании про функциональное наследование Задание №2. Функциональное наследование. Полиморфизм измените наследование на прототипное.
 */

function Square (side) {
   this._side = side;
}
 
Square.prototype.perimeter = function () {
   return this._side * 4;
};

Square.prototype.side = function (side) {
   if (typeof(side) === "number") {
      this._side = side;
   } else {
      return this._side;
   }
};
 
function Cube(side) {
   Square.call(this, side);
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

/* Cube.prototype.perimeter = function () {
   return this._side * 12;
}; */ 
 
Cube.prototype.perimeter = function () {
      return Square.prototype.perimeter.call(this) * 3;  
};

var square = new Square(2);
console.log(square.side()); // 2
console.log(square.side(5)); // 5
console.log(square.perimeter()); // 20

var cube = new Cube(3);
console.log(cube.side()); // 2
console.log(cube.side(7)); // 7
console.log(cube.perimeter()); // 84 

