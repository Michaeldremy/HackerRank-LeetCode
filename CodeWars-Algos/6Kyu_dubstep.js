// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

// Using regular expression and the replace method to get rid of the "WUB" throughout the string. Also using trim method to remove any spaces before or after the string
// /syntax_to_start_regex/ () - is used to incapsulate the WUB every instance and the "+" removes one or more of the content inside the (). the "g" after the / is stands for global
// Then we are replacing the WUB with a space

const songDecoder = (song) => {
  return song.replace(/(WUB)+/g, " ").trim()
}

console.log(songDecoder("AWUBBWUBC"))