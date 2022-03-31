
function button1Clicked(){
  document.getElementById("button1").classList.toggle("was-clicked");

}

function helloClicked(){
  document.getElementById("toBeReplaced").classList.toggle("replace-click");

}

function windowLoaded(){
  console.log('loaded')
  document.getElementById("button1").addEventListener("click", button1Clicked)
  document.getElementById("toBeReplaced").addEventListener("mousedown", helloClicked)

  //mouseover, mouse down, mouseup, mousemove, mouseout
}

window.onload = windowLoaded;
