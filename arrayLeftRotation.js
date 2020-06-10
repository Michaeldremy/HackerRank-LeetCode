// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

function rotLeft(a,d) {
    for (let i = 0; i < d; i++) {
            a.push(a[0]);
            a.shift()
        }
    return a;
}

console.log(rotLeft([1,2,3,4,5],4))