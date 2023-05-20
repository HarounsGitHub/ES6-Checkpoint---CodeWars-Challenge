// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
/****************************************************
 *                    Arrays
 ****************************************************/

/* Counting sheeps */
function countSheeps(arrayOfSheep) {
  // TODO: May the force be with you

  // Initialize a variable to keep track of the count of true values
  let result = 0;

  // Iterate over each element in the arrayOfSheep
  arrayOfSheep.forEach((el) => {
    // Check if the element is true (representing a sheep)
    // If it is true, increment the result count
    // If it is false, do nothing (no need to increment the count)
    el ? result++ : (result += 0);
  });

  // Return the final count of sheep
  return result;
}

/* Training on Ones and Zeros */

const binaryArrayToNumber = (arr) => {
  // your code
  // Convert the binary array to a decimal number using parseInt
  // Pass the joined array as the first argument
  // Specify the base as 2 since it's a binary number
  return parseInt(arr.join(""), 2);
};

/* A Needle in the Haystack */
function findNeedle(haystack) {
  // your code here
  // Iterate through the haystack array
  // Find the index of the element equal to "needle"
  // Return the result as a string
  let position = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      position = i;
      break;
    }
  }
  return "found the needle at position " + position;
}

/* Remove the minimum */
function removeSmallest(numbers) {
  // Check if the numbers array is empty or falsy, and return an empty array in that case
  if (!numbers) return [];

  // Create a copy of the numbers array to avoid modifying the original array
  let numbersCopy = [...numbers];

  // Find the minimum value in the numbers array using Math.min and apply
  var min = Math.min.apply(null, numbersCopy);

  // Find the index of the minimum value in the original numbers array
  // and remove it from the copy using splice
  numbersCopy.splice(numbers.indexOf(min), 1);

  // Return the modified copy of the numbers array
  return numbersCopy;
}

/* Convert number to reversed array of digits */
function digitize(n) {
  //code here
  // Create a helper function that converts a string digit to a number
  let convertToNumber = (digit) => Number(digit);

  // Convert the number to a string, split it into an array of characters,
  // and map each character to a number using the helper function
  var intArr = Array.from(String(n), convertToNumber);

  // Reverse the array and return it
  return intArr.reverse();
}
