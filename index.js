var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber1 + ".png";
var randomImageSource="images/" + randomDiceImage
document.getElementsByClassName("img1")[0].setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImagee="images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].setAttribute("src",randomDiceImagee);
if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML="🚩Player 1 Wins"
else if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML="🚩Draw🚩";
else
document.querySelector("h1").innerHTML="Player 2 Wins🚩"
