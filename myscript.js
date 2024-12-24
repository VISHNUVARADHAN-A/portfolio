function myFunction1() {
  var element = document.getElementById("bd");
  element.classList.toggle("dark-mode-body");
  let cards = document.querySelectorAll('.card'); 
  cards.forEach(card => { card.classList.toggle('light-mode'); 
    card.classList.toggle('dark-mode'); }); 
    let bgModeText = document.getElementById("bgmodetext"); 
    if (bgModeText.innerHTML === "Light Mode") 
      { bgModeText.innerHTML = "Dark Mode"; } 
    else { bgModeText.innerHTML = "Light Mode"; }
}


  

