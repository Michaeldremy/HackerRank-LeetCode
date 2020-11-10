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
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))