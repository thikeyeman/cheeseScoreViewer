enchant();

var screenWidth = 1000;
var screenHeight = 1000;
window.onload = function(){
	var game = new Core(screenWidth,screenHeight);
	game.fps = 30;
	
	var userImg = "../Assets/Illustrator Files/user.svg"
	
	game.preload(userImg);
	
	game.onload = function(){
		
	}
	game.start;
}