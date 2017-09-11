"use strict"

function Tv() {
   this.currentChannel = 0;
   
   this.nextChannel = function () {
      this.currentChannel++;
   };
   
   this.previousChannel = function () {
      this.currentChannel--;
   };   
   
   this.setChannel = function (number) {
      this.currentChannel=number;
   };   
}

function Player() {
   this.currentSong = 0;
   this.isPlaying = 0;
   
   this.playSong = function () {
      this.isPlaying=1;
   };
   
   this.stopSong = function () {
      this.isPlaying=0;
   };   
   
   this.nextSong = function () {
     this.currentSong++;
   };
   
   this.previousSong = function () {
      this.currentSong--;
   };
   
   this.setSong = function (number) {
      this.currentSong=number;
   };   
}

var tv = new Tv();
var player = new Player();