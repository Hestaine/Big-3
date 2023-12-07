const form = document.querySelector('form');
const wabButton = document.getElementById('wab');
const dabButton = document.getElementById('dab');
const wadButton = document.getElementById('wad');
const wapButton = document.getElementById('wap');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (wabButton.checked) {
    window.location.href = "https://gogoanime.co.in/";
  } else if (dabButton.checked) {
    window.location.href = "https://animepahe.ru/";
  }
});