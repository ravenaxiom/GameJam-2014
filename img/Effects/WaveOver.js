(function(window) {
WaveOvernotification_instance_1 = function() {
	this.initialize();
}
WaveOvernotification_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["WaveOver.png"], frames: [[0,0,192,532,0,129.2,261.05],[197,0,192,532,0,129.2,261.05],[394,0,192,532,0,129.2,261.05],[591,0,192,532,0,129.2,261.05],[788,0,192,532,0,129.2,261.05],[985,0,192,532,0,129.2,261.05],[1182,0,192,532,0,129.2,261.05],[1379,0,192,532,0,129.2,261.05],[1576,0,192,532,0,129.2,261.05],[1773,0,192,532,0,129.2,261.05],[0,537,192,532,0,129.2,261.05],[197,537,192,532,0,129.2,261.05],[394,537,192,532,0,129.2,261.05],[591,537,192,532,0,129.2,261.05],[788,537,192,532,0,129.2,261.05],[985,537,192,532,0,129.2,261.05],[1182,537,192,532,0,129.2,261.05],[1379,537,192,532,0,129.2,261.05],[1576,537,192,532,0,129.2,261.05],[1773,537,192,532,0,129.2,261.05],[0,1074,192,532,0,129.2,261.05],[197,1074,192,532,0,129.2,261.05],[394,1074,192,532,0,129.2,261.05],[591,1074,192,532,0,129.2,261.05],[788,1074,192,532,0,129.2,261.05],[985,1074,192,532,0,129.2,261.05],[1182,1074,192,532,0,129.2,261.05],[1379,1074,192,532,0,129.2,261.05],[1576,1074,192,532,0,129.2,261.05],[1773,1074,192,532,0,129.2,261.05],[0,1611,192,532,0,129.2,261.05],[197,1611,192,532,0,129.2,261.05],[394,1611,192,532,0,129.2,261.05],[591,1611,192,532,0,129.2,261.05],[788,1611,192,532,0,129.2,261.05],[985,1611,192,532,0,129.2,261.05],[1182,1611,192,532,0,129.2,261.05],[1379,1611,192,532,0,129.2,261.05],[1576,1611,192,532,0,129.2,261.05],[1773,1611,192,532,0,129.2,261.05],[0,2148,192,532,0,129.2,261.05],[197,2148,192,532,0,129.2,261.05],[394,2148,192,532,0,129.2,261.05],[591,2148,192,532,0,129.2,261.05],[788,2148,192,532,0,129.2,261.05],[985,2148,192,532,0,129.2,261.05],[1182,2148,192,532,0,129.2,261.05],[1379,2148,192,532,0,129.2,261.05]]});
var WaveOvernotification_instance_1_p = WaveOvernotification_instance_1.prototype = new createjs.BitmapAnimation();
WaveOvernotification_instance_1_p.BitmapAnimation_initialize = WaveOvernotification_instance_1_p.initialize;
WaveOvernotification_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(WaveOvernotification_instance_1._SpriteSheet);
	this.paused = false;
}
window.WaveOvernotification_instance_1 = WaveOvernotification_instance_1;
}(window));

