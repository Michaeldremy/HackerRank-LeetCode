function plusMinus1(arr){
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for(let i of arr){ 
        if(i > 0){
            pos ++;
        }
        else if(i < 0){
            neg++;
        }
        else{
            zero++;
        }
    }
    console.log(pos/arr.length);
    console.log(neg/arr.length);
    console.log(zero/arr.length);
}
console.log(plusMinus1([-4,3,-9,0,4,1]))
