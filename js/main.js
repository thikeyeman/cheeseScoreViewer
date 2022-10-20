enchant();

var numOfPlayers = 5;

var screenWidth = 1920;
var screenHeight = 1080;
var offsetX = 500;
var offsetY = 580;

var usersSprite = [];
var usersNames = [];
var usersScores = [];

window.onload = function () {
    var game = new Core(screenWidth, screenHeight);
    game.fps = 30;

    var userImg = "assets/png/userspritesheet.png";
    var mvpImage = "assets/png/medalsspritesheet.png";
    var starImage = "assets/png/starbannerspritesheet.png";

    game.preload(userImg, mvpImage, starImage);

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
        for (var i = 0; i < numOfPlayers; i++) {
            usersNames[i] = usernameLabel(10, 100);
            scene.addChild(usersSprite[i]);
        }


        ///////////////////////////Player Name Creation ** Ends////////////////////////////////////////////////////

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
