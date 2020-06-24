// https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function birthday(s, d, m) {
    let idx1 = 0;
    let idx2 = 0;
    let sum = s[idx1];
    let count = 0;
    while (idx2 <= s.length) {
      if(idx2 - idx1 === m){
        idx1 ++;
        idx2 = idx1;
        sum = s[idx1];
      }
      else if(sum === d && idx2 - idx1 === m-1){
        count++;
        idx1 ++;
        idx2 = idx1;
        sum = s[idx1];
      }
      else{
        idx2 ++;
        sum += s[idx2];
      }
    }
    return count;
}

console.log(birthday([4], 4, 1))