
let numOfSquares = 8;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let rgbDiplay = document.getElementById("rgb_display");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let difficultyButtons = document.querySelectorAll(".difficulty_buttons")

init();

function init() {
  setupDifficultyLevel();
  setupSquares();
  reset();
}

function setupDifficultyLevel() {
  for(let i=0; i < difficultyButtons.length; i++){
    difficultyButtons[i].addEventListener("click", function() {
      difficultyButtons[0].classList.remove("selected");
      difficultyButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy Mode" ? numOfSquares = 4: numOfSquares = 8;
      reset();
    });
  }
}

function reset() {
  // create the array of random rgb colors for game
  colors = generateRandomColors(numOfSquares);
  // get a random color from that array to be the color for game
  pickedColor = randomPickedColor();
  // resetting all buttons and backgrounds to normal
  rgbDiplay.textContent = pickedColor;
  message.textContent = " ";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  for (let i=0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function() {
  reset();
});

function setupSquares() {
  for (let i=0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        message.classList.remove("wrong");
        message.classList.add("right");
        message.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?"
      }else {
        this.style.backgroundColor = "black";
        message.classList.remove("right");
        message.classList.add("wrong");
        message.textContent = "Try Again";
      }
    });
  }
}

function changeColors(color){
  for (let i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
}
}
function randomPickedColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
function generateRandomColors(num) {
  let arr = [];
  for (let i=0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}
  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + b + ")"
  }
