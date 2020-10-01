//Written by Thalyson
var myButtons = document.querySelectorAll(".drum");
var mySounds=['tom-1','tom-2', 'tom-3', 'tom-4', 'crash', 'snare', 'kick-bass'];
var myHotkeys = {'w':0, 'a':1, 's':2, 'd':3, 'j':4, 'k':5, 'l':6};

function play( id ){
  var audio = new Audio('sounds/'+ mySounds[id] +'.mp3');
  audio.play();

  var className = myButtons[id].className;
  myButtons[id].className += " pressed";
  setTimeout( function(){myButtons[id].className=className;}, 100 );
}

for(let i = 0; i < myButtons.length; i++){
  myButtons[i].addEventListener('click', function (){
      play(i);
    }
  );
}

document.addEventListener('keypress', function(key){
    if( myHotkeys[key.key] !== undefined ){
      play(myHotkeys[key.key]);
    }
  }
);
