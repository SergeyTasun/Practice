"use strict"

/*Создайте конструктор объектов Геометрическая фигура, определите в нем
приватные свойства для задания центра фигуры. Для доступа к этим свойствам
определите необходимые метод/методы.
На основе этого конструктора создайте два новых (наследники) –
Прямоугольник и Круг. В этих конструкторах определите особые приватные
свойства. (Например, длина диагонали для Квадрата и радиус для Круга). В каждый
из конструкторов добавьте публичный метод info(), который выводит на экран всю
доступную информацию о фигуре.*/

function GeometricFigure(centreX, centreY) {
   var _centreX = centreX;
   var _centreY = centreY;
   
   this.getCentreX = function () {
      return _centreX;
   };
   this.getCentreY = function () {
      return _centreY;
   };
   this.setCentreX = function (centreX) {
      _centreX = centreX;
   };
   this.setCentreY = function (centreY) {
      _centreY = centreY;
   };
}

function GeometricFigureSquare(diagonal, centreX, centreY) {
   GeometricFigure.call(this, centreX, centreY);
   var _diagonal = diagonal;
   
   this.info = function () {
      return "_diagonal: " + _diagonal +" CentreX: "+ this.getCentreX() +" CentreY: "+ this.getCentreY(); 
   };
}

function GeometricFigureCircle(radius, centreX, centreY) {
   GeometricFigure.call(this, centreX, centreY);
   var _radius = radius;
   
   this.info = function () {
      return "_radius: " + _radius +" CentreX: "+ this.getCentreX() +" CentreY: "+ this.getCentreY(); 
   };
}

var figure = new GeometricFigure(25, 35);
console.log(figure.getCentreX()); // 25
figure.setCentreX(40); // 40
console.log(figure.getCentreX()); // 40
console.log(figure.getCentreY()); // 35

var figureSquare = new GeometricFigureSquare(10, 25, 35);
console.log(figureSquare.info()); 

var figureCircle = new GeometricFigureCircle(20, 85, 95);
console.log(figureCircle.getCentreX());
console.log(figureCircle.getCentreY());
console.log(figureCircle.info()); 
