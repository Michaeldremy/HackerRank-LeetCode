// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

// maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7

function maxDiff(list) {
  if (list.length <= 1) {
    return 0;
  }

  let sortedList = list.sort((a, b) => a - b);

  return sortedList[list.length - 1] - sortedList[0];
};

// refactored version
function maxDiffRefactored(list) {
  if(!list.length) return 0;
  // Using Math.max and Math.min while spreading the array
  return Math.max(...list) - Math.min(...list);
}


console.log(maxDiff([1, 2, 3, 4]))
console.log(maxDiffRefactored([1, 2, 3, 4]))