(function(window) {
HitBackPlayer_instance_1 = function() {
	this.initialize();
}
HitBackPlayer_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["HitBack.png"], frames: [[0,0,78,106,0,3,9.9],[83,0,78,106,0,3,9.9],[166,0,78,106,0,3,9.9],[0,111,78,106,0,3,9.9],[83,111,78,106,0,3,9.9],[166,111,78,106,0,3,9.9],[0,222,78,106,0,3,9.9],[83,222,78,106,0,3,9.9]]});
var HitBackPlayer_instance_1_p = HitBackPlayer_instance_1.prototype = new createjs.BitmapAnimation();
HitBackPlayer_instance_1_p.BitmapAnimation_initialize = HitBackPlayer_instance_1_p.initialize;
HitBackPlayer_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(HitBackPlayer_instance_1._SpriteSheet);
	this.paused = false;
}
window.HitBackPlayer_instance_1 = HitBackPlayer_instance_1;
}(window));

