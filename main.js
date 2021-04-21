noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://tse3.mm.bing.net/th?id=OIP.HJfAzrKgRTXj9b9S9UzwdwHaJO&pid=Api&P=0&w=300&h=300');
}

function setup() {
 canvas = createCanvas(300 , 300);
 canvas = center();
 video = createCapture(VIDEO);
 video.size(300 , 300);
 video.hide();

poseNet = m15.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses () {
    if(results.length > 0);
    {
        console.log(results)
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}

function draw () {
    Image(video, 0, 0, 300, 300);
    Image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot () {
    Save('myFilterImage.png');
}