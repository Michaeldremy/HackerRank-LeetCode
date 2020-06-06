// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function jumpingOnTheClouds(c) {
    let count = 0;
    let i = 0;
    while (i < c.length-1) {
        if (c[i+2] === 0) {
            count++
            i += 2
        }
        else{
            count++;
            i++;
            console.log(i);
        }
    }
    return count;
}
console.log(jumpingOnTheClouds([0,0,1,0,0,1,0]))