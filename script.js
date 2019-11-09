let BASE_URL = "https://raw.githubusercontent.com/anilrayamajhi/padControllers/master/sounds/sounds";

let dict = {
  56:true,
  57:true,
  48:true,
  45:true,
  117:true,
  105:true,
  111:true,
  112:true
}

let pads = document.querySelectorAll('.key-pad')
console.log(pads)
for(let pad of pads){
  pad.classList.add('pulso')
  pad.addEventListener("click", onPress)
 
} 

function onPress(e){
   e.target.classList.remove('pulso')
   e.target.classList.add('push')
   setTimeout(()=>{
    e.target.classList.remove('push')
   e.target.classList.add('pulso')
   },300)
  //find code
  let id = e.target.id
  
  let keyCode = id.split("-")[1];
  console.log(keyCode)
  var audio = new Audio(`${BASE_URL}/${keyCode}.wav`);
  audio.play();
}
function onPressNode(node){
  node.classList.toggle('pulso')
   node.classList.toggle('push')
   setTimeout(()=>{
      node.classList.toggle('pulso')
   node.classList.toggle('push')
   },300)
  //find code
  let id = node.id
  
  let keyCode = id.split("-")[1];
  console.log(keyCode)
  var audio = new Audio(`${BASE_URL}/${keyCode}.wav`);
  audio.play();
}

//TAREA: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// AQUI VA TU OBSERVADOR keypress
//key-pad //clase

addEventListener('keypress', playMusic);

// AQUI VA TU FUNCION CALLBACK

function playMusic(event) {
    
    onPressNode(document.querySelector("audio"))
    }



