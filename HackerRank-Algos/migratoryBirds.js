// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    let obj = {};
    for (let i in arr) {
        if (obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = obj[arr[i]] + 1;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    let id = 0;
    let sightings = 0;
    for(let x in obj){
        if(obj[x] > sightings || sightings === obj[x] && id > parseInt(x)) {
            sightings = obj[x]
            id = parseInt(x);
        }
    }
    return id;
}

console.log(migratoryBirds([1,4,4,4,5,3]))