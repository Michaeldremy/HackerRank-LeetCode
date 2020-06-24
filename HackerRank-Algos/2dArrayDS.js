// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
  function hourglassSum(arr) {
    let sum = 0;
    let prevSum = arr[0][0] + arr[0][1] +arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
    for (let i = 0; i < arr.length -2; i++) {
      for(let j = 0; j < arr.length -2; j++){
        sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            if(sum > prevSum){
                prevSum = sum;
            }
        }
    }
    return prevSum;
}
    console.log(hourglassSum(
        [[1,1,1,0,0,0],
        [0,1,0,0,0,0],
        [1,1,1,0,0,0],
        [0,0,2,4,4,0],
        [0,0,0,2,0,0],
        [0,0,1,2,4,0]]))