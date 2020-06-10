// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    let idx1 = 0;
    let idx2 = 1;
    while (idx1 < n - 1) {
        if((ar[idx1] + ar[idx2]) % k === 0) {
            count++;
        }
        idx2++;
        if (idx2 === n) {
            idx1++;
            idx2 = idx1 + 1;
        }
    }
    return count;
}