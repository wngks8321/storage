"use strict";

let nemo = {
  position_x : 0,
  position_y : 0,
  speed_x : 1,
  speed_y : 1,
  state : 'off',
};
// window.onload = function() {
  var btnStart = document.getElementById('btnStart');
  var btnStop = document.getElementById('btnStop');
  var btnReset = document.getElementById('btnReset');
  var btnColor = document.getElementById('btnColor');

  btnStart.onclick = function() {
    if(nemo.state ==='off'){
      nemo.state = "on";
      nemo.inter = setInterval(move, 1);
    }
  };
  btnStop.onclick = function() {
    if(nemo.state === "on"){
      nemo.state = "off";
      nemo.inter = clearInterval(nemo.inter);
      nemo.interv = clearInterval(nemo.interv);
    };
  };
  btnReset.onclick = function() {
    var box = document.getElementById('smallDiv');
    nemo.inter = clearInterval(nemo.inter);
    nemo.interv = clearInterval(nemo.interv);
    nemo.state = "off";
    box.style.left = 0;
    box.style.top = 0;
    nemo.speed_x = ini_x;
    nemo.speed_y = ini_y;
    nemo.position_x = 0;
    nemo.position_y = 0;
    box.style.background = "red";
  };
  btnColor.onclick = function () {
    nemo.interv = setInterval(changeColor,500);
  };
// };


let ini_x = nemo.speed_x = 1;
let ini_y = nemo.speed_y = 1;

function move() {

  var box = document.getElementById('smallDiv');

  nemo.position_x += nemo.speed_x ;
  nemo.position_y += nemo.speed_y ;
  if (nemo.position_y >= 550){
    nemo.speed_y = -nemo.speed_y;
  } else if (nemo.position_x >= 750){
    nemo.speed_x = -nemo.speed_x;
  } else if (nemo.position_y <= 0){
    nemo.speed_y = -nemo.speed_y;
  } else if (nemo.position_x <= 0){
    nemo.speed_x = -nemo.speed_x;
  }
  box.style.left = nemo.position_x + "px";
  box.style.top = nemo.position_y + "px";
}
function changeColor() {
  var box = document.getElementById('smallDiv');
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);

  var random_color = "rgb(" + r + "," + g + "," + b + ")";
  console.log(random_color);
  box.style.background = random_color ;
}
