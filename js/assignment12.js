
async function getFact(){
  console.log("Facts button was clicked")

  try{
    const response = await fetch(end)
    if(!response.ok){
      throw Error(response.statusText)
    }
    const response2 = await fetch(end2)
    if(!response2.ok){
      throw Error(response2.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayFact(json.text);

    const json2 = await response2.json();
    console.log(json2);
    displayFact2(json2.quote);

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

function displayFact2(fact2){
  const factText2 = document.querySelector('#js-fact-2');
  factText2.textContent = fact2;
}

// http://numbersapi.com/random/math
const end = 'https://uselessfacts.jsph.pl/random.json';

const end2 = 'https://api.kanye.rest';

const factsButton = document.querySelector('#js-new-fact');
factsButton.addEventListener('click', getFact);
