var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();

function init()
{	setUpModeButtons();
	setUpSquares();
	reset();
}

resetButton.addEventListener("click", function()
{	reset();
});



function setUpModeButtons(){
	//Mode buttons event listeners
	for (var i = 0; i < modes.length; i++)
	{
	modes[i].addEventListener("click", function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++)
	{	// Add event listeners to squares
		squares[i].addEventListener("click", function(){
			// grap color of clicked sqaure
			var clickedColor = this.style.backgroundColor;
			// compare color to picked color 
			if (clickedColor === pickedColor)
			{	
				message.textContent = "Correct!";
				resetButton.textContent = "PLAY AGAIN!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				
			}
			else
			{
				this.style.backgroundColor ="#232323";
				messageDisplay.textContent ="Try Again!?";
			}
		});
	}
}

function reset()
{	// Generate New colors
	colors = generateRandomColors(numSquares);
	// Pick a random color from the array
	pickedColor = pickColor();
	// Change Display color in heading
	colorDisplay.textContent = pickedColor;
	// Change colors of all squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i])
		{
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	// Change color of heading to default
	h1.style.backgroundColor = "steelblue";
	// Reset Message
	messageDisplay.textContent = "";
	// Show New Game after play again is pressed
	resetButton.textContent = "New Colors";
}

function changeColors(color){
	// Loop through all squares
	for (var i = 0; i < squares.length; i++)
	{	//Change each color to match correct color
		squares[i].style.backgroundColor = color;
		
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	// Make an array
	var arr =[];
	// repeat num times
	for (var i = 0; i < num; i++)
	// Add num random colors to array
	arr.push(randomColor());
	// Return that array
	return arr;
}

function randomColor(){
	// pick "red" from 0-255
	var red  = Math.floor(Math.random() * 256);
	// pick "green" from 0-255
	var green = Math.floor(Math.random() * 256);
	// pick "blue" from 0-255
	var blue  = Math.floor(Math.random() * 256);
	// rgb(red, green, blue)
	// important to add spaces 
	return "rgb(" + red + ", " + green + ", " + blue + ")";
} 