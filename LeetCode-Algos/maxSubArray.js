// https://leetcode.com/problems/maximum-subarray/

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Math.max is used: The Math.max() function returns the largest of the zero or more numbers given as input parameters.

// [-2,1,-3,4,-1,2,1,-5,4]
//                      i
// maxCurrent = 5;
// maxGlobal = 6;

// We are just returning the max sum not the numbers of the subarray

// setting variable maxCurrent and maxGlobal to nums[0]
// loop through the nums array
// we will change maxCurrent to be either nums[i] or maxCurrent + nums[i] which ever is greater, using Math.max method
// then we will change maxGlobal if maxCurrent is larger
// return maxGlobal

function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))