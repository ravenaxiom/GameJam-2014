GJ.Assets = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var queue;



	// Private methods ////////////////////////////////////////////

	var loadQueued = function () {
		queue.loadManifest([
			// effects
			{id: 'EffectExplosionSmall', src:'img/Effects/ExplosionSmall.png'},
			{id: 'EffectHitEffect', src:'img/Effects/EffectHitEffect.png'},
			{id: 'EffectJumpSmoke', src:'img/Effects/JumpSmoke.png'},
			{id: 'EffectRunningSmoke', src:'img/Effects/RunningSmoke.png'},

			// main character
			{id: 'MainCharacterIdle', src:'img/MainCharacter/Idle.png'},
			{id: 'MainCharacterRun', src:'img/MainCharacter/Run.png'},
			{id: 'MainCharacterJump', src:'img/MainCharacter/Jumping-NoLoop.png'},
			{id: 'MainCharacterShoot', src:'img/MainCharacter/ThrowDiamond.png'},
			{id: 'MainCharacterPickaxe', src:'img/MainCharacter/Pickaxing.png'},

			// turtle
			{id: 'TurtleIdle', src:'img/Turtle/Turtle.png'},

			// pigs
			{id: 'PigRun', src:'img/Pigs/PigRun.png'},
			{id: 'PigHit', src:'img/Pigs/PigHit.png'},
			{id: 'PigCollect', src:'img/Pigs/PigCollect.png'},
			{id: 'PigGemRun', src:'img/Pigs/DiamondPigRun.png'},
			{id: 'PigBombRun', src:'img/Pigs/BombPigRun.png'},
			{id: 'PigBombExplode', src:'img/Pigs/ExplodingPig.png'},

			// particles
			{id: 'ParticleBacon', src:'img/Particles/BaconParticle.png'},

			// bullets
			{id: 'BulletGem', src:'img/Particles/Diamond.png'},			

			// scene
			{id: 'SceneBGMain', src:'img/Scene/BGMain.png'},
			{id: 'SceneDecoration', src:'img/Scene/Decoration.png'},
			{id: 'SceneGround', src:'img/Scene/Ground.png'},
			{id: 'SceneForeground', src:'img/Scene/Foreground.png'},
			{id: 'SceneMine', src:'img/Scene/MineState1.png'},
			{id: 'SceneCloud1', src:'img/Scene/Cloud1.png'},
			{id: 'SceneCloud2', src:'img/Scene/Cloud2.png'},
			{id: 'SceneCloud3', src:'img/Scene/Cloud3.png'},

			{id: 'sprite1', src:'img/sprite1.jpg'},
			{id: 'sprite2', src:'img/sprite2.jpg'},
			{id: 'sprite3', src:'img/sprite3.jpg'},

			{id: 'amb_birdsong', src:'audio/amb_birdsong.ogg', data: 4},
			{id: 'footstep_grass_01', src:'audio/footstep_grass_01.ogg', data: 4},
			{id: 'footstep_grass_02', src:'audio/footstep_grass_02.ogg', data: 4},
			{id: 'footstep_grass_03', src:'audio/footstep_grass_03.ogg', data: 4},
			{id: 'footstep_grass_04', src:'audio/footstep_grass_04.ogg', data: 4},
			{id: 'footstep_grass_05', src:'audio/footstep_grass_05.ogg', data: 4},
			{id: 'footstep_grass_06', src:'audio/footstep_grass_06.ogg', data: 4},
			{id: 'footstep_grass_07', src:'audio/footstep_grass_07.ogg', data: 4},
			{id: 'footstep_grass_08', src:'audio/footstep_grass_08.ogg', data: 4},
			{id: 'footstep_land_01', src:'audio/footstep_land_01.ogg', data: 4},
			{id: 'footstep_land_02', src:'audio/footstep_land_02.ogg', data: 4},			
			{id: 'footstep_land_03', src:'audio/footstep_land_03.ogg', data: 4},
			{id: 'footstep_land_04', src:'audio/footstep_land_04.ogg', data: 4},
			{id: 'explosion_01', src:'audio/expl_01.ogg', data: 2},
			{id: 'explosion_02', src:'audio/expl_02.ogg', data: 2},
			{id: 'explosion_03', src:'audio/expl_03.ogg', data: 2},
			{id: 'explosion_04', src:'audio/expl_04.ogg', data: 2},
			{id: 'explosion_05', src:'audio/expl_05.ogg', data: 2},
			{id: 'explosion_06', src:'audio/expl_06.ogg', data: 2},
			{id: 'pig_snort_01', src:'audio/pig_snort_01.ogg', data: 2},
			{id: 'pig_snort_02', src:'audio/pig_snort_02.ogg', data: 2},
			{id: 'pig_snort_03', src:'audio/pig_snort_03.ogg', data: 2},
			{id: 'pig_snort_04', src:'audio/pig_snort_04.ogg', data: 2},
			{id: 'pig_snort_05', src:'audio/pig_snort_05.ogg', data: 2},
			{id: 'pig_snort_06', src:'audio/pig_snort_06.ogg', data: 2},
			{id: 'pig_snort_07', src:'audio/pig_snort_07.ogg', data: 2},
			{id: 'pig_snort_08', src:'audio/pig_snort_08.ogg', data: 2}
		]);
	};


	// Public methods /////////////////////////////////////////////

	return {
		init: function () {
			queue = new createjs.LoadQueue(false);
			createjs.Sound.alternateExtensions = ["m4a"]; // Audio: load m4a files in safari instead
			queue.installPlugin(createjs.Sound);
			queue.addEventListener("complete", GJ.Assets.loadComplete); // add this

			loadQueued();
		},

		loadComplete: function () {
			GJ.assetsReady();
		},

		get: function (id) {
			return queue.getResult(id);
		}
	};
}());