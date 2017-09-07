"use strict"

function CreateSquare (side) {
   this._side = side;
   
   this.perimeter = function () {
       return this._side * 4;
   };

   this.getSetSide = function (side) {
      if (typeof(side) === "number") {
            this._side = side;
            return this._side;
      } else {
            return this._side;
      }
   };
}

function CreateCube(side) {
   CreateSquare.call(this, side);

   this.perimeter = function () {
       return this._side * 12;
   };
}

function CreateCubeExpansion(side) {
   CreateSquare.call(this, side);

   this.newPerimeter = function () {
      return this.perimeter() * 3;
   };
}

var square = new CreateSquare(2);
console.log(square.getSetSide()); // 2
console.log(square.getSetSide(5)); // 5
console.log(square.perimeter()); // 20

var cube = new CreateCube(3);
console.log(cube.getSetSide()); // 2
console.log(cube.getSetSide(7)); // 7
console.log(cube.perimeter()); // 84 

var cubeExpansion = new CreateCubeExpansion(4);
console.log(cubeExpansion.getSetSide()); // 4
console.log(cubeExpansion.getSetSide(8)); // 8
console.log(cubeExpansion.newPerimeter()); // 96 