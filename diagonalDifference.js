function diagonalDifference(arr) {
    if(arr.length !== arr[0].length){
        return null;
    }
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    const squareRowCol = arr.length -1;
    for(let i = 0; i <= squareRowCol; i++){
        firstDiagonal += arr[i][i];
        if(i === squareRowCol){
            secondDiagonal += arr[0][i];
        }
        else if(i <= Math.floor(arr.length/2) && i !== 0){
            secondDiagonal += arr[squareRowCol-i][i];
        }
        else if(i > Math.floor(arr.length/2) && i !== squareRowCol){
            secondDiagonal += arr[squareRowCol-i][i];
        }
        else{
            secondDiagonal += arr[squareRowCol][0];
        }
    }
    let result = Math.abs(firstDiagonal - secondDiagonal);
    return result;
}

console.log(diagonalDifference([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]));