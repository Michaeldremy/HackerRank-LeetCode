// loop through the url and then find the correct values - im going use slice built in
// create an empty array - pushing the correct values
// loop through that empty array and then push into a string
// then return the string

// www.http://google.com start slice at 11 and then go until it finds the .com

// tempArr = www.http://google

function getDomain(url) {
  var countStart = 0;
  var countEnd = 0;

  for (var i = 0; i < url.length; i++) {
    if (url[i] === "/" && url[i] + 1 === "/") {
      break;
    }
    countStart = i;
  }
  for (var i = 0; i < url.length; i++) {
    console.log(url[i])
    console.log(countEnd);
    if (url[i] === "." && url[i] + 1 === "c") {
      break;
    }
    countEnd = i;
  }
  console.log(countStart, countEnd);
  var finalDomain = url.slice(countStart, countEnd);
  return finalDomain;
}

console.log(getDomain("www.http://google.com"));
