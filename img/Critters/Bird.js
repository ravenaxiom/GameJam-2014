(function(window) {
BirdAnim_instance_1 = function() {
	this.initialize();
}
BirdAnim_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Bird.png"], frames: [[0,0,8,9,0,5.1,5.3],[8,0,8,9,0,5.1,5.3],[16,0,8,9,0,5.1,5.3],[24,0,8,9,0,5.1,5.3],[0,9,8,9,0,5.1,5.3],[8,9,8,9,0,5.1,5.3],[16,9,8,9,0,5.1,5.3],[24,9,8,9,0,5.1,5.3],[0,18,8,9,0,5.1,5.3],[8,18,8,9,0,5.1,5.3],[16,18,8,9,0,5.1,5.3],[24,18,8,9,0,5.1,5.3],[0,27,8,9,0,5.1,5.3],[8,27,8,9,0,5.1,5.3]]});
var BirdAnim_instance_1_p = BirdAnim_instance_1.prototype = new createjs.BitmapAnimation();
BirdAnim_instance_1_p.BitmapAnimation_initialize = BirdAnim_instance_1_p.initialize;
BirdAnim_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(BirdAnim_instance_1._SpriteSheet);
	this.paused = false;
}
window.BirdAnim_instance_1 = BirdAnim_instance_1;
}(window));

