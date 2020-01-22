console.log('combo')

console.log('COMBO');


// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.
// Challenge #2
// given a number, find its opposite. 2 = -2
// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.


const evenOdd = (num) => {
  if(num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
}
}

console.log(evenOdd(12))
console.log(evenOdd(7))

const opposite = (num) => {
  return num * (-1);
}
console.log(opposite(2));
console.log(opposite(-4));


const isItAPalindrome = (text) => {
  cleanText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

  const opposite = cleanText.split('').reverse().join('')

  // if (cleanText === opposite) {
  //     return true;
  // } else {
  //     return false;
  // }

  return (cleanText === opposite)
};

console.log(isItAPalindrome('cat'));
console.log(isItAPalindrome('racecar'));
console.log(isItAPalindrome('mom'));
console.log(isItAPalindrome('bear'));
console.log(isItAPalindrome('Race !!car'));


const animal = (str) => {
  if (str.toLowerCase() === "alligator") {
    return 'small';
  } else {
    return 'wide';
  }
}
console.log(animal('AlliGAtor')); //small
console.log(animal('alligator')); //small
console.log(animal('dog')); //wide