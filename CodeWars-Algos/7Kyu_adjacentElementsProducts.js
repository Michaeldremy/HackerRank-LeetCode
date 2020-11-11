// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.


// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10 = 50.


function adjacentElementsProduct(array) {
  
  let highestSum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1 && array[i + 1] === 0) {
      highestSum = 0;
    }
    if (array[i] * array[i + 1] > highestSum) {
      highestSum = array[i] * array[i + 1];
    }
  }
  return highestSum;
}

//       i+1
//     i
// [1, 2, 3] : return 6;

// highestSum : 6

//                        i+1
//                    i
// [9, 5, 10, 2, 24, -1, -48] : return 50;

// highestSum : 50

//                                    i+1
//                                i
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] : return -14

// highestSum : -14


//               i+1
//           i
// [1, 0, 1, 0, 1000]

// highestSum : 0

console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));