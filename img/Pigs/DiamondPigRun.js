(function(window) {
DiamondPig_instance_1 = function() {
	this.initialize();
}
DiamondPig_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["DiamondPigRun.png"], frames: [[0,0,78,128,0,38.95,124.25],[78,0,78,128,0,38.95,124.25],[156,0,78,128,0,38.95,124.25],[234,0,78,128,0,38.95,124.25],[312,0,78,128,0,38.95,124.25],[390,0,78,128,0,38.95,124.25],[0,128,78,128,0,38.95,124.25],[78,128,78,128,0,38.95,124.25],[156,128,78,128,0,38.95,124.25],[234,128,78,128,0,38.95,124.25],[312,128,78,128,0,38.95,124.25],[390,128,78,128,0,38.95,124.25],[0,256,78,128,0,38.95,124.25],[78,256,78,128,0,38.95,124.25],[156,256,78,128,0,38.95,124.25],[234,256,78,128,0,38.95,124.25],[312,256,78,128,0,38.95,124.25],[390,256,78,128,0,38.95,124.25],[0,384,78,128,0,38.95,124.25],[78,384,78,128,0,38.95,124.25],[156,384,78,128,0,38.95,124.25],[234,384,78,128,0,38.95,124.25]]});
var DiamondPig_instance_1_p = DiamondPig_instance_1.prototype = new createjs.BitmapAnimation();
DiamondPig_instance_1_p.BitmapAnimation_initialize = DiamondPig_instance_1_p.initialize;
DiamondPig_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(DiamondPig_instance_1._SpriteSheet);
	this.paused = false;
}
window.DiamondPig_instance_1 = DiamondPig_instance_1;
}(window));

