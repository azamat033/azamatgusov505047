var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var tank = new Image();
var pull = new Image();
var bg = new Image();

tank.scr = "tank1.png";
pull.scr = "pull.png";
bg = "fon.jpg"

function draw() {
	ctx. drawImage(tank, 0, 0);
	ctx. drawImage(fon, 0, 0);
}
bg.onload = draw;