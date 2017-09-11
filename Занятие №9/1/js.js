"use strict"
/*Создайте тип объектов Прямоугольник со свойствами координат верхнего левого (x1, y1) и нижнего правого (x2, y2) углов. 
Переопределите методы toString() и valueOf(). Метод toString() должен возвращать строку с описанием текущего состояния. Метод valueOf() должен возвращать текущий периметр.*/

function Rectangle (x1, y1, x2, y2) {
   this._coordinatesUpperLeft = [x1, y1];
   this._coordinatesLowerRight = [x2, y2];
}
 
 
 Rectangle.prototype.toString = function () {
   return 'UL: ' + this._coordinatesUpperLeft + ' LR: ' + this._coordinatesLowerRight;
}; 

Rectangle.prototype.valueOf = function () {
   return Math.abs(this._coordinatesLowerRight[0] - this._coordinatesUpperLeft[0])*2 + Math.abs(this._coordinatesLowerRight[1] - this._coordinatesUpperLeft[1])*2;
};

var square = new Rectangle (1, 2, 4, 5);

console.log(square.toString());
console.log(square.valueOf());
