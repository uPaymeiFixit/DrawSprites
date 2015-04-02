/*
 * @author Josh GIbbs - uPaymeiFixit@gmail.com
*/

var ctx,WIDTH,HEIGHT,player;

window.onload = function (){
	ctx = document.getElementById("canvas").getContext("2d");
	setup();
	makePlayer();
	setInterval('main()',1000/10);
};

window.onresize = setup;

function setup(){
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	ctx.canvas.width = WIDTH;
	ctx.canvas.height = HEIGHT;
};

function makePlayer() {
	player={x: WIDTH / 2,
			y: HEIGHT / 2,
			image: new Image(),
			width: 100,
			height: 100}
	player.image.src = 'images/Calibration.png';
};

function main() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	draw(player);
};

function draw(ob) {
	ctx.drawImage(player.image, 0,0,1000,100);
	ctx.drawSprite(ob);
};