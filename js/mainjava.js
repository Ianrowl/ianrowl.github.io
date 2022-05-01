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
    document.getElementById("greeting").textContent = 'Good Morning.';
  }
  else if(hour < 17.5){//It's the Afternoon
    document.getElementById("greeting").textContent = 'Good Afternoon.';
  }
  else{//It's the evening
    document.getElementById("greeting").textContent = 'Good Evening.';
  }
}

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

//Counter to make sure which photo we're on
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

nextButton.addEventListener('click',()=>{
  if(counter >= carouselImages.length-1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});

prevButton.addEventListener('click',()=>{
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === 'cloneLast'){
    carouselSlide.style.transition = "none";
    console.log('none');
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'cloneFirst'){
    carouselSlide.style.transition = "none";
    console.log('none');
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
  }
});

displayTime();
setGreeting();
