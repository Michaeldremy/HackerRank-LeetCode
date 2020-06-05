// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    let newArr = [];
    let obj1 = {};
    let count = 0;
    for(let i in a){
        let x = 0;
        while (x < b[0]){
            x+=a[i];
            newArr.push(x);
    }
}
    for(let i of newArr){ 
        obj1[i] =  (obj1[i] || 0) +1;
    }
    newArr = [];
    for(let val in obj1){
            if(obj1[val] === a.length){
                newArr.push(parseInt(val))
            }
        }
    let newArr2 = [];
    for(let j of newArr){
        for(let i of b){
            if(i % j === 0){
                newArr2.push(j);
            }
        }
    }
    let obj2 = {};
    for(let i of newArr2){ 
        obj2[i] =  (obj2[i] || 0) +1;
    }
    for(let val in obj2){
        if(obj2[val] === b.length){
            count++;
        }
    }
    return count;
}
console.log(getTotalX([2,4],[16, 32, 96]));