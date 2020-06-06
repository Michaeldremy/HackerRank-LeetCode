// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

function countingValleys(n, s) {
  let hikeTrack = 0;
  let count = 0;
  for (let i in s) {
    if(hikeTrack === 0){
        if (s[i] === 'U') {
            hikeTrack++;
        }
        else if (s[i] === 'D') {
            hikeTrack--;
            count++
        }
    }
        else{
            if (s[i] === 'U') {
                hikeTrack++;
            }
            else if (s[i] === 'D') {
                hikeTrack--;
            }
        }
    }
    return count;
}

console.log(countingValleys(8,['U','D','D',"D","U","D","U","U"]))