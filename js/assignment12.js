
async function getFact(){
  console.log("Facts button was clicked")

  try{
    const response = await fetch(end)
    if(!response.ok){
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayFact(json.fact);

  }
  catch(err){
    console.log(err);
    alert('Something failed');
  }
}

function displayFact(fact){
  const factText = document.querySelector('#js-fact-text');
  factText.textContent = fact;
}

// http://numbersapi.com/random/math
const end = 'http://numbersapi.com/random/math';

const factsButton = document.querySelector('#js-new-fact');
factsButton.addEventListener('click', getFact);
