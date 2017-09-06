"use strict"

var user = {
   name: "Tom"
};

function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}

var tomFormat1 = function(beginMsg, endMsg) {
   format.call(user, beginMsg, endMsg);
}

var tomFormat2 = format.bind(user);

tomFormat1("<<<", ">>>"); // "<<<Tom>>>"
tomFormat2("<<<", ">>>"); // "<<<Tom>>>"