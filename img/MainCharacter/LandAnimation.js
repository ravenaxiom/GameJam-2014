(function(window) {
LandAnim'_instance_1 = function() {
	this.initialize();
}
LandAnim'_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["LandAnimation.png"], frames: [[0,0,76,109,0,5.5,10.95],[76,0,76,109,0,5.5,10.95],[152,0,76,109,0,5.5,10.95],[0,109,76,109,0,5.5,10.95],[76,109,76,109,0,5.5,10.95],[152,109,76,109,0,5.5,10.95]]});
var LandAnim'_instance_1_p = LandAnim'_instance_1.prototype = new createjs.BitmapAnimation();
LandAnim'_instance_1_p.BitmapAnimation_initialize = LandAnim'_instance_1_p.initialize;
LandAnim'_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(LandAnim'_instance_1._SpriteSheet);
	this.paused = false;
}
window.LandAnim'_instance_1 = LandAnim'_instance_1;
}(window));

