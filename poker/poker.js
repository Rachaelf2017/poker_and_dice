
// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function() {
  // Your code goes here!
  $(".deal").on("click", function(event) {
    event.preventDefault()
    cardsindeck=getDeck()
    numberofcards=51
    cardint=[getRandomInt(0,numberofcards)]
    $("#c1").attr("src", "http://golearntocode.com/images/cards/" + cardsindeck[cardint] + ".png" )
    if (cardint > -1) {
      cardsindeck.splice(cardint, 1)
    }
    numberofcards= numberofcards-1

    cardint=[getRandomInt(0,numberofcards)]
    $("#c2").attr("src", "http://golearntocode.com/images/cards/" + cardsindeck[cardint] + ".png" )
    if (cardint > -1) {
      cardsindeck.splice(cardint, 1)
    }
    numberofcards= numberofcards-1

    cardint=[getRandomInt(0,numberofcards)]
    $("#c3").attr("src", "http://golearntocode.com/images/cards/" + cardsindeck[cardint] + ".png" )
    if (cardint > -1) {
      cardsindeck.splice(cardint, 1)
    }
    numberofcards= numberofcards-1

    cardint=[getRandomInt(0,numberofcards)]
    $("#c4").attr("src", "http://golearntocode.com/images/cards/" + cardsindeck[cardint] + ".png" )
    if (cardint > -1) {
      cardsindeck.splice(cardint, 1)
    }
    numberofcards= numberofcards-1

    cardint=[getRandomInt(0,numberofcards)]
    $("#c5").attr("src", "http://golearntocode.com/images/cards/" + cardsindeck[cardint] + ".png" )
    if (cardint > -1) {
      cardsindeck.splice(cardint, 1)
    }
    numberofcards= numberofcards-1


  })
})
