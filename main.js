function startMic(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wRYRudgZT/model.json', modelReady);
}
function modelReady(){
    console.log("model ready log");

    classifier.classify(gotResults);

}

function gotResults(error, results){ 
    console.log("got results log")
}