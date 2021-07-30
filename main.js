canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
nasa_images_array=["mars.jpg" , "mars0.jpg" , "mars1.jpg" , "mars2.jpg" , "mars3.jpg"];
random_no=Math.floor(Math.random()*5);
console.log(random_no);

r_width=140;
r_height=120;

r_x=170;
r_y=150;

background_image=nasa_images_array[random_no];
r_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    r_imgTag=new Image();
    r_imgTag.onload=uploadRover;
    r_imgTag.src=r_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(r_imgTag,r_x,r_y,r_width,r_height);
}



window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
        left();
        console.log("let");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}

function up() {
    if(r_y >=0)
    {
        r_y -=5;
        console.log("When up Arrow is pressed ,x = " + r_x + "| y = " + r_y );
        uploadBackground();
        uploadRover();
    }
}


function down() {
    if(r_y <=520)
    {
        r_y +=5;
        console.log("When up Arrow is pressed ,x = " + r_x + "| y = " + r_y );
        uploadBackground();
        uploadRover();
    }
}


function left() {
    if(r_x >=0)
    {
        r_x -=5;
        console.log("When up Arrow is pressed ,x = " + r_x + "| y = " + r_y );
        uploadBackground();
        uploadRover();
    }
}


function right() {
    if(r_x <=760)
    {
        r_x +=5;
        console.log("When up Arrow is pressed ,x = " + r_x + "| y = " + r_y );
        uploadBackground();
        uploadRover();
    }
}
