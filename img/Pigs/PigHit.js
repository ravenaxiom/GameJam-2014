(function(window) {
HitBackPig_instance_1 = function() {
	this.initialize();
}
HitBackPig_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["PigHit.png"], frames: [[0,0,58,58,0,3.4,4.15],[58,0,58,58,0,3.4,4.15],[116,0,58,58,0,3.4,4.15],[174,0,58,58,0,3.4,4.15],[0,58,58,58,0,3.4,4.15],[58,58,58,58,0,3.4,4.15],[116,58,58,58,0,3.4,4.15],[174,58,58,58,0,3.4,4.15],[0,116,58,58,0,3.4,4.15],[58,116,58,58,0,3.4,4.15],[116,116,58,58,0,3.4,4.15],[174,116,58,58,0,3.4,4.15],[0,174,58,58,0,3.4,4.15],[58,174,58,58,0,3.4,4.15],[116,174,58,58,0,3.4,4.15]]});
var HitBackPig_instance_1_p = HitBackPig_instance_1.prototype = new createjs.BitmapAnimation();
HitBackPig_instance_1_p.BitmapAnimation_initialize = HitBackPig_instance_1_p.initialize;
HitBackPig_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(HitBackPig_instance_1._SpriteSheet);
	this.paused = false;
}
window.HitBackPig_instance_1 = HitBackPig_instance_1;
}(window));

