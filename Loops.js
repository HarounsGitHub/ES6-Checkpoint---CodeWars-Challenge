// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
/****************************************************
 *                     Loops
 ****************************************************/

/* Sentence smash */
/* The function smash takes an array of words and joins them together 
into a single string separated by spaces */
// Solution 1: using loops
function smash(words) {
  // Initialize an empty string to store the result
  let result = "";

  // Iterate over each word in the 'words' array
  for (let i = 0; i < words.length; i++) {
    // Append the current word to the result string
    result += words[i];

    // Add a space after each word except for the last one
    if (i !== words.length - 1) {
      result += " ";
    }
  }

  // Return the final result string
  return result;
}

// Solution 2:
function smashSolution2(words) {
  return words.join(" ");
}

/* If you can't sleep, just count sheep!! */
// Solution 1: using loops
var countSheep = function (num) {
  //your code here
  var result = "";

  // Iterate from 1 to num
  for (var i = 1; i <= num; i++) {
    // Concatenate the current number with " sheep..." and add it to the result string
    result += i + " sheep...";
  }

  // Return the final result string
  return result;
};

// Solution 2:
var countSheepSolution2 = function (num) {
  //your code here
  /* Create an array of numbers from 0 to 'num-1' using the spread operator 
    and Array.keys() */
  // For example, if num = 3, the array will be [0, 1, 2]
  /* Reduce the array of numbers to a single string by concatenating 
    each number with " sheep..." */
  // Starting with an empty string as the initial value
  // The final result is a string for ex: "1 sheep...2 sheep...3 sheep..."
  return [...Array(num).keys()].reduce(
    (res, i) => res + (i + 1) + " sheep...",
    ""
  );
};

/* Double char */
/* The doubleChar function takes a string as input and returns a new string 
  where each character in the input string is repeated once.  */
function doubleChar(str) {
  // Your code here
  // Create an empty string to store the new string
  var newStr = "";

  // Iterate through each character in the input string
  for (var i = 0; i < str.length; i++) {
    // Concatenate the current character twice and add it to the new string
    newStr += str.charAt(i) + str.charAt(i);
  }

  // Return the new string
  return newStr;
}

/* Unfinished Loop - Bug Fixing #1 */
/* Due to the missing increment of the counter variable, it would remain at the initial value of 1, 
  and the loop condition would always evaluate to true, resulting in an infinite loop. */
// Before:   for(var counter = 1; counter <= number;)
function createArray(number) {
  // Create an empty array to store the numbers
  var newArray = [];

  // Iterate from 1 to the specified number (inclusive)
  for (var counter = 1; counter <= number; counter++) {
    // Add the current number to the newArray
    newArray.push(counter);
  }

  // Return the newArray containing the numbers
  return newArray;
}

/* Sum of numbers from 0 to N */
/* The function provides a way to calculate the sum of a sequence of numbers and display it as a string */
// Solution 1 : /* Using For & While as suggested in the exercise as below */

// var SequenceSum = (function() {
//   function SequenceSum() {}
//   SequenceSum.showSequence = function(count) {
//     // for
//       //while
//   };
//   return SequenceSum;
// })();
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let arr = [];

    // Using for loop to populate the sequence array
    for (let i = 0; i <= count; i++) {
      arr.push(i);
    }

    let sum = 0;
    let i = 0;

    // Using while loop to calculate the sum
    while (i <= count) {
      sum += i;
      i++;
    }

    let sequence = arr.join("+");

    if (count < 0) return `${count}<0`;
    if (count === 0) return `${count}=0`;

    return `${sequence} = ${sum}`;
  };

  return SequenceSum;
})();

// Solution 2: using reduce() instead of while
var SequenceSumSolution2 = (function () {
  // Constructor function for SequenceSum
  function SequenceSum() {}

  // Static method to show the sequence and calculate the sum
  SequenceSum.showSequence = function (count) {
    let arr = [];

    // Populating the sequence array using a for loop
    for (let i = 0; i <= count; i++) {
      arr.push(i);
    }

    // Calculating the sum of the sequence using reduce method
    let sum = arr.reduce((total, next) => total + next, 0);

    // Creating a string representation of the sequence by joining the elements with '+'
    let sequence = arr.join("+");

    // Checking for special cases
    if (count < 0) return `${count}<0`;
    if (count == 0) return `${count}=0`;

    // Returning the sequence and the sum in the desired format
    return `${sequence} = ${sum}`;
  };

  // Returning the SequenceSum object
  return SequenceSum;
})();
