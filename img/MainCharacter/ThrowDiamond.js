(function(window) {
ShootCat_instance_1 = function() {
	this.initialize();
}
ShootCat_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["ThrowDiamond.png"], frames: [[0,0,132,97,0,68.1,95.85],[132,0,132,97,0,68.1,95.85],[264,0,132,97,0,68.1,95.85],[0,97,132,97,0,68.1,95.85],[132,97,132,97,0,68.1,95.85],[264,97,132,97,0,68.1,95.85],[0,194,132,97,0,68.1,95.85],[132,194,132,97,0,68.1,95.85],[264,194,132,97,0,68.1,95.85],[0,291,132,97,0,68.1,95.85],[132,291,132,97,0,68.1,95.85],[264,291,132,97,0,68.1,95.85],[0,388,132,97,0,68.1,95.85],[132,388,132,97,0,68.1,95.85],[264,388,132,97,0,68.1,95.85],[0,485,132,97,0,68.1,95.85],[132,485,132,97,0,68.1,95.85]]});
var ShootCat_instance_1_p = ShootCat_instance_1.prototype = new createjs.BitmapAnimation();
ShootCat_instance_1_p.BitmapAnimation_initialize = ShootCat_instance_1_p.initialize;
ShootCat_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(ShootCat_instance_1._SpriteSheet);
	this.paused = false;
}
window.ShootCat_instance_1 = ShootCat_instance_1;
}(window));

