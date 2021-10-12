"use strict";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var randomNumber1;
  var randomNumber2;

  randomNumber1 = Math.ceil(Math.random() * 6);

  var randomDiceImage = "dice" + randomNumber1 + ".png";

  var randomImageSource = "/Dice Game/Asset/" + randomDiceImage;

  document
    .querySelector(".left-dice")
    .lastElementChild.setAttribute("src", randomImageSource);

  randomNumber2 = Math.ceil(Math.random() * 6);

  var randomDiceImage2 = "dice" + randomNumber2 + ".png";

  var randomImageSource2 = "/Dice Game/Asset/" + randomDiceImage2;

  document
    .querySelector(".right-dice")
    .lastElementChild.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins";
  } else {
    document.querySelector("h1").innerText = "Draw";
  }
});
