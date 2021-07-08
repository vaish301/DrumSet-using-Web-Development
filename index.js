//alert("working!");
var noofdrums = document.querySelectorAll(".drum").length
for(var i=0;i<noofdrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var button = this.innerHTML;
    //this.style.color = "white";

    //setTimeout(this.style.color = "#797A7E",100);
    makeSound(button);
    animation(button);

  }
);
}

document.addEventListener("keypress",function(event){
  //console.log(event);
  //alert("key pressed!");
  makeSound(event.key);
  animation(event.key);
})

function makeSound(key){
  switch(key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "k":
      var tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    default: console.log();

  }
}

function animation(currentkey){
  var activekey = document.querySelector("."+currentkey);

  activekey.classList.add("pressed");

  setTimeout(function(){
    activekey.classList.remove("pressed");
  },100);
}
