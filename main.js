canvas=document.getElementById("myCanvas");
ctx=canvas.getContext ("2d");

gorila_width=100;
gorila_height=90;

background_image="africa-verde.web";
gorila_image="gorila.jpeg";
gorila_x=10;
gorila_y=10;

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    gorila_imgTag=new Image();
    gorila_imgTag.onload=uploadgorila;
    gorila_imgTag.src=gorila_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgorila(){
    ctx.drawImage(gorila_imgTag,gorila_x,gorila_y,gorila.width,gorila.height);}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="38"){
    up();
console.log("up");
}
if(keyPressed=="40"){
    down();
console.log("down");
}
if(keyPressed=="37"){
    left();
console.log("left");
}
if(keyPressed=="39"){
    right();
console.log("right");
}
}
 function up(){
    if(gorila_y>=0)
    {
        gorila_y=gorila_y-10;
        uploadBackground();
        uploadGorila();

    }
 }
 function down(){
    if(gorila_y>=0)
    {
        gorila_y=gorila_y+10;
        uploadBackground();
        uploadGorila();

    }
 }
 function left(){
    if(gorila_x>=0)
    {
        gorila_x=gorila_x-10;
        uploadBackground();
        uploadGorila();

    }
 }
 function right(){
    if(gorilar_x>=700)
    {
        gorila_x=gorila_x+10;
        uploadBackground();
        uploadGorila();
    }
 }
