"use strict"

function createTv() {
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

function createPlayer() {
   this.CurrentSong = 0;
   this.IsPlaying = 0;
   
   this.PlaySong = function () {
      this.IsPlaying=1;
   };
   
   this.StopSong = function () {
      this.IsPlaying=0;
   };   
   
   this.nextSong = function () {
     this.CurrentSong++;
   };
   
   this.previousSong = function () {
      this.CurrentSong--;
   };
   
   this.setSong = function (number) {
      this.CurrentSong=number;
   };   
}

var tv = new createTv();
var player = new createPlayer();
