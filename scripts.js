/* Javascript code for memory card game - TP8-JS */


window.onload = function() {
  
 cardList =  document.getElementsByClassName(".card"); //collection of cards 
  
  cardCount = cardList.length; 
  
  for ( c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      this.classList.toggle("clicked");
    }
  }
}