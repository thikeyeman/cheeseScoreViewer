enchant();

var numOfPlayers = 5;

var screenWidth = 1920;
var screenHeight = 1080;
var offsetX = 500;
var offsetY = 580;

var usersSprite = [];
var usersNames = [];
var usersScores = [];
var scoreBarsSprite = [];

var i,j,k;

window.onload = function () {
    var game = new Core(screenWidth, screenHeight);
    game.fps = 30;

    var userImg = "assets/png/userspritesheet.png";

    var mvpImage = "assets/png/medalsspritesheet.png";
    var starImage = "assets/png/starbannerspritesheet.png";

    game.preload(userImg, mvpImage, starImage);

    var scoreBarImg = "assets/png/scoreBarspritesheet.png";
	var userAreaImg = "assets/png/userAreaBg.png";

<<<<<<< HEAD
  
=======
    game.preload(userImg,scoreBarImg,userAreaImg);
>>>>>>> yeman

    //user image
    var userSprite = Class.create(Sprite, {
        initialize: function (x, y, frame) {
            Sprite.call(this, 60, 53);
            this.image = game.assets[userImg];
            this.x = x;
            this.y = y;
            this.frame = frame;
        }
    })

    //mvp image
    var mvpSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 62, 86);
            this.image = game.assets[mvpImage];
            this.x = x;
            this.y = y;
        }
    })
    //star banner image
    var starSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 327, 216);
            this.image = game.assets[starImage];
            this.x = x;
            this.y = y;
            this.scaleX = 1;
            this.scaleY = 1;
        }
    })

	
	//scoreBar image
    var scoreBarSprite = Class.create(Sprite, {
        initialize: function (x, y, frame) {
            Sprite.call(this, 334, 48);
            this.image = game.assets[scoreBarImg];
            this.x = x;
            this.y = y;
			this.scaleY = 0.7;
            this.frame = frame;
        }
    })
	
	//label
	var labelClass = Class.create(Label,{
		initialize: function(x,y){
			enchant.Label.call(this,"クロ情報TA");
			this.x = x;
			this.y = y;
			this.color ="Red";
			this.size = 30;
			
			
		}
	})
	
	//userAreaBackground image
	var userAreaBgSprite = Class.create(Sprite,{
		initialize: function(x,y, frame){
			Sprite.call(this, 524, 118);
			this.image = game.assets[userAreaImg];
			this.x = x;
			this.y = y;
			this.scaleY =0.8;
			this.frame = frame;
			
			
		}
	})


    var scoreScreen = function () {
        var scene = new Scene();
        ///////////////////////////Left Side Area ** Begins/////////////////////////////////////////////////////////////////////////////////////////


        ///////////////////////////Player Icon Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            usersSprite[i] = new userSprite(10, offsetY + i * 100, i<5?i:1+i);
            scene.addChild(usersSprite[i]);
        }
        ///////////////////////////Player Icon Creation ** Ends////////////////////////////////////////////////////
		
		///////////////////////////scoreBar Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            scoreBarsSprite[i] = new scoreBarSprite(100+10, offsetY+7.2 + i * 100, i<5?i:1+i);
            scene.addChild(scoreBarsSprite[i]);
        }
        ///////////////////////////scoreBar Creation ** Ends////////////////////////////////////////////////////


        ///////////////////////////Player Name Creation ** Begins///////////////////////////////////////////////////

        for (var i = 0; i < numOfPlayers; i++) {
            usersNames[i] = usernameLabel(10, 100);
            scene.addChild(usersSprite[i]);
        }


		for (i = 0; i < numOfPlayers; i++) {
           usersNames[i] = new labelClass(100+10, offsetY+7.2-20 + i * 100);
            scene.addChild(usersNames[i]);
        }


        ///////////////////////////Player Name Creation ** Ends////////////////////////////////////////////////////
		
		///////////////////////////userAreaBackground Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            userAreaBgSprite[i] = new userAreaBgSprite(0, offsetY+7.2-35 + i * 100, i<5?i:1+i);
            scene.insertBefore(userAreaBgSprite[i],scene.firstChild);
        }
        ///////////////////////////userAreaBackground Creation ** Ends////////////////////////////////////////////////////

        ///////////////////////////Left Side Area ** Ends//////////////////////////////////////////////////////////////////////////////////////////

        ///////////////////////////Right Side Area ** Begins////////////////////////////////////////////////////////////////////////////////////////

        ///////////////////////////Mvp   Creation ** Begins///////////////////////////////////////////////////
        var mvpMedal = new mvpSprite(offsetX*3.1, offsetY *1.6);
        mvpMedal.frame = 1;
        scene.addChild(mvpMedal);
        mvpMedal.addEventListener("enterframe", function () {
            this.frame = (this.age / 150) % 3;
        })
        /////////////////////////////////////////////////star banner //////////////////////////////////
        var starSpritebanner = new starSprite(offsetX*3.1, offsetY *1.2);
        starSpritebanner.frame = 1;
        scene.addChild(starSpritebanner);
        starSpritebanner.addEventListener("enterframe", function () {
            this.frame = this.age % 4;
        })

        ///////////////////////////Right Side Area ** Ends//////////////////////////////////////////////////////////////////////////////////////////
        return scene;
    };
    game.onload = function () {
        game.replaceScene(scoreScreen());
    }
    game.start();
}
