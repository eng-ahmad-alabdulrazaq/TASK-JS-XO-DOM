//\\ بسم الله الرحمن الرحيم //\\

// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}
// ❗️ DON'T TOUCH THESE 2 FUNCTIONs

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

//if(document.getElementById('button').clicked == true)
// {
//   alert("button was clicked");
// }
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

// restartGame();
// if(){

// }

// for (let i = 0; i < resultArray1.length; i++) {
//   resultArray2[i] = resultArray1[i].name;
//   return resultArray2;
// }
function restartGame() {
  // Your main code here.
  gamePlayStat[0] = "";
  gamePlayStat[1] = "";
  fillButton(1, "");
  gamePlayStat[2] = "";
  fillButton(2, "");
  gamePlayStat[3] = "";
  fillButton(3, "");
  gamePlayStat[4] = "";
  fillButton(4, "");
  gamePlayStat[5] = "";
  fillButton(5, "");
  gamePlayStat[6] = "";
  fillButton(6, "");
  gamePlayStat[7] = "";
  fillButton(7, "");
  gamePlayStat[8] = "";
  fillButton(8, "");
  fillButton(9, "");
}
let player = 1;
let gamePlayStat = ["", "", "", "", "", "", "", "", ""];

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.

  //
  if (gamePlayStat[index - 1] == "") {
    if (player % 2 != 0) {
      fillButton(index, "X");
      document.getElementById(index).style.color = "red";

      player += 1;
      gamePlayStat[index - 1] = 1;
    } else {
      fillButton(index, "O");
      document.getElementById(index).style.color = "green";

      player += 1;

      gamePlayStat[index - 1] = 2;
    }
  }
  checkWinner();
  // console.log(gamePlayStat);
}
// //com
function checkWinner() {
  ///here
  console.log(gamePlayStat[1], gamePlayStat[4], gamePlayStat[7]);
  //if even index
  if (
    (gamePlayStat[0] == 1 && gamePlayStat[3] == 1 && gamePlayStat[6] == 1) ||
    (gamePlayStat[0] == 1 && gamePlayStat[1] == 1 && gamePlayStat[2] == 1) ||
    (gamePlayStat[1] == 1 && gamePlayStat[4] == 1 && gamePlayStat[7] == 1) ||
    (gamePlayStat[3] == 1 && gamePlayStat[4] == 1 && gamePlayStat[5] == 1) ||
    (gamePlayStat[2] == 1 && gamePlayStat[5] == 1 && gamePlayStat[8] == 1) ||
    (gamePlayStat[6] == 1 && gamePlayStat[7] == 1 && gamePlayStat[8] == 1) ||
    (gamePlayStat[0] == 1 && gamePlayStat[4] == 1 && gamePlayStat[8] == 1) ||
    (gamePlayStat[2] == 1 && gamePlayStat[4] == 1 && gamePlayStat[6] == 1)
  ) {
    // checked even possibilities
    // check winner type

    //winner is even
    winningAlert("X");
    restartGame();
  } else if (
    (gamePlayStat[0] == 2 && gamePlayStat[3] == 2 && gamePlayStat[6] == 2) ||
    (gamePlayStat[0] == 2 && gamePlayStat[1] == 2 && gamePlayStat[2] == 2) ||
    (gamePlayStat[1] == 2 && gamePlayStat[4] == 2 && gamePlayStat[7] == 2) ||
    (gamePlayStat[3] == 2 && gamePlayStat[4] == 2 && gamePlayStat[5] == 2) ||
    (gamePlayStat[2] == 2 && gamePlayStat[5] == 2 && gamePlayStat[8] == 2) ||
    (gamePlayStat[6] == 2 && gamePlayStat[7] == 2 && gamePlayStat[8] == 2) ||
    (gamePlayStat[0] == 2 && gamePlayStat[4] == 2 && gamePlayStat[8] == 2) ||
    (gamePlayStat[2] == 2 && gamePlayStat[4] == 2 && gamePlayStat[6] == 2)
  ) {
    // checked even possibilities
    // check winner type
    // (gamePlayStat[1] == 2 && gamePlayStat[3] == 2 && gamePlayStat[5] == 2) ||

    //winner is even
    winningAlert("O");
    restartGame();
  } else if (
    gamePlayStat[0] &&
    gamePlayStat[1] &&
    gamePlayStat[2] &&
    gamePlayStat[3] &&
    gamePlayStat[4] &&
    gamePlayStat[5] &&
    gamePlayStat[6] &&
    gamePlayStat[7] &&
    gamePlayStat[8] != ""
  ) {
    alert("draw");
    restartGame();
  }
}

//com

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
