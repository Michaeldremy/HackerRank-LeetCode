function findMedian(arr1, arr2) {
  var median = 0;
  //combine 2 arrays
  var arr = arr1.concat(arr2);
  var temp = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  if (arr.length % 2 === 1) {
    median = arr[Math.ceil(arr.length / 2)];
  }

  //re sort arrays
  //find middle
  return median;
}

//2 sorted arrays passed
//find median

arr1 = [1, 2, 9];
arr2 = [3, 4, 7, 13];
console.log(findMedian(arr1, arr2));
