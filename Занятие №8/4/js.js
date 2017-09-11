"use strict"

/* Задание №4. Прототипное наследование
В задании про функциональное наследование Задание №1. Функциональное наследование измените наследование на прототипное. */

function GeometricFigure(centreX, centreY) {
   this._centreX = centreX;
   this._centreY = centreY;
}

GeometricFigure.prototype.getCentreX = function () {
   return this._centreX;
};
GeometricFigure.prototype.getCentreY = function () {
   return this._centreY;
};
GeometricFigure.prototype.setCentreX = function (centreX) {
   this._centreX = centreX;
}
GeometricFigure.prototype.setCentreY = function (centreY) {
   this._centreY = centreY;
};

function  GeometricFigureSquare (centreX, centreY, diagonal) {
   GeometricFigure.call(this, centreX, centreY);
this._diagonal = diagonal;
};

GeometricFigureSquare.prototype = Object.create(GeometricFigure.prototype); 
GeometricFigureSquare.prototype.constructor = GeometricFigureSquare;

GeometricFigureSquare.prototype.info = function () {
   return "_diagonal: " + this._diagonal +" CentreX: "+ this.getCentreX() +" CentreY: "+ this.getCentreY(); 
};

function  GeometricFigureCircle (centreX, centreY, diagonal) {
   GeometricFigure.call(this, centreX, centreY);
this._diagonal = diagonal;
};

GeometricFigureCircle.prototype = Object.create(GeometricFigure.prototype); 
GeometricFigureCircle.prototype.constructor = GeometricFigureCircle;
 
 GeometricFigureCircle.prototype.info = function () {
   return "_diagonal: " + this._diagonal +" CentreX: "+ this.getCentreX() +" CentreY: "+ this.getCentreY(); 
};
 
var figureSquare = new GeometricFigureSquare(25, 35, 10);
console.log(figureSquare.info()); 

var figureCircle = new GeometricFigureCircle(78, 89, 99);
figureCircle.setCentreY(889)
console.log(figureCircle.info()); 