// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
/****************************************************
 *              Basic Language Features
 ****************************************************/

/* Grasshopper - Summation */
var summation = function (num) {
  // Code here
  // Initialize a variable to store the sum
  let sum = 0;

  // Iterate from 1 to the given number (num)
  for (let i = 1; i <= num; i++) {
    // Add each number to the sum
    sum += i;
  }

  // Return the final sum
  return sum;
};

/* Jenny's secret message */
function greet(name) {
  // Check if the name is "Johnny"
  if (name === "Johnny") {
    // If it is, return a special message
    return "Hello, my love!";
  } else {
    // Otherwise, return a generic greeting with the name
    return "Hello, " + name + "!";
  }
}

/* Function 1 - hello world */
// Write a function "greet" that returns "hello world!"
// const greet = () => "hello world!";

/* Count the Monkeys! */
function monkeyCount(n) {
  // your code here
  // Create an empty array to store the numbers
  let arr = [];

  // Iterate from 1 to n
  for (let i = 1; i <= n; i++) {
    // Push each number into the array
    arr.push(i);
  }

  // Return the array of numbers
  return arr;
}

/* Are You Playing Banjo? */
function areYouPlayingBanjo(name) {
  // Implement me
  // Check if the first character of the name is 'r' or 'R'
  if (name.charAt(0) === "r" || name.charAt(0) === "R") {
    // If the condition is true, return the name followed by "plays banjo"
    return name + " plays banjo";
  }

  // If the condition is false, return the name followed by "does not play banjo"
  return name + " does not play banjo";
}
