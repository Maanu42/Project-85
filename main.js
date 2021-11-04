//Create a reference for canvas 
canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d")
//Give specific height and width to the car image
car_width=75;
car_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x=5;
car_y=225;
function add() {
	//upload car, and background images on the canvas.
	background_imgTag= new Image();
	background_imgTag.onload = uploadBackground();
	background_imgTag.src= background_image;

	car_imgTag= new Image();
	car_imgTag.onload = uploadgreencar();
	car_imgTag.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car_y>=0){
		car_y= car_y-10;
		uploadBackground();	
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(car_y<=300){
		car_y= car_y+10;
		uploadBackground();	
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(car_x>=10){
		car_x= car_x-10;
		uploadBackground();	
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(car_x<=700){
		car_x= car_x+10;
		uploadBackground();	
		uploadgreencar();
	}
}
