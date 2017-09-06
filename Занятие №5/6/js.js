var player = {
   CurrentSong: 1,
   IsPlaying: 0,
};

var tv = {
};

function isEmpty(player) {
   for (var key in player) {
      return false;
   };
   return true;
}

 console.log(isEmpty(player));
 console.log(isEmpty(tv));