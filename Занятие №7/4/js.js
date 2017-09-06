"use strict"

function CreatePlayer (soundVolume) {
   var _soundVolume = 0;

   this.getSoundVolume = function () {
    console.log(_soundVolume);
   };

   this.setSoundVolume = function (volume) {
      if (volume > 0 && volume < 100) {
         _soundVolume = volume;
         console.log(_soundVolume);
      } else {
         console.log("Громкость может быть в диапазоне от 0 до 100");
      }
   };
   
   this.getSetSoundVolume = function (volume) {
      if (!!arguments[0]) {
         if (volume > 0 && volume < 100) {
            _soundVolume = volume;
         } else {
            console.log("Громкость может быть в диапазоне от 0 до 100");
            }
      } else {
          console.log(_soundVolume);  
      }
   };  
};

var player = new CreatePlayer(); 

player.getSetSoundVolume();
player.getSetSoundVolume(500);
player.getSetSoundVolume();
player.getSetSoundVolume(50);
player.getSetSoundVolume();