// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function breakingRecords(scores) {
    let minRecord = scores[0];
    let maxRecord = scores[0]
    let max = 0;
    let min = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxRecord) {
            maxRecord = scores[i];
            max++;
        }
        else if (scores[i] < minRecord) {
            minRecord = scores[i]
            min++;
        }
    }
    return [max, min];
}

console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));