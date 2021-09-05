song1 = "";
song2 = "";

function preload()
{
    song1 = op1.mp3;
    song2 = op2.mp3;
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.position(600,200);

    
    
}

function draw()
{
   image(video, 0, 0, 550, 500);
}