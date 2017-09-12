"use strict"

/*Задание №2. Функциональное наследование. Полиморфизм
Создайте конструктор для объектов Квадрат, определите защищенное
свойство для хранения значения стороны. Для доступа к этому свойству определите
необходимые метод/методы. Также определите публичный метод, который
возвращает периметр.
На основе этого конструктора создайте конструктор Куб и переопределите
метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы
переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших
расчетов).*/

function Square (side) {
   this._side = side;
   
   this.perimeter = function () {
       return this._side * 4;
   };

   this.side = function (side) {
      if (typeof(side) === "number") {
            this._side = side;
            return this._side;
      } else {
            return this._side;
      }
   };
}

function Cube(side) {
   Square.call(this, side);
   var parentPerimeter = this.perimeter;
   
   this.perimeter = function () {
      return parentPerimeter.call(this) * 3;  
   };
}

/*  Без расширения (полностью переопределить метод родителя);
function Cube(side) {
   Square.call(this, side);
 
   this.perimeter = function () {
      return this._side * 12;
   };
}
*/

var square = new Square(2);
console.log(square.side()); // 2
console.log(square.side(5)); // 5
console.log(square.perimeter()); // 20

var cube = new Cube(3);
console.log(cube.side()); // 2
console.log(cube.side(7)); // 7
console.log(cube.perimeter()); // 84 

