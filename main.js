noseX = 0;
noseY = 0;
difference = 0;
difference1 = 0;
difference2 = 0;
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
        difference1 = floor(difference);
        difference2 = ceil(difference);
    }
}

function draw(){
    background("#FF0000");
    document.getElementById("value").innerHTML = "Width And The Height Of The Square Is ( floor() )" + difference;
    document.getElementById("value1").innerHTML = "Width And The Height Of The Square Is ( ceil() )" + difference2;

    fill("#0000FF");
    stroke("#000000");
    square(noseX, noseY, difference);
}
