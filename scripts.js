/* Javascript code for memory card game - TP8-JS */

//set up card tracker

cardsClicked = 0; 


function cardClicked(what) {
  if (what.classList.contains("clicked")) {
  // it's already clicked, act appropriately
    
    what.classList.remove("clicked");
    cardsClicked--;
    
  } else {
    
    what.classList.add("clicked");
    cardsClicked++;
    
    if (cardsClicked == 2 ) {
      //compare card values 
      cardCompare();
    }
  
  }
  
}

function cardCompare()  {
  
  clickedCards =  document.querySelectorAll(".clicked");
  // frist clicked element is clickedCards[0]
  // second clicked element is clickedCards[1]

  matched = false;  // track if anything matched 
  
if ( clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
  matched = true;  // it matched pic 1                                                
                                                 
  }
  else if ( clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
    matched = true; // they matched pic 2
  }
  
 
  if (matched)  {
    //hide cards
    removeCards(clickedCards[0], clickedCards[1]);
  } else {
    //unflip cards
    unflipCards(clickedCards[0], clickedCards[1]);
  }

    function removeCards(cardA, cardB) { 
      cardA.classList.add("removed");
      cardB.classList.add("removed");
      cardsClicked = 0;
    }
    
  function unflipCards(cardA, CardB) {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");
    cardsClicked = 0;
    
  }
  
  
  
}




// stuff to do when page loads


window.onload = function() {
  
 cardList =  document.querySelectorAll(".card"); //collection of cards 
  
  cardCount = cardList.length; 
  
  for ( c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      cardClicked(this);
    }
  }
}