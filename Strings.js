// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
/****************************************************
 *                    Strings
 ****************************************************/

/* Reversed Strings */
function solution(str) {
  // Split the string into an array of characters
  // Reverse the order of the elements in the array
  // Join the elements of the array back into a string
  return str.split("").reverse().join("");
}

/* String ends with? */
/* Complete the solution 
  so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
  Examples:
  solution('abc', 'bc') // returns true
  solution('abc', 'd') // returns false */
function solution(str, ending) {
  // TODO: complete
  // Check if the given string ends with the specified ending
  return str.endsWith(ending);
}

/* Do I get a bonus? */
function bonusTime(salary, bonus) {
  // your code here
  // Initialize the variable to store the total
  let total = 0;

  // Check if a bonus is awarded
  if (bonus) {
    // Calculate the total by multiplying the salary by 10
    total = salary * 10;
  } else {
    // Otherwise, the total is the same as the salary
    total = salary;
  }

  // Return the total formatted as a string with the currency symbol
  return "\u00A3" + total;
}

/* Abbreviate a Two Word Name */
function abbrevName(name) {
  // code away
  // Split the name into an array of words
  let arr = name.split(" ");
  // Initialize a variable to store the result
  let result = "";
  // Iterate through each word in the array
  for (let i = 0; i < arr.length; i++) {
    // Get the first character of each word and convert it to uppercase
    result += arr[i].charAt(0).toUpperCase() + ".";
  }
  // Remove the last character (extra period) and return the result
  return result.slice(0, -1);
}

/* DNA to RNA Conversion */
function DNAtoRNA(dna) {
  // Create a function which returns an RNA sequence from the given DNA sequence
  // Replace all occurrences of "T" in the DNA sequence with "U" to get the RNA sequence
  return dna.replace(/T/g, "U");
}
