function preload() {
    
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

img = "";
status = "";
objects = [];

function draw() {
    image(img, 0, 0, 640, 420)

    if (status != "")
    r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.lenghth; i++)
    { 
        r = random(255);
        g = random(255);
        b = random(255);

        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;

        fill("r,g,b");
        percent = floor(objects[i].confidence * 100);
        text(objects[1].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("r,g,b");
        rect(objects[1].x, objects[i].y, objects[i].width, objects[i].height);
    }
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}
 function modelLoaded() {
    console.log("Model Loaded!");
    status =  true;
    objectDetector.detect(img, gotResults);
 }

 function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
 }