// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
/****************************************************
 *                     #Changing Gears
 ****************************************************/

/* Multiples of 3 or 5 */
//function to find the sum of all the multiples of 3 or 5 below the given number
function solution(number) {
  // Check if the number is negative, return 0
  if (number < 0) {
    return 0;
  }

  var sum = 0;

  // Iterate over numbers from 1 to (number - 1)
  for (var i = 1; i < number; i++) {
    // Check if the current number is divisible by 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      // Add the number to the sum
      sum += i;
    }
  }

  // Return the sum of multiples of 3 or 5 below the given number
  return sum;
}

/*  Sum of Digits / Digital Root */
// Check if the number is non-zero and divisible by 9
// If true, the digital root is 9
// Calculate the remainder when dividing the number by 9
// The result will be in the range [0, 8]
// If the number is divisible by 9, the remainder will be 0
// Otherwise, the remainder is the digital root of the number
const digitalRoot = (n) => (n !== 0 && n % 9 === 0 ? 9 : n % 9);

/* Who likes it */
function likes(names) {
  // TODO
  // Default empty array if names is not provided
  names = names || [];

  // Check the number of names and return the appropriate message
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

/* Find the party outlier */
// The function takes an array of integers as input
function findOutlier(integers) {
  //your code here
  // Filter even and odd numbers into separate arrays
  var even = integers.filter((a) => a % 2 === 0);
  var odd = integers.filter((a) => a % 2 !== 0);

  // Check the length of the even array to determine the outlier
  // If there is only one even number, return it; otherwise, return the first odd number
  return even.length === 1 ? even[0] : odd[0];
}

/* Stop gninnipS My sdroW! */
/* This function takes a string as input and reverses words with 5 or more characters, uses a regex
  to match words then replaced with their reversed, the modified string is then returned
  the function works with strings consisting of letters and spaces, and it preserves the original structure of the input string */
function spinWords(string) {
  //TODO Have fun :)
  // Replace words with 5 or more characters using a regular expression
  // The replace function takes a callback function to modify each matched word
  return string.replace(/\w{5,}/g, function (w) {
    // Split the word into an array of characters, reverse the order, and join them back into a string
    return w.split("").reverse().join("");
  });
}
