let deckData = {};

async function fetchDeckData() {
  try {
    const response = await fetch('http://localhost:8080/https://api2.moxfield.com/v3/decks/all/lUbVQLCaMk2I8lsCi9pzLw');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    deckData = data;
    console.log(deckData);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const url = getQueryParam('url');

console.log(url);

async function initialize() {
  await fetchDeckData();
  console.log(deckData);
  console.log(deckData.name);






  



}

initialize();
