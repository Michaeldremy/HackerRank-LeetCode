// https://www.hackerrank.com/challenges/the-hurdle-race/problem

/*

we are given an array to loop through and what we need to do is find the max element within the array and compare it to the k
if maxHurdle > k we will minus k - maxHurdle to find the difference and we take that differece and that is what is required to make it over the hurdle


First loop through the array
store the highest element into maxHurdle
then check if k is higher than max 
or if k is less than max than we find the difference and assign it to potionBonus
k = 4
maxHurdle = 6

let potionBonus = 0;

potionBonus = maxHurdle - k;

return potionBonus;
output 
2

input 
1,6,3,5,2

*/

function hurdleRace(k, height) {
    let maxHurdle = 0;
    let potionBonus = 0;

    for (let i = 0; i < height.length; i++) {
        if (maxHurdle < height[i]) {
            maxHurdle = height[i];
        }
    }
    if (k > maxHurdle) {
        return 0;
    }
    else if (k < maxHurdle) {
        potionBonus = maxHurdle - k;
        return potionBonus;
    }
}

console.log(hurdleRace(7,[2,5,4,5,2]))