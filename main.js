// Animation made at https://www.khanacademy.org/partner-content/pixar/animate/ball/a/saving-your-animation

frameRate(24);
var n = 70;
var xArray = [0,3,7,10,15,19,23,30,36,43,48,54,60,63,66,69,72,75,84,98,112,125,137,150,162,174,186,198,216,234,252,277,303,328,338,349,359,371,383,395,392,390,388,385,382,379,369,359,348,335,322,309,290,271,253,238,223,208,193,180,166,151,137,124,110,98,85,74,64,62];
var yArray = [140,146,152,158,169,180,191,208,224,241,262,284,305,305,305,305,305,305,305,300,294,288,286,283,280,265,250,235,217,198,179,162,145,128,142,156,170,183,196,208,228,247,267,279,292,305,305,305,305,300,295,290,285,279,274,265,256,247,238,227,209,203,195,184,174,163,154,146,140,151];
var sArray = [50,47,45,42,40,37,35,33,32,31,32,35,34,28,22,15,10,5,0,6,13,20,27,35,42,37,32,28,24,22,20,21,22,19,31,38,46,56,68,83,48,50,53,54,47,22,18,15,14,17,27,43,55,64,70,70,64,54,58,60,61,62,61,61,59,57,53,53,54,55];
var rArray = [12,11,10,9,9,8,8,7,7,7,6,6,6,5,5,5,5,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var ball = getImage('pixar/luxoball');

var drawBall = function(img, x, y, r, s) {
	s = map(s, 0, 100, 0.1, 1.9);
	var rx = 32 * (2 - s);
	var ry = 32 * s;

	// Shadow
	pushMatrix();
	translate(x + 1, y - ry / 2 + 1);
	rotate(r);
	noStroke();
	fill(0, 0, 0, 60);
	ellipse(0, 0, rx - 3, ry - 3);
	popMatrix();

	// Ball
	pushMatrix();
	translate(x, y - ry / 2);
	rotate(r);
	image(img, -rx/2, -ry/2, rx, ry);
	popMatrix();
};

draw = function() {
	background(0);
	fill(230, 240, 255);
	noStroke();
	rect(-1, 75, width + 2, 250);
	fill(120, 200, 160);
	rect(-1, 305, width + 2, 20);
	strokeWeight(2);
	stroke(28, 173, 123);
	line(-1, 305, width + 1, 305);

	var x = xArray[frameCount % n];
	var y = yArray[frameCount % n];
	var r = rArray[frameCount % n];
	var s = sArray[frameCount % n];
	drawBall(ball, x, y, r, s);
};