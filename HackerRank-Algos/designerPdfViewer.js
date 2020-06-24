// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) { 
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let newArray = []
    let number = 0;
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (word[i] === alphabet[j]) {
                newArray.push(j)
            }
        }
    }
    console.log(newArray)
    for (let i = 0; i < newArray.length; i++) {
        if (h[newArray[i]] > number) {
            number = h[newArray[i]]
        }
    }
    number *= word.length;
    return number
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"))

/*

Create a new array that holds the whole alphabet
Then we can loop through the alphabet array
return word[i] which will give the index within the array for word

Loop through h which holds the intergers in an array
1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7

if the word indice matches the element in the alphet and h we will return it into a variable

zaba = 7,1,3,1

*/