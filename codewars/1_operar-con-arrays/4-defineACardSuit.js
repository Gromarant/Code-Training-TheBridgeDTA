//First approach
function defineSuit(card) {
  if(cardSuit === '♣') {
    return 'clubs';
  } else if (cardSuit === '♦') {
    return 'diamonds'
  } else if (cardSuit === '♥') {
    return 'hearts'
  } else {
    return 'spades'
  }
}