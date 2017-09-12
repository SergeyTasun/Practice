"use strict"

/*Задание №6. Инъекция зависимостей
Расширьте пример из лекции (любой из трех) путем добавления операции,
которая изменяет знак числа.*/

function ConstructorInjection(argument, operation) {
   this.argument = argument;
   this.result = 0;
   this.operation = operation; // Зависимость
}

ConstructorInjection.prototype.someOperation = function () {
   this.operation.argument = this.argument;
   this.operation.doOperation();
   this.result = this.operation.result;
};

function Increment() {
   this.argument = 0;
   this.result = 0;
}

Increment.prototype.doOperation = function () {
   this.result = this.argument + 1;
};

function Sign() {
   this.argument = 0;
   this.result = 0;
}

Sign.prototype.doOperation = function () {
   this.result = this.argument * -1;
};

//Инъекция и использования:
var inc = new Increment(); // Создание зависимости
var sign = new Sign(); // Создание зависимости, которая изменяет знак числа
var ci = new ConstructorInjection(10, sign); // Инъекция зависимости через конструктор
ci.someOperation();
console.log(ci.result); // -10