function setup(){
    canvas = createCanvas(400,350);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yo0vJFviJ/model.json", modelloaded);
}

function modelloaded(){
    console.log("Model has loaded !!!");
}


function draw(){
    image(video, 0,0,400,350);
    classifier.classify(video,gotresult);
}
 function gotresult(error,result){
     if(error){
         console.log(error);
     }
     else{
         console.log(result);
         document.getElementById("result_object_name").innerHTML = result[0].label;
         document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(2)
     }
 }