// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
/****************************************************
 *             Warming Up (Fundamentals)
 ****************************************************/

/* Vowel Count */
const getCount = (str) => {
  // Define an array to store the vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Convert the input string to lowercase
  const lowerStr = str.toLowerCase();

  // Convert the string to an array of characters using the spread operator
  const charArray = [...lowerStr];

  // Filter the array to keep only the characters that are vowels
  const vowelsArray = charArray.filter((char) => vowels.includes(char));

  // Return the count of vowels by returning the length of the filtered array
  return vowelsArray.length;
};
// As in the checkpoint instructions: for the sake of using a for loop & switch statement:
function getCountSolutionTwo(str) {
  var vowelsCount = 0; // Variable to store the count of vowels

  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i); // Get the character at the current index

    switch (character) {
      case "a": // If the character is 'a'
      case "e": // If the character is 'e'
      case "i": // If the character is 'i'
      case "o": // If the character is 'o'
      case "u": // If the character is 'u'
        vowelsCount++; // Increment the count of vowels
        break;
      default:
        continue; // Skip to the next iteration for non-vowel characters
    }
  }

  return vowelsCount; // Return the count of vowels
}

function getCountSolutionThree(str) {
  // The match() method searches the string for all occurrences of vowels (case-insensitive)
  // and returns them as an array
  // If there are no matches, an empty array is returned
  // The || [] part ensures that if the result is null or undefined (no matches), an empty array is used instead
  var matches = str.match(/[aeiou]/gi) || [];

  // Return the length of the matches array, which gives the count of vowels
  return matches.length;
}

/* Even or Odd */
const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

/* Get the Middle Character */

function getMiddle(s) {
  const length = s.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // For even length, return the middle two characters
    return s[middleIndex - 1] + s[middleIndex];
  } else {
    // For odd length, return the middle character
    return s[middleIndex];
  }
}

/* Opposite number */
const opposite = (number) => -number;

/* Mumbleling */
// As in the checkpoint instructions: for sake of using loops
// Solution 1:
function accum(s) {
  let strBuilt = ""; // Variable to store the resulting string

  for (let i = 0; i < s.length; i++) {
    // Iterate over each character in the input string
    if (i === 0) {
      // For the first character
      strBuilt += s.charAt(i).toUpperCase() + "-"; // Convert to uppercase and append to the resulting string with a hyphen
    } else {
      // For subsequent characters
      strBuilt += s.charAt(i).toUpperCase(); // Convert to uppercase and append to the resulting string

      for (let j = 0; j < i; j++) {
        // Repeat the lowercase character based on its index
        strBuilt += s.charAt(i).toLowerCase(); // Convert to lowercase and append to the resulting string
      }

      strBuilt += "-"; // Append a hyphen after each character
    }
  }

  return strBuilt.slice(0, -1); // Remove the last hyphen and return the resulting string
}

// Solution 2:
function BestAccum(s) {
  return s
    .split("")
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}
// Solution 3:
// clearer code
function ClearAccum(s) {
  return s
    .split("") // Split the input string into an array of characters
    .map((char, index) => {
      // Map over each character
      const uppercaseChar = char.toUpperCase(); // Convert the character to uppercase
      const repeatedChars = char.toLowerCase().repeat(index); // Repeat the lowercase character based on its index
      return uppercaseChar + repeatedChars; // Concatenate the uppercase and repeated lowercase characters
    })
    .join("-"); // Join the modified characters with hyphens
}

/* You're a square! */
// Solution 1:
// Check if n is greater than or equal to 0 and the square root of n is an integer
var isSquare = (n) => n >= 0 && Math.sqrt(n) % 1 === 0;

/* Disemvowel Trolls: remove vowels from string */

// Use regular expression to match and remove vowels (both lowercase and uppercase)
const disemvowel = (str) => str.replace(/[aeiou]/gi, "");

// Solution 2:
// Solution using an array of vowels, includes() and a for loop
function disemvowelSolutionTwo(str) {
  // Array of vowels (both lowercase and uppercase)
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Resulting string without vowels
  let result = "";

  // Iterate over each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is not a vowel
    if (!vowels.includes(str[i])) {
      // Append the character to the result string
      result += str[i];
    }
  }

  // Return the resulting string without vowels
  return result;
}

/* Highest and lowest */
// Solution 1:
function highAndLow(numbers) {
  // Split (method) the input string with a space into an array of numbers string
  // map() along with Number convert each string to its numerical value
  const numArray = numbers.split(" ").map(Number);

  // Find the highest and lowest numbers using Math.max and Math.min functions
  /* The spread syntax allows passing the elements of the array 
as individual arguments to Math.max */
  const highest = Math.max(...numArray);
  /*Find the lowest number in the numArray using the spread syntax ... 
 and the Math.min function. */
  const lowest = Math.min(...numArray);

  // Return the highest and lowest numbers as a string separated by a space
  /* Concatenate the highest and lowest numbers as strings 
  separated by a space using the + operator. */
  return highest + " " + lowest;
}
// Solution 2:
const highAndLowSolutionTwo = (numbers) =>
  Math.max(...numbers.split(" ")) + " " + Math.min(...numbers.split(" "));

/* Exes and Ohs: Check to see if a string has the same amount of 'x's and 'o's. */
// Solution 1:
function XO(str) {
  /* Convert the input string to lowercase for case-insensitive comparison
in each count
*/
  /* Count the occurrences of 'x' by splitting the lowercase string on 'x'
   into substrings and subtracting last string 
   from the resulting array length */
  const countX = str.toLowerCase().split("x").length - 1;

  // Count the occurrences of 'o' by splitting the lowercase string on 'o'
  // and subtracting 1 from the resulting array length
  const countO = str.toLowerCase().split("o").length - 1;

  // Check if the count of 'x' is equal to the count of 'o' by returning a boolean
  // of a strict comparaison
  return countX === countO;
}
// Solution 2:
const XOSolutionTwo = (str) =>
  // Use match with the regular expression /x/gi to find all occurrences of 'x' in the string,
  // and store the resulting array in x. If no matches are found, use an empty array as a default value.
  (str.match(/x/gi) || []).length ===
  // Use match with the regular expression /o/gi to find all occurrences of 'o' in the string,
  // and store the resulting array in o. If no matches are found, use an empty array as a default value.
  (str.match(/o/gi) || []).length;

/* Square Every Digit / Digit*Digit */
// Solution 1:
function squareDigits(num) {
  // Convert the number to a string and split it into an array of digits
  var initialArray = ("" + num).split("");

  // Initialize empty arrays to store the processed digits and squared digits
  var newArr = [];
  var newArr2 = [];

  // Iterate over each digit in the initial array and convert them to numbers
  initialArray.map((el) => {
    newArr.push(parseInt(el));
  });

  // Square each digit and store the squared values in the newArr2 array
  newArr.map((el) => {
    newArr2.push(Math.pow(el, 2));
  });

  // Concatenate the squared digits as strings
  let str = "";
  newArr2.map((el) => {
    str = str + el;
  });

  // Convert the concatenated string of squared digits back to a number and return it
  return parseInt(str);
}
// Solution 2:
function squareDigitsSolution2(num) {
  // Convert the number to a string by concatenating it with an empty string
  // This allows us to treat it as an array of characters
  const str = "" + num;

  // Split the string into an array of individual digits
  // Each digit will be represented as a string element in the array
  const digits = str.split("");

  // Use the map() method to iterate over each digit in the array
  // and perform a transformation on each element
  const squaredDigits = digits.map(function (digit) {
    // Convert the digit from string to number
    // so that we can perform mathematical operations
    const num = Number(digit);

    // Square the digit by multiplying it with itself
    const squared = num * num;

    // Return the squared digit
    // The map() method will create a new array with the transformed elements
    return squared;
  });

  // Join the squared digits together into a single string
  // This concatenates all the elements of the array without any separator
  const resultStr = squaredDigits.join("");

  // Convert the resulting string of squared digits back to a number
  // using the Number() constructor function
  const resultNum = Number(resultStr);

  // Return the final result as a number
  return resultNum;
}
// Solution 3: Solution 2 shortened
function squareDigitsSol2(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

/* Shortest word */
// Solution 1:
function findShort(s) {
  // Split the string into an array of words
  let arr = s.split(" ");

  // Create an array to store the lengths of each word
  let arrCounts = [];

  // Iterate over each word in the array and push its length to arrCounts
  arr.map((el) => {
    arrCounts.push(el.length);
  });

  // Find the minimum value from the array of word lengths
  return Math.min(...arrCounts);
}
// Solution 2:
// Find the minimum value from the array of word lengths

// Split the string into an array of words
// using the space character as the delimiter
// Use map() to transform each word into its length
function findShortSolutionTwo(s) {
  // Apply Math.min() function to find the minimum value
  // from the array of word lengths
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

/*Complementary DNA */
// Solution 1:
function DNAStrand(dna) {
  //your code here
  // Initialize an empty string to store the result
  let result = "";

  // Iterate over each character in the DNA string
  for (let i = 0; i < dna.length; i++) {
    // Check the current character and append the complementary base to the result string
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    }
  }

  // Return the resulting complementary DNA strand
  return result;
}
// Solution 2:
// Define an object that represents the pairs of complementary DNA bases
var pairs = { A: "T", T: "A", C: "G", G: "C" };

// Define a function to generate the complementary DNA strand
function DNAStrandSolutionTwo(dna) {
  // Split the input DNA string into an array of individual characters
  // Use map() to iterate over each character and replace it with its complementary base
  // Return the resulting array of complementary bases as a string by joining them together
  return dna
    .split("")
    .map(function (v) {
      // Retrieve the complementary base from the pairs object based on the current character
      return pairs[v];
    })
    .join("");
}

/* Descending order */
// Solution 1:
// Define a function to arrange the digits of a number in descending order
function descendingOrder(n) {
  //...
  // Convert the input number to a string and split it into an array of individual digits
  var initialArray = ("" + n).split("");

  // Initialize an empty array to store the parsed digits
  var newArr = [];

  // Iterate over each digit in the initial array and parse it into an integer
  initialArray.map((el) => {
    newArr.push(parseInt(el));
  });

  // Sort the array of parsed digits in ascending order
  newArr.sort();

  // Reverse the sorted array to get the digits in descending order
  newArr.reverse();

  // Concatenate the digits into a string
  let str = "";
  newArr.map((el) => {
    str += el;
  });

  // Convert the resulting string back to an integer and return it
  return parseInt(str);
}

// Solution 2:
/* Convert the input number n to a string using String().
Spread the string into an array using the spread syntax ....
Sort the array of digits in ascending order using sort().
Reverse the sorted array using reverse().
Join the reversed array of digits back into a string using join('').
Convert the resulting string back to an integer using parseInt() and return it.*/
const descendingOrder = (n) =>
  parseInt(String(n).split("").sort().reverse().join(""));

/* Sum of positive */
// Solution 1:
function positiveSum(arr) {
  let sum = 0;

  // Iterate over each element in the array
  arr.map((el) => {
    // Check if the element is greater than 0
    if (el > 0) {
      // If the element is positive, add it to the sum
      sum += el;
    }
  });

  // Return the final sum
  return sum;
}
// Solution 2:
/* The arrow function takes an array arr as input.
The reduce method is called on the arr array.
Within the reduce method, an accumulator a and a current value b are provided as 
parameters.
For each iteration, the ternary operator (b > 0 ? b : 0) checks if the current 
value b is positive. If it is, b is added to the accumulator a. 
If it is not, 0 is added to the accumulator a.
The initial value of the accumulator is set to 0 using the second argument 
of the reduce method.
After all iterations are completed, the final value of the accumulator a 
is returned as the result. */

const positiveSumSol2 = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

/* Isograms */
function isIsogram(str) {
  // Use the `match` method with a regular expression pattern to check for repeated characters
  // The pattern /([a-z]).*\1/i matches any character from a to z (case-insensitive),
  // followed by any number of characters (.*), and then the captured group \1 (same character as the first match)
  // If there is a match, it means there are repeated characters in the string
  // If there is no match, it means the string is an isogram
  return !str.match(/([a-z]).*\1/i);
}

/* List filtering */
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((el) => typeof el !== "string");
}

/* find the smallest integer in an array*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

/* Sum of two lowest integers */
function sumTwoSmallestNumbers(numbers) {
  //Code here

  // Initialize an array to store the two smallest numbers
  let arrSmallest = [];

  // Find the two smallest numbers in the array
  while (arrSmallest.length < 2) {
    // Find the minimum number in the remaining numbers
    let min = Math.min(...numbers);

    // Find the position (index) of the minimum number
    let minPos = numbers.indexOf(min);

    // Remove the minimum number from the original array
    numbers.splice(minPos, 1);

    // Add the minimum number to the array of smallest numbers
    arrSmallest.push(min);
  }

  // Calculate the sum of the two smallest numbers using reduce
  let result = arrSmallest.reduce((acc, curr) => {
    return acc + curr;
  });

  // Return the sum of the two smallest numbers
  return result;
}

/* Growth of population */
// Solution 1: Using a for loop
/* Growth of population */
function nbYear(p0, percent, aug, p) {
  // Initialize the variable to keep track of the number of years
  var years = 0;

  // Continue the loop until the current population (p0) reaches or exceeds the target population (p)
  for (; p0 < p; years++) {
    // Calculate the new population after one year using the growth formula
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }

  // Return the number of years required
  return years;
}
// Solution 2: Using a while loop
function nbYear(p0, percent, aug, p) {
  // Initialize the variable to keep track of the number of years
  var years = 0;

  // Continue the loop until the current population (p0) reaches or exceeds the target population (p)
  while (p0 < p) {
    // Calculate the new population after one year using the growth formula
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);

    // Increment the number of years
    years++;
  }

  // Return the number of years required
  return years;
}

/* String repeat */
function repeatStr(n, s) {
  // Use the `repeat` method of the string object to repeat the input string `s` `n` times
  return s.repeat(n);
}
