(function(window) {
balloonpig_instance_1 = function() {
	this.initialize();
}
balloonpig_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["FlyPig.png"], frames: [[0,0,78,239,0,37.9,237.7],[78,0,78,239,0,37.9,237.7],[156,0,78,239,0,37.9,237.7],[234,0,78,239,0,37.9,237.7],[312,0,78,239,0,37.9,237.7],[390,0,78,239,0,37.9,237.7],[468,0,78,239,0,37.9,237.7],[546,0,78,239,0,37.9,237.7],[624,0,78,239,0,37.9,237.7],[702,0,78,239,0,37.9,237.7],[780,0,78,239,0,37.9,237.7],[858,0,78,239,0,37.9,237.7],[936,0,78,239,0,37.9,237.7],[0,239,78,239,0,37.9,237.7],[78,239,78,239,0,37.9,237.7],[156,239,78,239,0,37.9,237.7],[234,239,78,239,0,37.9,237.7],[312,239,78,239,0,37.9,237.7],[390,239,78,239,0,37.9,237.7],[468,239,78,239,0,37.9,237.7],[546,239,78,239,0,37.9,237.7],[624,239,78,239,0,37.9,237.7],[702,239,78,239,0,37.9,237.7],[780,239,78,239,0,37.9,237.7],[858,239,78,239,0,37.9,237.7],[936,239,78,239,0,37.9,237.7],[0,478,78,239,0,37.9,237.7],[78,478,78,239,0,37.9,237.7],[156,478,78,239,0,37.9,237.7],[234,478,78,239,0,37.9,237.7]]});
var balloonpig_instance_1_p = balloonpig_instance_1.prototype = new createjs.BitmapAnimation();
balloonpig_instance_1_p.BitmapAnimation_initialize = balloonpig_instance_1_p.initialize;
balloonpig_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(balloonpig_instance_1._SpriteSheet);
	this.paused = false;
}
window.balloonpig_instance_1 = balloonpig_instance_1;
}(window));

