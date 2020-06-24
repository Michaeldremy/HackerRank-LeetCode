// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function birthdayCakeCandles(ar) {
    let max = 0;
    let height = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
        for (let j = 0; j < ar.length; j++) {
        }
        if (ar[j] === max) {
            height++;
        }
    }
    return height;
}

console.log(birthdayCakeCandles([3,2,1,3]));