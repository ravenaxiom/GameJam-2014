(function(window) {
IdleTurtle_instance_1 = function() {
	this.initialize();
}
IdleTurtle_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Turtle.png"], frames: [[0,0,269,148,0,134.15,146.45],[274,0,269,148,0,134.15,146.45],[548,0,269,148,0,134.15,146.45],[0,153,269,148,0,134.15,146.45],[274,153,269,148,0,134.15,146.45],[548,153,269,148,0,134.15,146.45],[0,306,269,148,0,134.15,146.45],[274,306,269,148,0,134.15,146.45],[548,306,269,148,0,134.15,146.45],[0,459,269,148,0,134.15,146.45],[274,459,269,148,0,134.15,146.45],[548,459,269,148,0,134.15,146.45],[0,612,269,148,0,134.15,146.45],[274,612,269,148,0,134.15,146.45],[548,612,269,148,0,134.15,146.45],[0,765,269,148,0,134.15,146.45]]});
var IdleTurtle_instance_1_p = IdleTurtle_instance_1.prototype = new createjs.BitmapAnimation();
IdleTurtle_instance_1_p.BitmapAnimation_initialize = IdleTurtle_instance_1_p.initialize;
IdleTurtle_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(IdleTurtle_instance_1._SpriteSheet);
	this.paused = false;
}
window.IdleTurtle_instance_1 = IdleTurtle_instance_1;
}(window));

