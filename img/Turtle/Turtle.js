(function(window) {
IdleTurtle_instance_1 = function() {
	this.initialize();
}
IdleTurtle_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Turtle.png"], frames: [[0,0,269,143,0,134.15,141.85],[274,0,269,143,0,134.15,141.85],[548,0,269,143,0,134.15,141.85],[0,148,269,143,0,134.15,141.85],[274,148,269,143,0,134.15,141.85],[548,148,269,143,0,134.15,141.85],[0,296,269,143,0,134.15,141.85],[274,296,269,143,0,134.15,141.85],[548,296,269,143,0,134.15,141.85],[0,444,269,143,0,134.15,141.85],[274,444,269,143,0,134.15,141.85],[548,444,269,143,0,134.15,141.85],[0,592,269,143,0,134.15,141.85],[274,592,269,143,0,134.15,141.85],[548,592,269,143,0,134.15,141.85],[0,740,269,143,0,134.15,141.85]]});
var IdleTurtle_instance_1_p = IdleTurtle_instance_1.prototype = new createjs.BitmapAnimation();
IdleTurtle_instance_1_p.BitmapAnimation_initialize = IdleTurtle_instance_1_p.initialize;
IdleTurtle_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(IdleTurtle_instance_1._SpriteSheet);
	this.paused = false;
}
window.IdleTurtle_instance_1 = IdleTurtle_instance_1;
}(window));

