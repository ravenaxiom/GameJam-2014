(function(window) {
RunPig_instance_1 = function() {
	this.initialize();
}
RunPig_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["PigRun.png"], frames: [[0,0,56,70,0,27.75,67.7],[56,0,56,70,0,27.75,67.7],[112,0,56,70,0,27.75,67.7],[168,0,56,70,0,27.75,67.7],[0,70,56,70,0,27.75,67.7],[56,70,56,70,0,27.75,67.7],[112,70,56,70,0,27.75,67.7],[168,70,56,70,0,27.75,67.7],[0,140,56,70,0,27.75,67.7],[56,140,56,70,0,27.75,67.7],[112,140,56,70,0,27.75,67.7],[168,140,56,70,0,27.75,67.7],[0,210,56,70,0,27.75,67.7],[56,210,56,70,0,27.75,67.7],[112,210,56,70,0,27.75,67.7],[168,210,56,70,0,27.75,67.7],[0,280,56,70,0,27.75,67.7],[56,280,56,70,0,27.75,67.7],[112,280,56,70,0,27.75,67.7],[168,280,56,70,0,27.75,67.7],[0,350,56,70,0,27.75,67.7],[56,350,56,70,0,27.75,67.7]]});
var RunPig_instance_1_p = RunPig_instance_1.prototype = new createjs.BitmapAnimation();
RunPig_instance_1_p.BitmapAnimation_initialize = RunPig_instance_1_p.initialize;
RunPig_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(RunPig_instance_1._SpriteSheet);
	this.paused = false;
}
window.RunPig_instance_1 = RunPig_instance_1;
}(window));

