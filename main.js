noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(570, 100);

    pose = ml5.poseNet(video, modelLoaded);
    pose.on("pose", gotResults);
}

function modelLoaded(){
    console.log("PoseNEt is Loaded")
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log(noseX);
        console.log(noseY);
        console.log(leftWristX);
        console.log(rightWristX);
    }
}

function draw(){
    background("#FF0000");
    document.getElementById("value").innerHTML = "Width And The Height Of The Square Is " + difference;

    fill("#0000FF");
    stroke("#000000");
    square(noseX, noseY, difference);
}