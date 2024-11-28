let suits = ["♥", "♦", "♠", "♣"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomCard() {

  let randomSuite = Math.floor(Math.random() * suits.length);
  let randomValue = Math.floor(Math.random() * values.length);

  let card = document.getElementById("card");

  card.innerHTML = ''

  let newCardSuites = document.createElement("H2");
  let tSuitsTop = document.createTextNode(suits[randomSuite]);
  newCardSuites.appendChild(tSuitsTop);
  newCardSuites.className = "newCardSuites";

  let newCardSuites2 = document.createElement("H2");
  let tSuitsBottom = document.createTextNode(suits[randomSuite]);
  newCardSuites2.appendChild(tSuitsBottom);
  newCardSuites2.className = "newCardSuites2"

  let newCardValues = document.createElement("H2");
  let tValues = document.createTextNode(values[randomValue]);
  newCardValues.appendChild(tValues);
  newCardValues.className = "newCardValues"

  if (suits[randomSuite] === '♥' || suits[randomSuite] === '♦'){
    newCardSuites.style.color = 'red';
    newCardSuites2.style.color = 'red';
  } else {
    newCardSuites.style.color = 'black';
    newCardSuites2.style.color = 'black';
  }

  card.appendChild(newCardSuites);
  card.appendChild(newCardValues);
  card.appendChild(newCardSuites2);

}

let refresh = document.getElementById('button')
refresh.addEventListener('click', () =>{
  getRandomCard()
})

window.onload = function (){
  getRandomCard()
}