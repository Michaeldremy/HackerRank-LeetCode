// https://leetcode.com/problems/three-consecutive-odds/

// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.

// if arr length is equal to 0 return false
// loop through our arr
// if arr[i - 1], arr[i], arr[i + 1] is odd, check by doing modulus i % 2 === 1 then we will check for consective, then return true

// [1,2,34,3,4,5,7,23,12]
//             i
//          i-1
//              i+1

var threeConsecutiveOdds = function (arr) {
  if (arr.length === 0) {
    return false;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] % 2 === 1 && arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
      return true;
    }
  }
  return false;
};

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
