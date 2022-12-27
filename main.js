var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
    speak();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function(){
        image_id= "selfie 1";
        take_snapshot();
        speak_data="Taking your selfie in 5 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
        },5000);

    setTimeout(function(){
    image_id= "selfie 2";
    take_snapshot();
    speak_data="Taking your selfie in 10 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
    },10000);

    setTimeout(function(){
        image_id= "selfie 3";
        take_snapshot();
        speak_data="Taking your selfie in 15 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
        },15000);
}
function take_snapshot()
{
    console.log(image_id);
    Webcam.snap(function(data_uri){
        if(image_id=="selfie_1"){
            document.getElementById("result1").innerHTML='<img id="selfie1"src="'+data_uri+'">';
        }
        if(image_id=="selfie_2"){
            document.getElementById("result2").innerHTML='<img id="selfie1"src="'+data_uri+'">';
        }
        if(image_id=="selfie_3"){
            document.getElementById("result3").innerHTML='<img id="selfie1"src="'+data_uri+'">';
        }
    });
}


    

