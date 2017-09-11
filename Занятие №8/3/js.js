"use strict"

/* Задание №3. Прототипы. Типы объектов на прототипах
В задании про конструкторы объектов Занятие №06. JavaScript. ECMAScript 5. Объектно-ориентированное программирование, Задание №3. Конструкторы объектов измените определение типов объектов на прототипное.
 */

function Tv() {
   this.currentChannel = 0;
}

Tv.prototype.nextChannel = function () {
      this.currentChannel++;
   };

Tv.prototype.previousChannel = function () {
   this.currentChannel--;
};

Tv.prototype.setChannel = function (number) {
      this.currentChannel=number;
   };

function Player() {
   this.currentSong = 0;
   this.isPlaying = 0;
}

Player.prototype.playSong = function () {
      this.isPlaying=1;
   };

Player.prototype.stopSong = function () {
   this.isPlaying=0;
};

Player.prototype.nextSong = function () {
   this.currentSong++;
};

Player.prototype.previousSong = function () {
   this.currentSong--;
};
   
Player.prototype.setSong = function (number) {
   this.currentSong=number;
};
   
var tv = new Tv();
var player = new Player();