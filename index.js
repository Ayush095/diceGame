var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomImage1 = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomImage2 = "images/dice"+randomNumber2+".png";

document.querySelector(".dice .img1").setAttribute("src",randomImage1);
document.querySelector(".dice .img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerText = "Player 1 won🎉";
}
else if (randomNumber1<randomNumber2) {
document.querySelector("h1").innerText = "Player 2 won🎉";
}
else  {
  document.querySelector("h1").innerText = "Draw!";
}
