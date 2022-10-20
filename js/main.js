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
    var scoreBarImg = "assets/png/scoreBarspritesheet.png";
	var userAreaImg = "assets/png/userAreaBg.png";

    game.preload(userImg,scoreBarImg,userAreaImg);

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
			this.color ="Black";
			this.font = "bold 26px sans-serif";
			
			
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
		for (i = 0; i < numOfPlayers; i++) {
           usersNames[i] = new labelClass(100+10, offsetY+7.2-25 + i * 100);
            scene.addChild(usersNames[i]);
        }

        ///////////////////////////Player Name Creation ** Ends////////////////////////////////////////////////////
		
		///////////////////////////userAreaBackground Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            userAreaBgSprite[i] = new userAreaBgSprite(0, offsetY+7.2-45 + i * 100, i<5?i:1+i);
            scene.insertBefore(userAreaBgSprite[i],scene.firstChild);
        }
        ///////////////////////////userAreaBackground Creation ** Ends////////////////////////////////////////////////////

        ///////////////////////////Left Side Area ** Ends//////////////////////////////////////////////////////////////////////////////////////////


        ///////////////////////////Right Side Area ** Begins////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////Right Side Area ** Ends//////////////////////////////////////////////////////////////////////////////////////////
        return scene;
    };
    game.onload = function () {
        game.replaceScene(scoreScreen());
    }
    game.start();
}
