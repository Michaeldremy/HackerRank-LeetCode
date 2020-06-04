// https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen

function countAppleAndOranges(s, t, a, b, apples, oranges) {
  let applesArr = [];
  let orangesArr = [];
  let countApples = 0;
  let countOranges = 0;
    for(let i of apples){
        applesArr.push(i+a);
    }
    for(let i of oranges){
        orangesArr.push(i+b);
    }
    for (let i of applesArr){
        if(i >= s && i <= t){
            countApples++;
        }
    }
    for (let i of orangesArr){
        if(i >= s && i <= t){
            countOranges++;
        }
      }
      console.log(countApples);
      console.log(countOranges);
    return [countApples, countOranges];
}

console.log(countAppleAndOranges(7,11,5,15,[-2,2,1],[5,-6]));