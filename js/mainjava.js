

//To set greeting based on time
function setGreeting(){
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {//It's morning
    document.getElementById("greeting").textContent = 'Good Morning.';
  }
  else if(hour < 18){//It's the Afternoon
    document.getElementById("greeting").textContent = 'Good Afternoon.';
  }
  else{//It's the evening
    document.getElementById("greeting").textContent = 'Good Evening.';
  }
}

setGreeting();
