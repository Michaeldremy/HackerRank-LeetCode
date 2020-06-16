// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
    let count = 0
    
    for (let h = i; h <= j; h++) {
        let finalNum;
        let parseNum = "";
        let RevNum = h.toString()
        for (let r = RevNum.length - 1; r >= 0; r--) {
            parseNum += RevNum[r];
        }
        parseNum = parseInt(parseNum);
        finalNum = Math.abs(h - parseNum)
        if (finalNum % k === 0) {
            count++
        }
    }
    return count;
}

console.log(beautifulDays(13,45,3))

/*

function input: 13 45 3

function input: 20 23 6

input: 20,21,22,23
        i

count
RevNum

i - start day
j - end day

forloop that starts at i and ends at j
we would push i into a string and then reverse the string and then return a reversed parseInt interger and then
set RevNum = ''

loop through the string and then we can start at the end and assign r to the front and so on... then return parseInt
120
r --
r
021
RevNum += r
parseInt(RevNum)

i number and reverse i and minus that reverse from i and then divide by k
if it is divisible using modulus we will increment count otherwise we will just move forward.

return count;

Goal is return how many beautiful days there are.

*/