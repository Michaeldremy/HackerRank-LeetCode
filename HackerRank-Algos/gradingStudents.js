// https://www.hackerrank.com/challenges/grading/problem

// any grade less than for 40 is a failing grade

function gradingStudents(grades) {
    let difference = 0;
    let newArr = [];
    
    for (let i = 0; i < grades.length; i++) {
        difference = 5 - grades[i] %5;
        if(grades[i] < 38){
            newArr.push(grades[i]);
        }
        else if(difference < 3){
            newArr.push(grades[i] + difference)
        }
        else{
            newArr.push(grades[i]);
        }
    console.log(newArr[i])
    }
    return newArr;
}
gradingStudents([73,67,38,33]);