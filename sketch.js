//DOCUMENTED CODE:

 /*SPECIFIC MOVE NUMBER 1:
My program will counter an opening corner move to square [0][0] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
X # #   X # #
# # # → # O #
# # #   # # #  */

/*SPECIFIC MOVE NUMBER 2:
My program will counter an opening middle-top move to square [0][1] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
# X #   # X #
# # # → # O #
# # #   # # #  */

/*SPECIFIC MOVE NUMBER 3:
My program will counter an opening corner move to square [0][2] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
# # X   # # X
# # # → # O #
# # #   # # #  */

/*SPECIFIC MOVE NUMBER 4:
My program will counter an opening middle-left move to square [1][0] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
# # #   # # #
X # # → X O #
# # #   # # #  */

/*SPECIFIC MOVE NUMBER 5:
My program will counter an opening middle-right move to square [1][2] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
# # #   # # #
# # X → # O X
# # #   # # #  */

/*SPECIFIC MOVE NUMBER 6:
My program will counter an opening corner move to square [2][0] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
# # #   # # #
# # # → # O #
X # #   X # #  */

/*SPECIFIC MOVE NUMBER 7:
My program will counter an opening middle-bottom move to square [2][1] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
# # #   # # #
# # # → # O #
# X #   # X #  */

/*SPECIFIC MOVE NUMBER 8:
My program will counter an opening corner move to square [2][2] by
placing an ’O’ in square [1][1]
The code for this may be found at line number “ ” 
# # #   # # #
# # # → # O #
# # X   # # X  */

/*SPECIFIC MOVE NUMBER 9:
My program will counter an opening middle move to square [1][1] by
placing an ’O’ in square [0][0]
The code for this may be found at line number “ ” 
# # #   O # #
# X # → # X #
# # #   # # #  */

/*SPECIFIC MOVE NUMBER 10:
My program will counter an opening middle-top move to square [0][1] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [2][0] by
placing an 'O' in square [0][0]

The code for this may be found at line number “ ” 
# X #   O X #
# O # → # O #
X # #   X # #  */

/*SPECIFIC MOVE NUMBER 11:
My program will counter an opening middle-top move to square [0][1] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [2][2] by
placing an 'O' in square [0][2]

The code for this may be found at line number “ ” 
# X #   # X O
# O # → # O #
# # X   # # X  */

/*SPECIFIC MOVE NUMBER 12:
My program will counter an opening middle-bottom move to square [2][1] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [0][0] by
placing an 'O' in square [2][0]

The code for this may be found at line number “ ” 
X # #   X # #
# O # → # O #
# X #   O X #  */

/*SPECIFIC MOVE NUMBER 13:
My program will counter an opening middle-bottom move to square [2][1] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [0][2] by
placing an 'O' in square [2][2]

The code for this may be found at line number “ ” 
# # X   # # X
# O # → # O #
# X #   # X O  */

/*SPECIFIC MOVE NUMBER 14:
My program will counter an opening middle-left move to square [1][0] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [0][2] by
placing an 'O' in square [0][0]

The code for this may be found at line number “ ” 
# # X   O # X
X O # → X O #
# # #   # # #  */

/*SPECIFIC MOVE NUMBER 15:
My program will counter an opening middle-left move to square [1][0] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [2][2] by
placing an 'O' in square [2][0]

The code for this may be found at line number “ ” 
# # #   # # #
X O # → X O #
# # X   O # X */

/*SPECIFIC MOVE NUMBER 16:
My program will counter an opening middle-right move to square [1][2] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [0][0] by
placing an 'O' in square [0][2]

The code for this may be found at line number “ ” 
X # #   X # O
# O X → # O X
# # #   # # # */

/*SPECIFIC MOVE NUMBER 17:
My program will counter an opening middle-right move to square [1][2] by
placing an ’O’ in square [1][1]

It will then counter a corner move to square [2][0] by
placing an 'O' in square [2][2]

The code for this may be found at line number “ ” 
# # #   # # #
# O X → # O X
X # #   X # O */



let moveCount = 0;
//below is a hack to put together
//a "2D" array in javascript which
//does not have 2D arrays

var decisionArray = [];
for (var i = 0; i < 3; i++) {
  decisionArray[i] = [];
}

var tempArray = [];
for (var i = 0; i < 3; i++) {
  tempArray[i] = [];
}

function setup() {
  createCanvas(500, 500);
  background("purple");
  strokeWeight(4);
  textSize("12");
  stroke("black");
  line(166, 0, 166, 500);
  line(332, 0, 332, 500);
  line(0, 166, 500, 166);
  line(0, 332, 500, 332);
  //reset decisionArray with 0's
  initArray(decisionArray);
  initArray(tempArray);
  console.log(decisionArray[0][0]);
} //setup
function initArray(x) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x[i][j] = "0";
    } //for j
  } //for i
}

//grid1=decisionArray
//grid2=tempArray
//will return our best move

function computerRandomMove(grid1, grid2) {
  let row, col, squareNumber;

 
  if (moveCount == 1) {
    //nested if
    if (grid1[0][0] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[0][1] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[0][2] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[1][0] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[1][2] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[2][0] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[2][1] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[2][2] == "X") {
      grid1[1][1] = "O";
      return 5;
    }
  }

  if (moveCount == 1) {
    //nested if
    if (grid1[1][1] == "X") {
      grid1[0][0] = "O";
      return 1;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[2][0] == "X" && grid1[0][1] == "X") {
      grid1[0][0] = "O";
      return 1;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[2][2] == "X" && grid1[0][1] == "X") {
      grid1[0][2] = "O";
      return 3;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[0][0] == "X" && grid1[2][1] == "X") {
      grid1[2][0] = "O";
      return 7;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[0][2] == "X" && grid1[2][1] == "X") {
      grid1[2][2] = "O";
      return 9;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[0][2] == "X" && grid1[1][0] == "X") {
      grid1[0][0] = "O";
      return 1;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[2][2] == "X" && grid1[1][0] == "X") {
      grid1[0][2] = "O";
      return 7;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[0][0] == "X" && grid1[1][2] == "X") {
      grid1[0][2] = "O";
      return 3;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[0][2] == "X" && grid1[1][2] == "X") {
      grid1[2][2] = "O";
      return 9;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[2][2] == "X" && grid1[0][0] == "X") {
      grid1[1][2] = "O";
      return 6;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[2][0] == "X" && grid1[0][2] == "X") {
      grid1[1][2] = "O";
      return 6;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[0][1] == "X" && grid1[1][0] == "X") {
      grid1[0][0] = "O";
      return 1;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[1][2] == "X" && grid1[0][1] == "X") {
      grid1[0][2] = "O";
      return 3;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[1][0] == "X" && grid1[2][1] == "X") {
      grid1[2][0] = "O";
      return 7;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[1][2] == "X" && grid1[2][1] == "X") {
      grid1[2][2] = "O";
      return 9;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[2][2] == "X" && grid1[1][1] == "X") {
      grid1[2][0] = "O";
      return 7;
    }
  }

  if (moveCount == 3) {
    //nested if
    if (grid1[2][0] == "X" && grid1[1][2] == "X") {
      grid1[2][2] = "O";
      return 9;
    }
  }

  //create a copy of decisionArray
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid2[i][j] = grid1[i][j];
    } //for j
  } //for i

  for (let k = 1; k <= 9; k++) {
    row = floor((k - 1) / 3);
    col = (k - 1) % 3;

    //check to see if this wins
    if (grid2[row][col] == "0") {
      grid2[row][col] = "X";
      if (winConfirmed(grid2)) {
        grid1[row][col] = "O";
        return k;
      }

      grid2[row][col] = "0";
    }

    for (let k = 1; k <= 9; k++) {
      row = floor((k - 1) / 3);
      col = (k - 1) % 3;

      //check to see if this wins
      if (grid2[row][col] == "0") {
        grid2[row][col] = "O";
        if (winConfirmed(grid2)) {
          grid1[row][col] = "O";
          return k;
        }

        grid2[row][col] = "0";
      }
    }
  } //for k

  //looking for a square
  let looking = true;

  while (looking) {
    squareNumber = round(random(1, 9));
    console.log("*squareNumber" + squareNumber);

    row = floor((squareNumber - 1) / 3);
    col = (squareNumber - 1) % 3;

    if (grid1[row][col] == "0") {
      looking = false;
    } //if
  } //while

  grid1[row][col] = "O";
  console.log("squareNumber=" + squareNumber);
  return squareNumber;
} //computerRandomMove

function outputMove() {
  //enter moves into first square
  if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][1] == "0"
  ) {
    drawX(2);
    moveCount++;
    decisionArray[0][1] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][0] == "0"
  ) {
    drawX(1);
    moveCount++;
    decisionArray[0][0] = "X";
    consoleOutput(decisionArray);
  } //if
  if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][2] == "0"
  ) {
    drawX(3);
    moveCount++;
    decisionArray[0][2] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][0] == "0"
  ) {
    drawX(4);
    moveCount++;
    decisionArray[1][0] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][1] == "0"
  ) {
    drawX(5);
    moveCount++;
    decisionArray[1][1] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][2] == "0"
  ) {
    drawX(6);
    moveCount++;
    decisionArray[1][2] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][0] == "0"
  ) {
    drawX(7);
    moveCount++;
    decisionArray[2][0] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][1] == "0"
  ) {
    drawX(8);
    moveCount++;
    decisionArray[2][1] = "X";
    consoleOutput(decisionArray);
  } //if

  if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][2] == "0"
  ) {
    drawX(9);
    moveCount++;
    decisionArray[2][2] = "X";
    consoleOutput(decisionArray);
  } //if
}
//as you would think
function consoleOutput(x) {
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
  } //endfor
} //consoleoutput
function drawCircle(n) {
  fill("black");
  circle(83 + 166 * ((n - 1) % 3), 83 + 166 * floor(((n - 1) / 3) % 3), 120);
  //text(n, 83 + 166 * ((n - 1) % 3), 83 +166 * floor(((n - 1) / 3) % 3));
}
function drawX(n) {
  let x = 83 + 166 * ((n - 1) % 3);
  let y = 83 + 166 * floor(((n - 1) / 3) % 3);
  line(x - 40, y - 40, x + 40, y + 40);
  line(x - 40, y + 40, x + 40, y - 40);
}
//call out outputMove here

function winConfirmed(n) {
  if (
    (n[0][0] == n[0][1] && n[0][0] == n[0][2] && n[0][0] != "0") ||
    (n[1][0] == n[1][1] && n[1][0] == n[1][2] && n[1][0] != "0") ||
    (n[2][0] == n[2][1] && n[2][0] == n[2][2] && n[2][0] != "0") ||
    (n[0][0] == n[1][0] && n[0][0] == n[2][0] && n[0][0] != "0") ||
    (n[0][1] == n[1][1] && n[0][1] == n[2][1] && n[0][1] != "0") ||
    (n[0][2] == n[1][2] && n[0][2] == n[2][2] && n[0][2] != "0") ||
    (n[0][0] == n[1][1] && n[0][0] == n[2][2] && n[0][0] != "0") ||
    (n[0][2] == n[1][1] && n[0][2] == n[2][0] && n[0][2] != "0")
  ) {
    return true;
  } else {
    return false;
  }
} //win confirmed

function checkWin(n) {
  if (winConfirmed(n)) {
    if (moveCount % 2 == 1) {
      noLoop();
      createCanvas(500, 500);
      background("black");
      textSize(50);
      fill("white");
      textAlign(CENTER < CENTER);
      fill("green");
      text("WINNER", 120, 250);
      textAlign(CENTER < CENTER);
      text("X Wins", 150, 350);
    } else {
      noLoop();
      createCanvas(500, 500);
      background("black");
      textSize(50);
      fill("white");
      textAlign(CENTER < CENTER);
      fill("red");
      text("GAME OVER :(", 100, 250);
      textAlign(CENTER < CENTER);
      text("O Wins", 150, 350);
    }
  } else {
    if (moveCount == 9) {
      noLoop();
      createCanvas(500, 500);
      background("black");
      textSize(50);
      fill("white");
      text("Play Again", 100, 250);
      text("Draw :O", 150, 350);
    }
  }
}

function consoleOutput(x) {
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
  }
}

function draw() {
  if (moveCount % 2 == 0) {
    outputMove();
  } else {
    let temp = computerRandomMove(decisionArray, tempArray);
    drawCircle(temp);
    moveCount++;
    consoleOutput(decisionArray);
  }
  checkWin(decisionArray);

  //outputMove()  ;
}


