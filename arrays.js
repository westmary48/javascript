const junkDrawer = ['hi', 2, true, {name:'Mary West'}, [1, 2, 3, 4]];

console.log(junkDrawer[2]);

junkDrawer.push('fluffy');

const valuePrinter = (arr,idx) => {
  return arr[idx]
};

console.log(valuePrinter([1,2,3,4,5], 2));

console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3))

