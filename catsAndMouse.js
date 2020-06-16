// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

/*

So we have two queries that are given to us
x represents the position for Cat A
y represents the position for Cat B
z represents the position for Mouse C

If one Cat is able to make it to the mouse first than we print out that specific Cat either Cat A or Cat B
else if both cats get to the mouse at the same time the mouse gets away and we print out Mouse C

Take Mouse C number, if it is minus 1 or plus 1 and is equal to either of the Cat positions then we know if the Cat is coming

1 2 3
x y z

1 3 2
x y z

22 75 70
x  y  z

*/

function catAndMouse(x, y, z) {
    if(Math.abs(y-z)> Math.abs(x-z)){
        return "Cat A"
    }
    else if(Math.abs(y-z)< Math.abs(x-z)){
        return "Cat B"
    }
    else{
        return "Mouse C"
    }
}

console.log(catAndMouse(22,75,70));