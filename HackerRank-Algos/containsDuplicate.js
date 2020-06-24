// https://leetcode.com/problems/contains-duplicate/

// If there is a duplicate of at least 2 within array we will print true, otherwise we will print false
// instead of an array we can make an object and if the value is > 1 we would return true otherwise return false
// Potential problem could be something like [1,2,2,2]
// 1: 1, 2: 3
// 1 >= 2 return true


// [1,3,2,1]
// 1:2
// 3:1
// 2:1

function containsDuplicate(nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
// we can use return true here instead of writing more code because .hasOwnProperty is checking is nums[i] is within the object.. if it is we return true
        if (obj.hasOwnProperty(nums[i])) {
            return true;
        }
        obj[nums[i]] = 1;
    }
}

console.log(containsDuplicate([1,3,2,1]));