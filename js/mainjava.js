

//To set greeting based on time
function setGreeting(){
  let today = new Date(),
    hour = today.getHours();

  if(hour < 6 && hour > 1){
    document.getElementById("greeting").textContent = "Hello, you're up early.";
  }
  else if(hour < 12) {//It's morning
    document.getElementById("greeting").textContent = 'Good Morning.';
  }
  else if(hour < 17){//It's the Afternoon
    document.getElementById("greeting").textContent = 'Good Afternoon.';
  }
  else if(hour < 21){//It's the evening
    document.getElementById("greeting").textContent = 'Good Evening.';
  }
  else{
    document.getElementById("greeting").textContent = 'Good Night.';
  }
}

setGreeting();
