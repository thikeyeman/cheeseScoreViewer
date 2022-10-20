enchant();

var numOfPlayers = 5;

var screenWidth = 1920;
var screenHeight = 1080;
var offsetX = 500;
var offsetY = 500;

var usersSprite = [];
var usersNames = [];
var usersScores = [];

window.onload = function () {
    var game = new Core(screenWidth, screenHeight);
    game.fps = 30;

    var userImg = "assets/png/userspritesheet.png";

    game.preload(userImg);

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

    var scoreScreen = function () {
        var scene = new Scene();
        ///////////////////////////Left Side Area ** Begins/////////////////////////////////////////////////////////////////////////////////////////


        ///////////////////////////Player Icon Creation ** Begins///////////////////////////////////////////////////
        for (var i = 0; i < numOfPlayers; i++) {
            usersSprite[i] = new userSprite(10, offsetY + i * 100, i < 5 ? i : 1 + i);
            scene.addChild(usersSprite[i]);
        }
        ///////////////////////////Player Icon Creation ** Ends////////////////////////////////////////////////////


        ///////////////////////////Player Name Creation ** Begins///////////////////////////////////////////////////
		for(var i = 0; i<numOfPlayers; i++){
			usersNames[i] = usernameLabel(10, 100);
			scene.addChild(usersSprite[i]);
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
