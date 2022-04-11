
async function getFact(){
  console.log("Facts button was clicked")

  try{
    const response = await fetch(end);
    if(!response.ok){
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
  }

  catch(err){
    console.log(err)
    alert('Something failed');
  }
}

const end = ''

const factsButton document.querySelector('#js-new-quote');
factsButton.addEventListener('click', getFact);
