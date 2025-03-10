// variables
const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
let string1 = "Asteroids";
const button = document.getElementById("resetButton")
button.addEventListener("click", onButtonClick)
const title = document.querySelector("h1");
const paragraph = document.createElement("p");
paragraph.textContent = "Thank you for playing!";


let highScore = new Map();
let moveX = getRandomNumber(-2,2);
let moveY = getRandomNumber(-2,2);




//spaceship object
let spaceship = {
color : "blue",
X : canvas.width / 2,
Y : canvas.height / 1.1,
Radius : 25
}

// asteroid object
let asteroid = {
  color : "grey",
  X : canvas.width / 2,
  Y : canvas.height / 2,
  Radius : 50
  }
  
function runGame (){
  drawGame()

}


// this function draws the game on the canvas
function drawGame (){
clearScreen();
ctx.font = " 50px Arial"
ctx.fillStyle = "white"
ctx.textAlign = "center"
ctx.fillText(string1, 500,100);
drawSpaceship();
if (asteroid.X + moveX < 0 || asteroid.X + moveX > 1000){
  moveX = -moveX
}
if (asteroid.Y + moveY < 0 || asteroid.Y + moveY > 500){
  moveY = -moveY
}
drawAsteroid();
moveAsteroid(moveX,moveY);

if (checkCollision()) {
  // Handle collision here 
  console.log("Collision detected!");
  ctx.fillStyle = "red"
  string1 = "Game Over!"
  title.appendChild(paragraph);
}else {
        // Draw "Asteroids" text in white
        ctx.fillStyle = "white";
        ctx.fillText(string1, canvas.width / 2, 100);
    }

if(document.querySelector("button").clicked === true){
  alert("button clicked")
}

moveSpaceship()


}

// this function fills the screen
function clearScreen (){
ctx.fillStyle= "black";
ctx.fillRect(0,0,canvas.width, canvas.height);
}

// this function draws the player character
function drawSpaceship (){
ctx.fillStyle = spaceship.color;
ctx.beginPath();
ctx.arc(spaceship.X,spaceship.Y,spaceship.Radius,0,Math.PI * 2);
ctx.fill();
}

// this function draws the enemy character
function drawAsteroid (){
  ctx.fillStyle = asteroid.color;
  ctx.beginPath();
  ctx.arc(asteroid.X,asteroid.Y,asteroid.Radius,0,Math.PI * 2);
  ctx.fill();
  }

// this function returns a random number
function getRandomNumber (min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// this function moves the enemy character
function moveAsteroid (X,Y){
asteroid.X = asteroid.X + X;
asteroid.Y = asteroid.Y + Y;
}


// conect the spaceship to the leap motion controller
function moveSpaceship(){
  Leap.loop(function(frame) {
    if (frame.pointables.length > 0) {
      var position = frame.pointables[0].tipPosition;
      // Normalize coordinates
      var normalizedX = (position[0] + 150) / 300; 
      var normalizedY = (position[1] + 150) / 300; 
      
      // Map to canvas coordinates
      spaceship.X = canvas.width * normalizedX;
      spaceship.Y = canvas.height * (1 - normalizedY);
    }
  });
}

function checkCollision() {
  // Calculate the distance between the centers of the spaceship and the asteroid
  const dx = spaceship.X - asteroid.X;
  const dy = spaceship.Y - asteroid.Y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Check if the distance is less than the sum of the radii of the spaceship and the asteroid
  if (distance < spaceship.Radius + asteroid.Radius) {
      // Collision occurred
      return true;
  } else {
      // No collision
      return false;
  }
}

function resetGame() {
    // Reset spaceship position
    spaceship.X = canvas.width / 2;
    spaceship.Y = canvas.height / 1.1;

    // Reset asteroid position
    asteroid.X = canvas.width / 2;
    asteroid.Y = canvas.height / 2;

    // Reset any other game variables
    string1 = "Asteroids"; 
}

function onButtonClick() {
  console.log("button clicked")
    resetGame(); // Reset the game when the button is clicked
    drawGame(); // Draw the game after resetting
}
// this sets the refresh for the screen 
setInterval(runGame, 1000/60);