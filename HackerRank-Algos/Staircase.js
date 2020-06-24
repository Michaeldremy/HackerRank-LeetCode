// https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen

function staircase(n){
    let filledArray = new Array(n).fill(' ');
        while (filledArray.indexOf(' ') !== -1) { 
            filledArray.shift();
            filledArray.push('#');
            console.log(filledArray.join(""));
            n--;
    }
}


function staircase1(n){
    let newArr = [];
    for(let i=0; i< n; i++){
        newArr.push(' ');
    }
    for(let i=0; i< n; i++){
        newArr.shift();
        newArr.push('#');
        console.log(newArr.join(''));
    }
}
staircase1(6);