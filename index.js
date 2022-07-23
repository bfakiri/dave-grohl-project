
let soundsList = {
    "w" : "crash",
    "a" : "kick-bass",
    "s" : "snare",
    "d" : "tom-1",
    "j" : "tom-2",
    "k" : "tom-3",
    "l" : "tom-4"
}

function playAudio(drum){
    var audio = new Audio("sounds/"+ drum +".mp3")
    audio.play();
    }

let nbrOfDrums = document.querySelectorAll(".drum").length; //attributes the number of drums to the variable


for (var i = 0; i < nbrOfDrums; i++){ 
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    var buttonInnerHTML = this.innerHTML;
    playAudio(soundsList[buttonInnerHTML]);
    instrumentAnimation(buttonInnerHTML);

});
}

document.addEventListener("keydown", function(event){
    playAudio(soundsList[event.key]);
    instrumentAnimation(event.key);
});

function instrumentAnimation(keyTriggered){
    var activeButton = document.querySelector("." + keyTriggered);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 500)
}









