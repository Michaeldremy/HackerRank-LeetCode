// https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// 12:40:22AM
// 00:40:22

// 06:40:03AM
// 06:40:03

function timeConversion(s){
  let newTime;
  let hour = 0;
  let sec = "";
  let splitStr = s.split(":");
  if (s[8] === "P"){
    hour = parseInt(splitStr[0]) + 12;
    sec = splitStr[2].split("P")[0];
    if(hour === 24){
      hour = "12";
    }
  }
  else {
    hour = splitStr[0];
    sec = splitStr[2].split("A")[0];
    if(hour === "12"){
      hour = "00";
    }
  }
  newTime = hour + ":" + splitStr[1] + ":"+ sec;
  return newTime;
}

console.log(timeConversion('12:40:22AM'));    
