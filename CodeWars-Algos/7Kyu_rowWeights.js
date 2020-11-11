// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, 
// where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// rowWeights([13, 27, 49])  ==>  return (62, 27)

const rowWeights = (array) => {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      oddSum = oddSum + array[i]
    } else {
      evenSum = evenSum + array[i]
    }
  }
  return [evenSum, oddSum]
}

console.log(rowWeights([13, 27, 49]));