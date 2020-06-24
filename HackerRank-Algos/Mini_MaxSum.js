// https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

[1,3,5,7,9,10,11,12]

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;

    arr = arr.sort()
    for(let i = 0; i < arr.length - 1; i ++) {
        minSum += arr[i];
    }
    for (let j = 1; j < arr.length; j++) {
        maxSum += arr[j];
    }

    console.log(minSum, maxSum);
}

miniMaxSum([1,2,3,4,5])
miniMaxSum([7, 69, 2, 221, 8974])





function miniMaxSum(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  for(let i = 0; i < 5; i ++) {
      sum += arr[i];
  }
  for(let i of arr){
    if(i < min){
      min = i;
    }
    if(i > max){
      max = i;
    }
  }
  let minSum = sum - max;
  let maxSum = sum - min;
  console.log(minSum, maxSum);
}

miniMaxSum([1,2,3,4,5])
miniMaxSum([7, 69, 2, 221, 8974])