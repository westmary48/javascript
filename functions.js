console.log('hi')
// only define const once
// use const until it says otherwise
const nuggetizer = (animal) => {
  const output = `processed ${animal}`
  return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));

const dogBreed = (dog) => {
  return `my favorite dog breed is ${dog}`
}

console.log(dogBreed('lab'));

const fourtyTwo = (num) => {
  return num + 42
}

console.log(fourtyTwo(4));

const oldAge = (yearBorn) => {
  return 2099 - yearBorn
}

console.log(oldAge(1954))