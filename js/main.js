
let numOfSquares = 8;
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = randomPickedColor();
let rgbDiplay = document.getElementById("rgb_display");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

rgbDiplay.textContent = pickedColor

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 4;
  colors = generateRandomColors(numOfSquares);
  pickedColor = randomPickedColor();
  rgbDiplay.textContent = pickedColor;
  for (let i=0; i < squares.length; i++) {
    if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
    }else{
    squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 8;
  colors = generateRandomColors(numOfSquares);
  pickedColor = randomPickedColor();
  rgbDiplay.textContent = pickedColor;
  for (let i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = randomPickedColor();
  rgbDiplay.textContent = pickedColor;
  message.textContent = " "
  for (let i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
})

for (let i=0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      message.textContent = "Correct"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?"
    }else {
      this.style.backgroundColor = "black";
      message.textContent = "Try Again"
    }
  });
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
