(function(window) {
IdleCat_instance_1 = function() {
	this.initialize();
}
IdleCat_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Idle.png"], frames: [[0,0,67,97,0,32.3,96.65],[67,0,67,97,0,32.3,96.65],[134,0,67,97,0,32.3,96.65],[0,97,67,97,0,32.3,96.65],[67,97,67,97,0,32.3,96.65],[134,97,67,97,0,32.3,96.65],[0,194,67,97,0,32.3,96.65],[67,194,67,97,0,32.3,96.65],[134,194,67,97,0,32.3,96.65],[0,291,67,97,0,32.3,96.65],[67,291,67,97,0,32.3,96.65],[134,291,67,97,0,32.3,96.65],[0,388,67,97,0,32.3,96.65]]});
var IdleCat_instance_1_p = IdleCat_instance_1.prototype = new createjs.BitmapAnimation();
IdleCat_instance_1_p.BitmapAnimation_initialize = IdleCat_instance_1_p.initialize;
IdleCat_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(IdleCat_instance_1._SpriteSheet);
	this.paused = false;
}
window.IdleCat_instance_1 = IdleCat_instance_1;
}(window));

