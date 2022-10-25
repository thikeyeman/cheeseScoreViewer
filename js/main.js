/*var getUser = function (str) {
    $.get("php/fetchuser.php", function (data) {
        str.text = data;
    });
};
*/
/*let bestScores = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addScore = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let bestScore = {
    roundBestScore: document.getElementById('roundBestScore').value,
  }
  bestScores.push(bestScore);
  document.forms[0].reset(); // to clear the form for the next entries
  //document.querySelector('form').reset();

  //for display purposes only
  roundWinnerScore = '\n' + JSON.stringify(bestScores, '\t');

  //saving to localStorage
  localStorage.setItem('BestScoreList', JSON.stringify(bestScores));
}
console.log(roundWinnerScore.roundBestScore);
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addScore);
});*/

window.focus();

var game;
var i, j, k;


document.onkeyup = function (e) {
    game.keyflg = false;
    return true;
};
/*var usersNames = ["Yeman", "Luan", "Goan", "Tron", "John"];
usersNames[0] = $('#name1').val();*/
enchant();
var roundWinnerScore = [];
var numOfPlayers = 5;

var size = 40;
var a = 0;
var maxScore;
if (roundWinnerScore[0] == null) {
    maxScore = 0;
} else {
    maxScore = Math.max.apply(Math, roundWinnerScore);
}
var stored = new Array(size);
var inputPrompt = function () {
    if (a < size) {
        var input = prompt("ラウンド" + (a + 1) + "のベストスコアを入力してください。");
    }
    if (input) {
        stored[a] = input;
		$("#view").append(stored[a]+" ");
		console.log(stored[a]);
        a++;
    }
}
var numOfRounds = roundWinnerScore.length;

var screenWidth = 1920;
var screenHeight = 1080;
var offsetX = 500;
var offsetY = 600;

var usersSprite = [];
var usersNamesHolder = [];
var usersNamesHolder2 = [];
var mvpNamesHolder = [];
var playernameUpdater = function () {
    usersNamesHolder[0].text = $("#name0").val();
    usersNamesHolder[1].text = $("#name1").val();
    usersNamesHolder[2].text = $("#name2").val();
    usersNamesHolder[3].text = $("#name3").val();
    usersNamesHolder[4].text = $("#name4").val();

    usersNamesHolder2[0].text = $("#name0").val();
    usersNamesHolder2[1].text = $("#name1").val();
    usersNamesHolder2[2].text = $("#name2").val();
    usersNamesHolder2[3].text = $("#name3").val();
    usersNamesHolder2[4].text = $("#name4").val();

    mvpNamesHolder[0].text = maxScore * 100;
	roundWinnerScore[0] = stored[0];
	console.log(roundWinnerScore[0]);
}

var usersScores = [];

var playerScoreCounter = [];
for (i = 0; i < numOfPlayers; i++) {
    playerScoreCounter[i] = 0;
}

var scoreBars = [];
var scoreBarMaxWidth = 330;
var scoreBarsNumbers = [];

var balloonsSprite = [];
var linesSprite = [];
var graphBarsSprite = [];
var lineScore = ["0", "10", "20", "30"];
var lineScoreNumbers = [];
var balloonTextHolders = [];

var winnerScoreBox;
var roundText;
var roundWinnerScoreText = [];
var winnerBox;
var winnerStar;
var roundCounter = 0;

window.onload = function () {
    game = new Core(screenWidth, screenHeight);
    game.keyflg = false;
    game.fps = 30;
    var bgImg = "assets/png/greenBg.png";
    var userImg = "assets/png/userspritesheet.png";

    var mvpImage = "assets/png/medalsspritesheet.png";
    var starImage = "assets/png/starbannerspritesheetUpdate.png";
    var scoreBarImg = "assets/png/scoreBarspritesheet.png";
    var userAreaImg = "assets/png/userAreaBg.png";
    var cheeseImg = "assets/png/cheese.png";

    var balloonsImg = "assets/png/balloonsSpriteSheet.png";
    var balloonTextHolderImg = "assets/png/ballonTextHolder.png";
    var graphBarsImg = "assets/png/graphBarsSpriteSheet.png";
    var lineImg = "assets/png/line.png";

    var scoreBarImg1 = "assets/png/scoreBar1.png";
    var scoreBarImg2 = "assets/png/scoreBar2.png";
    var scoreBarImg3 = "assets/png/scoreBar3.png";
    var scoreBarImg4 = "assets/png/scoreBar4.png";
    var scoreBarImg5 = "assets/png/scoreBar5.png";

    var winnerStarImg = "assets/png/winnerStar.png";
    var winnerBoxImg = "assets/png/winnerBox.png";
    var winnerScoreBoxImg = "assets/png/winnerScoreBox.png";

    game.preload(userImg, scoreBarImg, mvpImage, starImage, userAreaImg, cheeseImg, bgImg, balloonsImg, balloonTextHolderImg, graphBarsImg, lineImg, scoreBarImg1, scoreBarImg2, scoreBarImg3, scoreBarImg4, scoreBarImg5, winnerBoxImg, winnerScoreBoxImg, winnerStarImg);

    game.keybind(87, "w");
    game.keybind(81, "q");
    game.keybind(69, "e");
    game.keybind(82, "r");
    game.keybind(84, "t");
    game.keybind(79, "o");
    game.keybind(80, "p");
    game.keybind(16, "shift");

    //user image
    var userSprite = Class.create(Sprite, {
        initialize: function (x, y, frame) {
            Sprite.call(this, 306, 307);
            this.image = game.assets[userImg];
            this.x = x;
            this.y = y;
            this.scaleX = 0.27;
            this.scaleY = 0.27;
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
            Sprite.call(this, 452, 353);
            this.image = game.assets[starImage];
            this.x = x;
            this.y = y;
            this.scaleX = 1;
            this.scaleY = 1;
        }
    })


    //scoreBar image
    /* var scoreBarSprite = Class.create(Sprite, {
         initialize: function (x, y, frame) {
             Sprite.call(this, 334, 48);
             this.image = game.assets[scoreBarImg];
             this.x = x;
             this.y = y;
             this.scaleY = 0.7;
             this.width = 0;
             this.frame = frame;
         }
     })*/
    var scoreBarSprite1 = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 334, 48);
            this.image = game.assets[scoreBarImg1];
            this.x = x;
            this.y = y;
            this.scaleY = 0.7;
            this.width = 0;
        }
    })
    var scoreBarSprite2 = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 334, 48);
            this.image = game.assets[scoreBarImg2];
            this.x = x;
            this.y = y;
            this.scaleY = 0.7;
            this.width = 0;
        }
    })
    var scoreBarSprite3 = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 334, 48);
            this.image = game.assets[scoreBarImg3];
            this.x = x;
            this.y = y;
            this.scaleY = 0.7;
            this.width = 0;
        }
    })
    var scoreBarSprite4 = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 334, 48);
            this.image = game.assets[scoreBarImg4];
            this.x = x;
            this.y = y;
            this.scaleY = 0.7;
            this.width = 0;
        }
    })
    var scoreBarSprite5 = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 334, 48);
            this.image = game.assets[scoreBarImg5];
            this.x = x;
            this.y = y;
            this.scaleY = 0.7;
            this.width = 0;
        }
    })

    //scoreBar image
    var cheeseSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 120, 108);
            this.image = game.assets[cheeseImg];
            this.x = x;
            this.y = y;
            this.scaleX = 0.4;
            this.scaleY = 0.4;

        }
    })

    //label
    var nameLabelClass = Class.create(Label, {
        initialize: function (x, y) {
            enchant.Label.call(this, "");
            this.x = x;
            this.y = y;
            this.color = "Black";
            this.size = 30;
            this.font = "bold 26px sans-serif";

        }
    })
    var scoreLabelClass = Class.create(Label, {
        initialize: function (x, y) {
            enchant.Label.call(this, "");
            this.x = x;
            this.y = y;
            this.color = "Black";
            this.size = 30;
            this.font = "bold 45px sans-serif";

        }
    })

    //userAreaBackground image
    var userAreaBgSprite = Class.create(Sprite, {
        initialize: function (x, y, frame) {
            Sprite.call(this, 524, 118);
            this.image = game.assets[userAreaImg];
            this.x = x;
            this.y = y;
            this.scaleY = 0.8;
            this.scaleX = 1.1;
            this.frame = frame;
        }
    })

    //balloon image
    var ballonSprite = Class.create(Sprite, {
        initialize: function (x, y, frame) {
            Sprite.call(this, 39, 78);
            this.image = game.assets[balloonsImg];
            this.x = x;
            this.y = y;
            this.frame = frame;
        }
    })

    //balloon text Holder image
    var ballonTextHolderSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 70, 28);
            this.image = game.assets[balloonTextHolderImg];
            this.x = x;
            this.y = y;
            this.scaleY = 1;
        }
    })

    //graph Bars image
    var graphBarSprite = Class.create(Sprite, {
        initialize: function (x, y, frame) {
            Sprite.call(this, 80, 632);
            this.image = game.assets[graphBarsImg];
            this.x = x;
            this.y = y;
            this.frame = frame;
        }
    })

    //line image
    var lineSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 523, 1);
            this.image = game.assets[lineImg];
            this.x = x;
            this.y = y;
        }
    })

    //winner Star image
    var winnerStarSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 327, 260);
            this.image = game.assets[winnerStarImg];
            this.x = x;
            this.y = y;
            this.scaleX = 1;
            this.scaleY = 1;
        }
    })

    //winner Score Box image
    var winnerScoreBoxSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 429, 133);
            this.image = game.assets[winnerScoreBoxImg];
            this.x = x;
            this.y = y;
            this.scaleX = 1;
            this.scaleY = 1;
        }
    })

    //winner Box image
    var winnerBoxSprite = Class.create(Sprite, {
        initialize: function (x, y) {
            Sprite.call(this, 453, 791);
            this.image = game.assets[winnerBoxImg];
            this.x = x;
            this.y = y;
            this.scaleX = 1;
            this.scaleY = 1;
        }
    })


    var scoreScreen = function () {
        var scene = new Scene();
        ///////////////////////////Left Side Area ** Begins/////////////////////////////////////////////////////////////////////////////////////////

        var userScoreBarGroup = new Group();

        ///////////////////////////Player Icon Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            usersSprite[i] = new userSprite(-90, offsetY - 130 + i * 100, i);
            userScoreBarGroup.addChild(usersSprite[i]);
        }

        ///////////////////////////scoreBar Creation ** Begins///////////////////////////////////////////////////

        scoreBars[0] = new scoreBarSprite1(100 + 10, offsetY + 7.2 + 0 * 100);
        scoreBars[1] = new scoreBarSprite2(100 + 10, offsetY + 7.2 + 1 * 100);
        scoreBars[2] = new scoreBarSprite3(100 + 10, offsetY + 7.2 + 2 * 100);
        scoreBars[3] = new scoreBarSprite4(100 + 10, offsetY + 7.2 + 3 * 100);
        scoreBars[4] = new scoreBarSprite5(100 + 10, offsetY + 7.2 + 4 * 100);
        for (i = 0; i < numOfPlayers; i++) {
            /*scoreBars[i] = new scoreBarSprite(100 + 10, offsetY + 7.2 + i * 100, i < 5 ? i : 1 + i);
			scoreBars[i].frame =i;*/
            userScoreBarGroup.addChild(scoreBars[i]);
        }

        ///////////////////////////Player Name Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            usersNamesHolder[i] = new nameLabelClass(100 + 10, offsetY + 7.2 - 25 + i * 100);
            userScoreBarGroup.addChild(usersNamesHolder[i]);
            /*getUser(usersNames[i]);*/
        }
        /*    ///////////////////////////Player Score Numbers Creation ** Begins///////////////////////////////////////////////////
            for (i = 0; i < numOfPlayers; i++) {
              usersScores[i] = new scoreLabelClass(100 + 330 + 20, offsetY + 7.2 + i * 100);
              userScoreBarGroup.addChild(usersScores[i]);
            }*/
        ///////////////////////////Player Score Numbers Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            usersScores[i] = new scoreLabelClass(100 + 330 + 10, offsetY + 7.2 + i * 100);
            usersScores[i].text = playerScoreCounter[i];
            userScoreBarGroup.addChild(usersScores[i]);
        }

        ///////////////////////////userAreaBackground & Cheese Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            var userAreaBg = new userAreaBgSprite(26.2, offsetY + 7.2 - 45 + i * 100, i < 5 ? i : 1 + i);
            userScoreBarGroup.insertBefore(userAreaBg, userScoreBarGroup.firstChild);

            var cheese = new cheeseSprite(100 + 330 + 45, offsetY + 7.2 - 35 + i * 100);
            userScoreBarGroup.addChild(cheese);
        }


        /////////////////////////Balloon Graph Area Begins/////////////////////////////////////////////////////////////////////////////////////
        var graphGroup = new Group();

        ///////////////////////////Adding Graph Backgrounds ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            graphBarsSprite[i] = new graphBarSprite(60 + i * 80, screenHeight - 685, i < 5 ? i : 1 + i);
            graphGroup.addChild(graphBarsSprite[i]);
        }
        ///////////////////////////Adding Lines* Begins///////////////////////////////////////////////////
        for (i = 0; i < 4; i++) {
            linesSprite[i] = new lineSprite(10, (screenHeight - 685 + 632) - 190 * i);
            graphGroup.addChild(linesSprite[i]);
        }
        ///////////////////////////Adding Line Scores* Begins///////////////////////////////////////////////////
        for (i = 0; i < 4; i++) {
            lineScoreNumbers[i] = new scoreLabelClass(0, (screenHeight - 685 + 632) - 40 - 190 * i);
            lineScoreNumbers[i].font = "bold 40px sans-serif";
            lineScoreNumbers[i].text = lineScore[i];
            graphGroup.addChild(lineScoreNumbers[i]);
        }
        ///////////////////////////Adding Text Holders ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            balloonTextHolders[i] = new ballonTextHolderSprite(65 + i * 80, screenHeight - 685 + 632 + 10);
            graphGroup.addChild(balloonTextHolders[i]);
        }
        ///////////////////////////Player Name Creation ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            usersNamesHolder2[i] = new nameLabelClass(65 + i * 80, screenHeight - 685 + 632 + 16);
            usersNamesHolder2[i].font = "16px sans-serif";
            graphGroup.addChild(usersNamesHolder2[i]);
            /*getUser(usersNames[i]);*/
        }
        ///////////////////////////Adding Balloons ** Begins///////////////////////////////////////////////////
        for (i = 0; i < numOfPlayers; i++) {
            balloonsSprite[i] = new ballonSprite(80 + i * 80, screenHeight - 685 + 632 - 39, i < 5 ? i : 1 + i);
            graphGroup.addChild(balloonsSprite[i]);
        }

        ///////////////////////////Right Side Area **Begins////////////////////////////////////////////////////////////////////////////////////////
        var mvpGroup = new Group();
        ///////////////////////////Mvp   Creation ** Begins///////////////////////////////////////////////////
        var mvpMedal = new mvpSprite(offsetX * 3.1, offsetY * 1.6);
        mvpMedal.frame = 0;
        /*mvpMedal.addEventListener("enterframe", function () {
          this.frame = (this.age / 150) % 3;
        })*/
        /////////////////////////////////////////////////star banner //////////////////////////////////
        var starSpritebanner = new starSprite(offsetX * 2.9, offsetY * 1.2); /// New Starbanner Update
        starSpritebanner.frame = 0;

        /////////////////////////////////////////////////star banner //////////////////////////////////
        mvpNamesHolder[0] = new nameLabelClass(offsetX * 3.22, offsetY * 1.6);
        mvpNamesHolder[0].font = "bold 60px sans-serif";

        var mvpAreaBg = new userAreaBgSprite(offsetX + 950, offsetY + 280, 0);
        mvpAreaBg.scaleX = 0.7;
        mvpAreaBg.scaleY = 2.2;
        var mvpAreaBg2 = new userAreaBgSprite(offsetX + 950, offsetY + 335, 0);
        mvpAreaBg2.scaleX = 0.55;
        mvpAreaBg2.scaleY = 1;


        /*    mvpGroup.insertBefore(mvpAreaBg, mvpGroup.firstChild);
            mvpGroup.insertBefore(mvpAreaBg2, mvpGroup.secondchild);*/
        mvpGroup.addChild(starSpritebanner);
        mvpGroup.addChild(mvpMedal);
        mvpGroup.addChild(mvpNamesHolder[0]);
        /// remove mvpMedal
        mvpGroup.removeChild(mvpMedal);

        ///////////////////////////Right Side Area **Ends//////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////Winner Area **Begins///////////////////////////////////////////////////////////////////////////////////////
        var winnerDisplayGroup = new Group();
        for (i = 0; i < roundCounter; i++) {
            roundWinnerScoreText[i] = new nameLabelClass(offsetX * (1.5 + 0.65), 175 + 163 + i * 70);
            roundWinnerScoreText[i].font = "26px sans-serif";
        }
        var createTable = function (x) {
            winnerBox = new winnerBoxSprite(offsetX * x, 100 + 163);
            winnerDisplayGroup.addChild(winnerBox);

            winnerStar = new winnerStarSprite(offsetX * x + 62, 57);
            winnerDisplayGroup.addChild(winnerStar);

            for (i = 0; i < 10; i++) {
                if (roundCounter != numOfRounds) {
                    winnerScoreBox = new winnerScoreBoxSprite(offsetX * x + 15, 120 + 163 + i * 70);
                    winnerDisplayGroup.addChild(winnerScoreBox);
                    roundText = new nameLabelClass(offsetX * (x + 0.15), 175 + 163 + i * 70);
                    roundText.font = "26px sans-serif";
                    roundText.text = "Round " + (roundCounter + 1);
                    roundWinnerScoreText[roundCounter] = new nameLabelClass(offsetX * (x + 0.65), 175 + 163 + i * 70);
                    roundWinnerScoreText[roundCounter].font = "26px sans-serif";
                    roundWinnerScoreText[roundCounter].text = roundWinnerScore[i];
                    winnerDisplayGroup.addChild(roundText);
                    winnerDisplayGroup.addChild(roundWinnerScoreText[roundCounter]);
                    roundCounter++;
                }

            }
        }
        if (numOfRounds <= 10) {
            createTable(1.5);
        } else if (numOfRounds > 10 && numOfRounds <= 20) {
            createTable(1);
            createTable(2);
        } else if (numOfRounds > 20 && numOfRounds <= 30) {
            createTable(0.3);
            createTable(1.3);
            createTable(2.3);
        } else {
            createTable(0);
            createTable(0.95);
            createTable(1.95);
            createTable(2.95);
            winnerDisplayGroup.scaleX = 0.9;
            winnerDisplayGroup.scaleY = 0.9;
        }


        ///////////////////////////Inputs//////////////////////////////////////////////////////////////////////////////////////////

        scene.addEventListener('enterframe', function () {
            playernameUpdater();


            if (game.input.q || game.input.w || game.input.e || game.input.r || game.input.t) {
                if (game.input.q) {
                    j = 0;
                }
                if (game.input.w) {
                    j = 1;
                }
                if (game.input.e) {
                    j = 2;
                }
                if (game.input.r) {
                    j = 3;
                }
                if (game.input.t) {
                    j = 4;
                }
                if (!game.keyflg) {
                    if (game.input.shift) {
                        playerScoreCounter[j] == 0 ? playerScoreCounter[j] = 0 : playerScoreCounter[j] -= 1;
                        usersScores[j].text = playerScoreCounter[j];
                        scoreBars[j].width == 330 * i ? scoreBars[j].width == 330 * i : scoreBars[j].width -= 10;
                        balloonsSprite[j].y == screenHeight - 685 + 632 - 39 ? balloonsSprite[j].y == screenHeight - 685 + 632 - 39 : balloonsSprite[j].y += 19;
                        /* balloonTextHolders[j].y == screenHeight - 685 + 632 + 10 ? balloonTextHolders[j].y == screenHeight - 685 + 632 + 10 : balloonTextHolders[j].y += 19;
                         usersNamesHolder2[j].y == screenHeight - 685 + 632 + 16 ? usersNamesHolder2[j].y == screenHeight - 685 + 632 + 16 : usersNamesHolder2[j].y += 19;*/
                    } else {
                        playerScoreCounter[j] == 33 ? playerScoreCounter[j] = 33 : playerScoreCounter[j] += 1;
                        usersScores[j].text = playerScoreCounter[j];
                        scoreBars[j].width == 330 ? scoreBars[j].width == 330 : scoreBars[j].width += 10;
                        balloonsSprite[j].y -= 19;
                        /*balloonTextHolders[j].y -= 19;
                        usersNamesHolder2[j].y -= 19;*/
                    }
                    game.keyflg = true;
                }
            }

            if (game.input.right) {
                scene.removeChild(userScoreBarGroup);
                scene.addChild(graphGroup);
                scene.addChild(mvpGroup);
                scene.removeChild(winnerDisplayGroup);
            }
            if (game.input.left) {
                scene.removeChild(graphGroup);
                scene.addChild(userScoreBarGroup);
                scene.addChild(mvpGroup);
                scene.removeChild(winnerDisplayGroup);
            }
            if (game.input.up) {
                scene.removeChild(userScoreBarGroup);
                scene.removeChild(graphGroup);
                scene.removeChild(mvpGroup);
                scene.addChild(winnerDisplayGroup);
            }
			
            for (k = 0; k < numOfPlayers; k++) {
                playerScoreCounter[k] > 15 ? usersSprite[k].frame = k + 5 : usersSprite[k].frame = k;
            }
        });
        userScoreBarGroup.x = 40;
        userScoreBarGroup.y = -40;
        mvpGroup.y = -40;
        mvpGroup.x = -40;
        graphGroup.x = 40;
        graphGroup.y = -40;
        winnerDisplayGroup.x = 40;
        winnerDisplayGroup.y = -20;
        scene.addChild(userScoreBarGroup);
        scene.addChild(mvpGroup);

        return scene;
    };
    game.onload = function () {
        /*  var bg = new Sprite(1920, 1080);
        bg.image = game.assets[bgImg];
        game.rootScene.addChild(bg);*/
        game.replaceScene(scoreScreen());
    }
    game.start();
}
