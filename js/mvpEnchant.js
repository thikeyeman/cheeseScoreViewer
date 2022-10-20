enchant();
var startX= 100;
var startY=100;


window.onload = function (){
var game = new Core(1920,1080);
game.fps  = 10;

var MvpGoldImage = "../Assets/Illustrator Files/SVG/gold.svg";
game.preload(MvpGoldImage);

var MvpGoldSprite = Class.create(Sprite, {
    initialize: function (x, y) {
        Sprite.call(this, 57, 52);
        this.image = game.assets[MvpGoldImage];
        this.x = x;
        this.y = y;
        this.scaleX = 1.7;
        this.scaleY = 1.7;
    }
})

}