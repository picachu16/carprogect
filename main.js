canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");//Create a reference for canvas 

greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    greencar_imgtag = new Image();
    greencar_imgtag.onload = uploadGreencar;
    greencar_imgtag.src = greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);//Define function ‘uploadBackground’

}

function uploadGreencar() {
	ctx.drawImage(greencar_imgtag, greencar_x, greencar_y, greencar_width, greencar_height);//Define function ‘uploadgreencar’.

	
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
	if (greencar_y>=0){
        greencar_y=greencar_y-10;
        uploadBackground();
        uploadGreencar();	//Define function to move the car upward
}
}


function down()
{
	if (greencar_y<=350){
        greencar_y=greencar_y+10;
        uploadBackground();
        uploadGreencar();	//Define function to move the car downward
}
}

function left()
{
	if (greencar_x>=0){
        greencar_x=greencar_x-10;
        uploadBackground();
        uploadGreencar();
    }	//Define function to move the car left side
}

function right()
{
	if (greencar_x<=750){
        greencar_x=greencar_x+10;
        uploadBackground();
        uploadGreencar();
    }	
}
