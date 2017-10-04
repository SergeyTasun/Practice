"use strict"
/*Измените код используя стрелочные функции, чтобы в коде не использовались методы bind().*/

let server = {
   data: 0,
   convertToString: function (callback) {
       console.log(calc); // тут есть кальк
         return  (callback) =>  this.data + "";

        
      ;
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      server.data = data;
      server.convertToString(this.notification());
   },
   notification: function () {
      return  () => function (callback) {
         this.result = callback();
      };
   }
};

// return () => console.log(this.name); 

client.calc(123);
console.log("???  " + client.result); // "123"
console.log(typeof client.result); // "string"
