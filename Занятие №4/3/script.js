
function area(a, b) {
var arr = [];
var Perimeter = 0;
var Square = 0;

arr[0] = function (a, b) {
      if (typeof(a) === "number" && a > 0 && typeof(b) === "number" && b > 0) {
         Perimeter = (a + b) * 2;
         return Perimeter;
      } else {
         return "Сторонами прямоугольника может быть только число";
      }
   }

arr[1] = function (a, b) {
      if (typeof(a) === "number" && a > 0 && typeof(b) === "number" && b > 0) {
      Square = a * b;
      return Square;
      } else {
         return "Сторонами прямоугольника может быть только число";   
      }
   }
   return arr;
}

var OperationRectangle = area();
console.log(OperationRectangle[0](2 , 3));
console.log(OperationRectangle[1](2 , 3));

