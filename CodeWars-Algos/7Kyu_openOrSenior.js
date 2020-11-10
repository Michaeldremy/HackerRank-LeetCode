// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Using map to go through each array within the global array scope

function openOrSenior(data){
  return data.map((info) => {
    if (info[0] >= 55 && info[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}


// refactored version with use of dectructoring our map
// Since we are using ES6 arrow function we can immediately return rather than type a return statement
// Notice we are also using the tenary operator
const openOrSeniorRefactored = (data) => data.map(([age, handicap]) => age >= 55 && handicap > 7 ? "Senior" : "Open")

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
console.log(openOrSeniorRefactored([[45, 12],[55,21],[19, -2],[104, 20]]));