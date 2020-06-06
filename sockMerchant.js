// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
    let pairCount = 0;
    let idx1 = 0;
    let idx2 = 1;
    while (idx1 < ar.length){
      if (ar[idx1] === ar[idx2]){
        pairCount++;
        console.log('original' + ar)
        ar.splice(idx1,1);
        console.log('mid' + ar + 'idx2: ' + idx2)
        ar.splice(idx2-1,1);
        idx2 = idx1+1;
        console.log('end' + ar)
      }
      else if(idx2 === ar.length){
        idx1++;
        idx2 = idx1 +1;
      }else{
        idx2++;
      }
    }
    return pairCount;
}

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))
// console.log(sockMerchant(9,[10,20,20,10,10,50,10,20]))