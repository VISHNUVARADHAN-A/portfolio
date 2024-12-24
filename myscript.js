function myFunction1() {
  var element = document.getElementById("bd");
  element.classList.toggle("dark-mode-body");

  // let cards = document.getElementsByName("fname");
  // if (document.getElementById("bgmodetext").innerHTML === "Light Mode") {
  //   document.getElementById("bgmodetext").innerHTML = "Dark Mode";
  //   cards.forEach(card => { card.style.boxShadow = "0 4px 8px 0 rgb(0, 0, 0,0.2)"; });
  // } else {
  //   document.getElementById("bgmodetext").innerHTML = "Light Mode";
  //   cards.forEach(card => { card.style.boxShadow = "0 4px 8px 0 rgb(50, 255, 100 , 0.9)"; });
  // }

  let cards = document.querySelectorAll('.card'); 
  cards.forEach(card => { card.classList.toggle('light-mode'); 
    card.classList.toggle('dark-mode'); }); 
    let bgModeText = document.getElementById("bgmodetext"); 
    if (bgModeText.innerHTML === "Light Mode") 
      { bgModeText.innerHTML = "Dark Mode"; } 
    else { bgModeText.innerHTML = "Light Mode"; }
}


  

