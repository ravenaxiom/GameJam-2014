(function(window) {
FlyUpBalloon_instance_1 = function() {
	this.initialize();
}
FlyUpBalloon_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["BalloonFlyOff.png"], frames: [[0,0,289,374,0,78.8,378.65],[289,0,289,374,0,78.8,378.65],[578,0,289,374,0,78.8,378.65],[867,0,289,374,0,78.8,378.65],[1156,0,289,374,0,78.8,378.65],[1445,0,289,374,0,78.8,378.65],[1734,0,289,374,0,78.8,378.65],[0,374,289,374,0,78.8,378.65],[289,374,289,374,0,78.8,378.65],[578,374,289,374,0,78.8,378.65],[867,374,289,374,0,78.8,378.65],[1156,374,289,374,0,78.8,378.65],[1445,374,289,374,0,78.8,378.65],[1734,374,289,374,0,78.8,378.65],[0,748,289,374,0,78.8,378.65],[289,748,289,374,0,78.8,378.65],[578,748,289,374,0,78.8,378.65],[867,748,289,374,0,78.8,378.65],[1156,748,289,374,0,78.8,378.65],[1445,748,289,374,0,78.8,378.65],[1734,748,289,374,0,78.8,378.65],[0,1122,289,374,0,78.8,378.65]]});
var FlyUpBalloon_instance_1_p = FlyUpBalloon_instance_1.prototype = new createjs.BitmapAnimation();
FlyUpBalloon_instance_1_p.BitmapAnimation_initialize = FlyUpBalloon_instance_1_p.initialize;
FlyUpBalloon_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(FlyUpBalloon_instance_1._SpriteSheet);
	this.paused = false;
}
window.FlyUpBalloon_instance_1 = FlyUpBalloon_instance_1;
}(window));

