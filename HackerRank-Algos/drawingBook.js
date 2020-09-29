// https://www.hackerrank.com/challenges/drawing-book/problem

// They can turn the pages from the front or the back
// Page 1 is always on the right side

// n is length of pages
// p is what page to arrive at

// ultimately we will end up with two for loops either incrementing by 2 or decerementing by 2
// two counter variables one for start and one for end and then compare at the end by saying if they are equal or one is less than the other then we we return the count

function pageCount(n, p) {
  var frontCount = 0;
  var backCount = 0;
  for (var i = 1; i <= n; i++) {
    if ( i === p || i + 1 === p){
      frontCount++;
      break;
    } else {
      frontCount++;
    }
  }
  for (var x = n; x >= 0; x--) {
    if ( x === p || x - 1 === p){
      backCount++;
      break;
    } else {
      backCount++;
    }
  }
  if (frontCount === backCount) {
    return console.log("This is from the first if block" + frontCount);
  }
  if (frontCount < backCount) {
    return console.log("This is from the second if block" + " " + frontCount);
  }
  if (backCount < frontCount) {
    return console.log("This is from the third if block" + backCount)
  }
}

// Start = 0;
// PageToGetTO = 6;
// 1 2 3 4 5
//     i
//         x

// frontCount = 2
// backCount =
// if (n[i] === p || n[i] + 1 === p)
// frontCount++
console.log(pageCount(5, 4))