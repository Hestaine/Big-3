 const form = document.querySelector('form');
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    
    if (yesButton.checked) {
      window.location.href = "https://animepahe.ru/";
    } else if (noButton.checked) {
      window.location.href = "https://otakusmart.com/top-10-reasons-why-you-should-watch-anime/";
    }
  });
  form.addEventListener(
    'submit', (event) => {
      event.preventDefault(); 
    }
  )