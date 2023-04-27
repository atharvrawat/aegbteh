nosex=0;
nosey=0;
function preload(){
mustache=loadImage("https://i.postimg.cc/9QvdPQnp/m.png")
}

function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);

}

function draw(){
image(video,0,0,500,500);
image(mustache,nosex,nosey,50,35);

}
 function takesnapshot(){
 save("MySelfie.png");
 }

 function modelloaded(){
    console.log("model.loaded");
 }

 function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-105;
        nosey=results[0].pose.nose.y+25;

        console.log(nosex);
        console.log(nosey);
    }
    
 }