var player = {
   CurrentSong: 1,
   IsPlaying: 0,

   PlaySong: function () {
      this.IsPlaying=1;
   },

   StopSong: function () {
      this.IsPlaying=0;
   },
   
   nextSong: function () {
     this.CurrentSong++;
   },
   
   previousSong: function () {
      this.CurrentSong--;
   },
   
   setSong: function (number) {
      this.CurrentSong=number;
   } 

};

player.PlaySong(); // 1
console.log(player.IsPlaying); //1

player.StopSong(); // 0
console.log(player.IsPlaying); //0

player.setSong(5); // 5
console.log(player.CurrentSong); //5

player.PlaySong(); // 1
console.log(player.CurrentSong); //5
console.log(player.IsPlaying); //1
