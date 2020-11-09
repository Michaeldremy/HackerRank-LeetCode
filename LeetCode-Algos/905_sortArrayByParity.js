// https://leetcode.com/problems/sort-array-by-parity/

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// create solution set to empty array
// create oddArray set to empty array / this will hold the odd values
// loop through "A" array
// if (A[i] % 2 === 0) then push to solution
// else push elements to oddArray
// loop through oddArray and push into solution
// return solution array


var sortArrayByParity = function(A) {
  let solution = []
  let oddArr = []

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      solution.push(A[i])
    }
    else {
      oddArr.push(A[i])
    }
  }

  // for (let i = 0; i < oddArr.length; i++) {
  //   solution.push(oddArr[i])
  // }
  // return solution;

  // Other way to finish this problem off

  return solution.concat(oddArr)

};

console.log(sortArrayByParity([3,1,2,4]))