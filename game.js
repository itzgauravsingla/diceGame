var rd1 = Math.ceil(Math.random()*6);
var rd2 = Math.ceil(Math.random()*6);

var img1 = "images/dice"+rd1+".png";
var img2 = "images/dice"+rd2+".png";

var die1 = document.querySelector(".img1");
var die2 = document.querySelector(".img2");
var head = document.querySelector("h1");

die1.setAttribute("src", img1);
die2.setAttribute('src', img2);

if(rd1 > rd2)
    head.innerHTML = "Player 1 Wins 💥";
else if(rd1 === rd2)
    head.innerHTML = "Refresh Me";
else
    head.innerHTML = "Player 2 Wins 💥";