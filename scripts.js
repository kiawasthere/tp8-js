/* Javascript code for memory card game - TP8-JS */

//set up card tracker

cardsClicked = 0;


function cardClicked(what) {
  
  // make sure card has not been removed
   if ( !what.classList.contains("matched") ) {
     
     
  if ( what.classList.contains("clicked") )  {
    // it's already clicked, act appropriately

    what.classList.remove("clicked");
    cardsClicked--;

  } else {

    what.classList.add("clicked");
    cardsClicked++;

    if (cardsClicked == 2) {
      //compare card values 
      cardCompare();
    }

    }
  }
}

function cardCompare() {

  clickedCards = document.querySelectorAll(".clicked");
  // frist clicked element is clickedCards[0]
  // second clicked element is clickedCards[1]

  matched = false; // track if anything matched 

  if ( clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1")) {
    matched = true; // it matched pic 1                                                

  } else if ( clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2") ) {
    matched = true; // they matched pic 2
  }


  if (matched) {
    //hide cards
    removeCards(clickedCards[0], clickedCards[1]);
  } else {
    //unflip cards
    unflipCards(clickedCards[0], clickedCards[1]);
  }
}

  function removeCards(cardA, cardB) {
    
    pause = setTimeout(function() { 
      
      
    cardA.classList.add("matched");
    cardB.classList.add("matched");
    cardsClicked = 0;
      
      checkWinning();
    },1000);
  }

  function unflipCards(cardA, cardB) {
    
    pause = setTimeout(function() {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");
    cardsClicked = 0;
    },1000);
  



}


function checkWinning() {
  remainingCards = cardList = document.querySelectorAll(".card");
  
  // all cards
  for (c = 0; c < remainingCards.length; c++ ) { 
  if (!remainingCards[c].classList.contains("matched") ) {
    return;
    
  }
  }
  
  document.getElementById("mainTable").innerHTML = "You've done it!";
}

// stuff to do when page loads


window.onload = function() {

  cardList = document.querySelectorAll(".card"); //collection of cards 

  cardCount = cardList.length;

  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      cardClicked(this);
    }
  }
}