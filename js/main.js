enchant();

var numOfPlayers = 5;

var screenWidth = 1000;
var screenHeight = 1000;
var offsetX = 500;
var offsetY = 500;

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

    game.preload(userImg,scoreBarImg);

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
			this.fontSize = 30;
			this.color = "white";
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
           usersNames[i] = new labelClass(100+10, offsetY+7.2-20 + i * 100);
            scene.addChild(usersNames[i]);
        }

        ///////////////////////////Player Name Creation ** Ends////////////////////////////////////////////////////

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
