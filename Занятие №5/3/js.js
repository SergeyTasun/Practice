var tv = {
   currentChannel: 0,

   nextChannel: function () {
     this.currentChannel++;
   },
   
   previousChannel: function () {
      this.currentChannel--;
   },
   
   setChannel: function (number) {
      this.currentChannel=number;
   } 
};

tv.nextChannel(); // 1
tv.nextChannel(); // 2
tv.nextChannel(); // 3
console.log(tv.currentChannel); //3

tv.previousChannel(); // 2
console.log(tv.currentChannel); //2

tv.setChannel(5); // 5
console.log(tv.currentChannel); //5