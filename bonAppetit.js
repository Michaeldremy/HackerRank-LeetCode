// https://www.hackerrank.com/challenges/bon-appetit/problem

/*

bill = array that is passed
k = indice that anna does not eat from the array
b = the amount anna has contributed to the total bill
bActualSplit = actual total of the bill split in half
brianCharged = what the bill was charged
towards end of the function we need to bCharged - brianActual to determine what we return.. either a number of the amount Brian owes Anna or Bon Appetit if the bill was split evenly

*/

function bonAppetit(bill, k, b) {
    let bActualSplit = 0;
    let finalBill = 0;
    for (let i = 0; i < bill.length; i++) {
        bActualSplit += bill[i];
    }
    bActualSplit = (bActualSplit - bill[k]) / 2;
    finalBill = b - bActualSplit;
    if (finalBill === 0) {
        return "Bon Appetit";
    }
    return finalBill;
}

console.log(bonAppetit([3,10,2,9],1,12))
// output = 5;