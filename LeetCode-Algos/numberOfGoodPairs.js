// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Input: nums = [1,1,1,1]
// Output: 6

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// create goodPairsCount variable which will increase if we find a good pair
// multiple pointer method - have one index at 0 and the other index at the last element in the array
// while left less than right
// if nums[left] === nums[j] increase our counter, right--
// else if nums[left] < nums[right] increase our counter right--
// else left++
// return goodPairsCount

var numIdenticalPairs = function(nums) {
  let goodPairsCount = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        goodPairsCount++;
      }
    }
  }
  return goodPairsCount;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))