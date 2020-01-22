console.log('objects');


const wordLength = (word) => {
  return word.length;
}

console.log(wordLength('cat'));
console.log(wordLength('beaver'));


// check your age
const ageCheck = (age) => {
  if(age >= 21) {
    console.log('PARTYYYYY')
  } else {
    console.log('no drinks for you');
  }
}

ageCheck(12);
ageCheck(21);
ageCheck(30);
ageCheck(17);


const expense = {
  dateCreated:'01/17/2020',
  location: 'Baja Burrito',
  cost: 12.57,
  isGood: true
};

console.log(expense.cost)
console.log(expense.dateCreated)

const employee = {
  employeeId: '372897319',
  firstName: 'Mary',
  lastName: 'West',
  department:'IT',
  hireDate: '12/02/2019'
};

console.log(employee.firstName)

const statusMaker = (empl) => {
  if (empl.firstName[0] === 'M') {
      empl.status = 'vip';
   } else {
     empl.status = 'peasant';
   }
   return empl
  }

  console.log(statusMaker(employee))