// https://leetcode.com/problems/two-sum/

/*

Given an array and we need to find the target value which two indices.values within the array to equal the target
Once we have found the two indices we will return not the value but but indice at which it was found

have two for loops 

If i + j = target 
return [i,j]

if it isn't = target 
have j move until end of array
once j is at the end of the array we will move i and reset j to be i+1

target = 9

i
[2,7,11,15]
j

   i
[3,2,4]
     j

return [i, j]
*/

function twoSum(nums, target) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            total += nums[i] + nums[j];
            if (total === target) {
                return [i,j]
            }
            total = 0;
        }
    }
}

console.log(twoSum([3,2,4],6));