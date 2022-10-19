enchant();
var screenWidth = 1000;
var screenHeight = 1000;

window.onload = function () {
    var game = new Core(screenWidth, screenHeight);
    game.fps = 30;

    var userImg = "../assets/user.png";

    game.preload(userImg);
	
	//user image
    var userSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 95, 83);
            this.image = game.assets[userImg];
            this.x = x;
            this.y = y;
        }
    })
	
    var scoreScene = function () {
        var scene = new Scene();
		var user = new userSprite(10,10);
		scene.addChild(user);
        return scene;
    };
    game.onload = function () {
        game.replaceScene(scoreScreen());
    }
    game.start();
}
