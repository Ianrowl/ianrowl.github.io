setInterval(setTime, 1000)

const hourHand = document.querySelector('[data-hour]')
const minuteHand = document.querySelector('[data-minute]')
const secondHand = document.querySelector('[data-second]')

function setTime(){
  const currentDate = new Date()
  const seconds = currentDate.getSeconds() / 60
  const minutes = (seconds + currentDate.getMinutes()) / 60
  const hours = (minutes +currentDate.getHours()) / 12

  rotation(secondHand, seconds)
  rotation(minuteHand, minutes)
  rotation(hourHand, hours)
}

function rotation(element, rotation){
  element.style.setProperty('--rotation', rotation *360)
}

setTime()
