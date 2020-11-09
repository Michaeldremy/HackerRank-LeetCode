// https://leetcode.com/problems/squares-of-a-sorted-array/

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// create variable called solution which will be a new array
// create variable called squaredIndex = 0;
// loop through "A" array
// then we will take A[i] and times it by itself and set squaredIndex to hold that new value: A[i] * A[i]
// push squaredIndex into solution array
// sort solution array
// return solution array

var sortedSquares = function(A) {
  let solution = [];
  let squaredIndex = 0;

  for (let i = 0; i < A.length; i++) {
    squaredIndex = A[i] * A[i];
    solution.push(squaredIndex)
  }
  solution.sort((a, b ) => a - b);
  return solution;
};


console.log(sortedSquares([-4,-1,0,3,10]))