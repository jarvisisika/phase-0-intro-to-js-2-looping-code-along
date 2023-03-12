const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
  }
  const names = ['Alice', 'Bob', 'Charlie'];
const event = 'birthday';

const cards = writeCards(names, event);
console.log(cards);
// Output: ["Thank you, Alice, for the wonderful birthday gift!", "Thank you, Bob, for the wonderful birthday gift!", "Thank you, Charlie, for the wonderful birthday gift!"]
function createThankYouMessages(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for attending the ${event} event!`);
    }
    return messages;
  }
  const names = ['Alice', 'Bob', 'Charlie'];
const event = 'charity auction';

const messages = createThankYouMessages(names, event);
console.log(messages);
// Output: ["Thank you, Alice, for attending the charity auction event!", "Thank you, Bob, for attending the charity auction event!", "Thank you, Charlie, for attending the charity auction event!"]
function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(10);
  // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
  