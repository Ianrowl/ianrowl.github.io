const time = document.getElementById('time'),
  greeting = document.getElementById('greeting');

//Show the time
function displayTime(){
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amOrPm = hour >= 12 ? 'PM' : 'AM';

  //For 12 hour
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZeroes(min)}<span>:</span>${addZeroes(sec)}`;

  //Call each getSeconds
  setTimeout(displayTime,1000);
}

//To add zeros
function addZeroes(i) {
  return(parseInt(i, 10) < 10 ? '0' : '') + i;
}

//To set greeting based on time
function setGreeting(){
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {//It's morning
    greeting.textContent = 'Good Morning.';
  }
  else if(hour < 17.5){//It's the Afternoon
    greeting.textContent = 'Good Afternoon.';
  }
  else{//It's the evening
    greeting.textContent = 'Good Evening.';

  }
}

displayTime();
setGreeting();
