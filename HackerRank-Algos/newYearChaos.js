// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// Can only move twice
// Need to start with biggest number
// Go to next biggest number....
// Once biggest number is to the front of the list, then stop
'use strict';
function minimumBribes(q) {
    let count = 0;
    for (let i = 0; i < q.length; i++){
      if ((q[i] - (i+1)) > 2){
              console.log("Too chaotic");
              count = 0;
              break;
          } else {
              count += (Math.abs(q[i] - (i+1)));
          }
        }
          console.log(count/2);
    }


console.log(minimumBribes([[2,5,1,3,4],[2,1,5,3,4]]))

