window.addEventListener("load", init);

const quoteInput = document.querySelector("#quoteInput");
const currentQuote = document.querySelector("#currentQuote");

const api = "https://api.quotable.io/random";

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      currentQuote.innerHTML = data.content;
    });
}

function init() {
  showQuote();
  quoteInput.addEventListener('input', startMatch);
}
function showQuote() {
  currentQuote.innerHTML = getQuote();
}
function matchQuote() {
  if (quoteInput.value === currentQuote.innerHTML) {
    return true;
  } else {
    return false;
  }
}
function startMatch(){
    if(matchQuote(true)){
        currentQuote.innerHTML = getQuote();
        quoteInput.value = '';
    }
}