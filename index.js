var score_1=0;
var score_2=0;
var s1 = document.querySelector(".score1").innerHTML;
var s2 = document.querySelector(".score2").innerHTML;
document.querySelector(".score1").innerHTML = s1 + score_1;
document.querySelector(".score2").innerHTML = s2 + score_2;
document.querySelector(".btton button").addEventListener("click", function(){
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber1 + ".png";
var randomImageSource="images/" + randomDiceImage
document.getElementsByClassName("img1")[0].setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImagee="images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].setAttribute("src",randomDiceImagee);
if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML="✌️Player 1 Wins"
score_1=score_1+1;
document.querySelector(".score1").innerHTML = s1 + score_1;}
else if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML="✌️Draw✌️";
else{
document.querySelector("h1").innerHTML="Player 2 Wins✌️"
score_2=score_2+1;
document.querySelector(".score2").innerHTML = s2 + score_2;}});
