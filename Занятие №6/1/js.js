function createCar(model, speed) {
   return {
      model: model,
      speed: speed,

      run: function () {
         console.log(this.model + " Едет со скоростью: " + this.speed);
      },
      
      stop: function () {
         console.log(this.model + " остановилась.");
      }
   }
}

var car = createCar("BMW", 220); 

car.run ();
car.stop ();
car.run ();