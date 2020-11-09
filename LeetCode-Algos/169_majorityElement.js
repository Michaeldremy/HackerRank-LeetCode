// https://leetcode.com/problems/majority-element/

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Input: [3,2,3]
// Output: 3

var majorityElement = function (nums) {
  let size = nums.length / 2;
  index = {};
  for (let num of nums) {
    if (index[num] === undefined) {
      index[num] = 1;
    } 
    if (index[num] > size) {
      return num;
    }
    else {
      index[num]++;
    }
    console.log(index[num], size)
  }
};

console.log(majorityElement([3, 2, 3]));
