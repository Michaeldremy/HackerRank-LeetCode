// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// .sort((a, b) => a - b) this will sort in ascending order
// .sort((a, b) => b - a) this will sort in descending order | notice the "b" comes before "a"

// ES6 Arrow Function using sort method in ascending order and returning the two lowest numbers in the array by the array index
const sumTwoSmallestNumbers = (numbers) => {  
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

// ES6 Arrow function using array destructuring, sort method in ascending order and return destructured lowest numbers
const sumTwoSmallestNumbersDestructured = (numbers) => {  
  const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
  return firstNumber + secondNumber;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbersDestructured([19, 5, 42, 2, 77]));