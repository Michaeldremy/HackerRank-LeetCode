// https://www.codewars.com/kata/546f922b54af40e1e90001da

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const alphabetPosition = (text) => {
  return text
    // changing string to lowercase
    .toLowerCase()
    // using regular expression to elminate special characters | "^" means "not" return all characters that are not these characters a-zA-Z
    .replace(/[^a-zA-Z]/g, "")
    // we are splitting to have single characters to create an array
    .split("")
    // we are going to use map to go through the text array and then return the index of alphabet + 1. We are adding + 1 because index starts at 0.
    .map((letter) => alphabet.indexOf(letter) + 1)
    // Then we are joining back to add a space and turn back into a string
    .join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))