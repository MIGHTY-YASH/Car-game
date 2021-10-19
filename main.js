canvas = document.getElementById("myCanvas");
ctx = canvas.getContex("2d")

img_width = 150;
img_hieght = 200;

var greencar_image;
greencar_image_x = 100;
greencar_img_y = 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_image_x = 5;
greencar_image_x = 225;

backimg = parkingLot.jpg;
carimg = car2.png;

function add() {
	background_image_imgTag = new Image();
	background_image_imgTag.onload = upload_Background;
	background_image_imgTag.src = background_image;

	greencar_image_Tag = new Image();
	greencar_image_Tag.onload = uploadgreencar;
	greencar_image.src =greencar_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_image_imgTag , 0 , 0 , canvas_width , canvas_hieght);
}

function uploadgreencar() {
ctx.drawImage(greencar_image_imageTag , greencar_image_x , greencar_image_y , greencar_image_width , greencar_image_hieght)

	
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

}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
