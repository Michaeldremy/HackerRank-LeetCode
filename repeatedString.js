// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function repeatedString(s, n) {
  let count = 0;
  let factor = Math.floor(n/s.length);
  let remainder = n-(factor * s.length);
  for (let i of s){
    if( i === "a"){
      count++;
    }
  }
  count *= factor
  for(let i = 0; i< remainder; i++){

    if( s[i] === "a"){
      count++;
    }
  }
  return(count)
}
console.log(repeatedString('a', 1000000000000));