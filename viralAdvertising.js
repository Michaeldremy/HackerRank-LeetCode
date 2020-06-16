// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    let cumulative = 0;

    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared/2)
        cumulative += liked;
        shared = liked*3;
    }
    return cumulative
}

console.log(viralAdvertising(3))

/*

let shared = 5;
let liked = 0; 2
let cumulative = 0;

forloop n times
then each time you iterate would floor it and assign it to a variable

for(let i = 0; i<n; i++) {

    liked = Math.floor(shared/2)
    cumulative += liked
    shared = liked*3
}
return cumulative;


diagam:
1st: 5 people shared, 2 liked advertisement
2nd: 6 people shared, 3 liked advertisement
3rd: 9 people shared, 4 liked advertisement

input: 3 = days shared
output : 9 = amount liked total







*/