// CodeWars challenges:
// Contains all the solutions of the other files
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
/****************************************************
 *                    Algorithms
 ****************************************************/

/* Is this a triangle? */
function isTriangle(a, b, c) {
  // Check if any of the side lengths is less than or equal to zero
  // If so, it is not a valid triangle
  if (a <= 0 || b <= 0 || c <= 0) return false;

  // Check the triangle inequality theorem to determine if the side lengths can form a triangle
  // If the sum of any two side lengths is greater than the third side length for all combinations,
  // then it is a valid triangle
  if (a + b > c && a + c > b && c + b > a) return true;
  else return false;
}

/* find the next perfect square */
function findNextSquare(sq) {
  // Check if sq is a perfect square by taking its square root and checking if the result is an integer
  // If it is a perfect square, calculate and return the next perfect square
  // by adding 1 to the square root and squaring the result
  // If it is not a perfect square, return -1
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

/* Credit Card Mask */
// return masked string
function maskify(cc) {
  // Get all characters of the credit card number except the last four characters
  // and replace each character with a '#' symbol using the `replace` method and a regular expression
  // Concatenate the result with the last four characters of the credit card number
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

/* Sum of odd numbers */
function rowSumOddNumbers(n) {
  // TODO

  // Calculate the sum of the odd numbers in the nth row of the number pyramid
  // by raising n to the power of 3
  return n * n * n;
}

/* find the devisors */
// Solution 1:
function divisors(integer) {
  // Initialize an empty array to store the divisors
  var res = [];

  // Iterate from 2 up to the largest possible divisor (integer/2)
  for (var i = 2; i <= Math.floor(integer / 2); ++i) {
    // Check if the current number (i) is a divisor of the input integer
    if (integer % i == 0) {
      // If it is a divisor, add it to the result array
      res.push(i);
    }
  }

  // Check if any divisors were found
  if (res.length) {
    // If divisors were found, return the array of divisors
    return res;
  } else {
    // If no divisors were found, return a string indicating that the number is prime
    return integer + " is prime";
  }
}
// Solution 2: Solution 1 shortened
function divisorsSol1(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + " is prime";
}

/****************************************************
 *                    Data Types
 ****************************************************/

/* Return Negative */
function makeNegative(num) {
  // Code?
  // Check if the number is already negative
  if (num < 0) {
    // If it is negative, return the number as is
    return num;
  } else {
    // If it is positive or zero, multiply it by -1 to make it negative
    return num * -1;
  }
}

/* Remove First and Last Character */
function removeChar(str) {
  //You got this!
  // Use the `slice` method to remove the first and last characters of the string
  // The first parameter of `slice` is the starting index (inclusive), which is 1 to skip the first character
  // The second parameter of `slice` is the ending index (exclusive), which is -1 to exclude the last character
  return str.slice(1, -1);
}

/* remove string spaces */
function noSpace(x) {
  // Use the `replace` method with a regular expression to remove all whitespace characters
  // The regular expression /\s/g matches all whitespace characters
  // The second parameter of `replace` is an empty string, which replaces each match with nothing
  return x.replace(/\s/g, "");
}

/* Convert boolean values to strings 'Yes' or 'No'. */
function boolToWord(bool) {
  // Use a ternary operator to check the value of bool
  // If bool is true, return "Yes"
  // If bool is false, return "No"
  return bool === true ? "Yes" : "No";
}

/* Convert a Number to a String */
function numberToString(num) {
  // Return a string of the number here!
  // Convert the number to a string using the `toString` method
  return num.toString();
}

/****************************************************
 *                    Numbers
 ****************************************************/

/* Basic Mathematical Operations */
function basicOp(operation, value1, value2) {
  // Perform the corresponding operation based on the input
  if (operation === "+") {
    return value1 + value2; // Addition
  }
  if (operation === "-") {
    return value1 - value2; // Subtraction
  }
  if (operation === "*") {
    return value1 * value2; // Multiplication
  }
  if (operation === "/") {
    if (value2 > 0) {
      return value1 / value2; // Division (only if value2 is not zero)
    }
  }
}

/* Sum of the first nth terms of series */
function SeriesSum(n) {
  // Happy Coding ^_^
  let result = 0; // Initialize the result variable
  let reverage = 1; // Initialize the denominator for the series
  for (let i = 0; i < n; i += 1) {
    // Iterate from 0 to n
    if (i === 0) {
      // For the first iteration
      result = 1; // Set the result to 1
    } else {
      reverage += 3; // Increase the denominator by 3 for each iteration
      result = result + 1 / reverage; // Calculate the series sum by adding 1 divided by the denominator to the result
    }
  }
  return result.toFixed(2); // Return the result rounded to 2 decimal places
}

/* Keep hydrated */
function litres(time) {
  // Calculate the number of liters based on the input time
  // 0.5 liters are what Nathan drinks per hour of cycling

  return Math.floor(time * 0.5); // result rounded down to the nearest whole number
}

/* Century From Year */
function century(year) {
  // Finish this :)
  // Calculate the century based on the input year
  // Divide the year by 100 and round up the result to the nearest whole number

  return Math.ceil(year / 100); // Return the calculated century
  /* The Math.ceil() function is a built-in JavaScript method 
  that returns the smallest integer greater than or equal to a given number. 
  It rounds up the number to the next whole integer.
  console.log(Math.ceil(4.2)); // Output: 5
  console.log(Math.ceil(9.8)); // Output: 10
  console.log(Math.ceil(1.0)); // Output: 1
  */
}

/* Beginner - Lost Without a Map */
// Given an array of integers, return a new array with each value doubled.
function maps(x) {
  // Create a new array to store the modified elements
  let newarr = x.map((el) => el * 2);

  // Return the new array with the modified elements
  return newarr;
}

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

/****************************************************
 *                    Objects
 ****************************************************/

/* Make a function that does arithmitic */
// Solution 1: Using an object literal (the best)
const arithmetic = (a, b, operator) =>
  ({
    // Object literal with shorthand property values
    add: a + b, // Addition operation
    subtract: a - b, // Subtraction operation
    multiply: a * b, // Multiplication operation
    divide: a / b, // Division operation
  }[operator]); // Access the desired operation based on the operator input

// Solution 2: Using a switch statement
function arithmeticSolution2(a, b, operator) {
  //your code here!
  // Perform arithmetic operations based on the provided operator
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      return "wrong operator";
  }
}

/* Regular Ball Super Ball */
var Ball = function (ballType = "regular") {
  // your code goes here
  // Constructor function for the Ball object
  // Set the ballType property to the provided value or default to "regular"
  this.ballType = ballType;
};

// Export the Ball constructor as a module
module.exports = Ball;

/* Make them bark! */
// TODO: solve the barking problem!
/* // The already made constructor
function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
} */
// test the code below on the CodeWars kata: https://www.codewars.com/kata/5535572c1de94ba2db0000f6/train/javascript
// Add the .bark() method to the prototype of Dog objects
Dog.prototype.bark = function () {
  return "Woof!";
};

/* Add property to every object in array
  remove comment from the code below and copy it to your code wars kata
*/
//write your code here
// Iterate over each object in the questions array
questions.forEach(function (q) {
  // Add the usersAnswer property to the current object and set it to null
  q.usersAnswer = null;
});

/*  FIXME: Get Full Name*/
// The Dinglemouse class represents a person with a first name and a last name.
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // The getFullName method returns the full name of the person by concatenating the first name and last name.
  // It also trims any leading or trailing whitespace.
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

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

/****************************************************
 *       Conditional Statements (Control Flow)
 ****************************************************/

/* Find the capitals */
// The function takes a word (string) as input and returns an array
//containing the indexes of the uppercase letters in the word.
var capitals = function (word) {
  // Write your code here
};
var capitals = function (word) {
  // Split the word into an array of characters
  return word
    .split("")
    .map(function (l, i) {
      // Map over each character and its index
      // If the character is uppercase, return its index
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      // Filter out null values from the mapped array
      return i != null;
    });
};

/* Plural */
/* The function determines whether a noun should be plural 
based on the value of n. 
If n is equal to 1, it returns false indicating singular form. 
Otherwise, it returns true indicating plural form.*/
function plural(n) {
  // Check if n is equal to 1
  if (n == 1) return false; // Singular case, return false
  return true; // Plural case, return true
}

/* Drink about */
/* The function determines the appropriate drink based on the age given as input. 
It uses conditional statements to check the age range and returns the corresponding drink recommendation. */
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old >= 14 && old < 18) {
    return "drink coke";
  } else if (old >= 18 && old < 21) {
    return "drink beer";
  } else if (old >= 21) {
    return "drink whisky";
  }
}

/* Leonardo Decaprio and oscars */
/* The function checks the value of the oscar variable and returns a corresponding message 
based on its value. It uses conditional statements to determine the appropriate response. */
function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  if ((oscar !== 86) & (oscar !== 88) && oscar < 88)
    return "When will you give Leo an Oscar?";
  if (oscar > 88) return "Leo got one already!";
}

/*Switch/Case - Bug Fixing #6 */
/* Adding the missing break statements ensures that 
only the relevant case is executed and the switch statement is properly exited. */
function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

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

/****************************************************
 *                   * #Fire At Will
 *         More problems to achieve 300 points
 ****************************************************/

/**
 * 01
 * title: A Chain adding function
 * link : https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
 */
// Solution:
var add = function (n) {
  // Define a function 'f' that takes a value 'x' and adds it to the accumulated sum 'n'
  const f = (x) => add(n + x);

  // Define the 'valueOf' method for 'f' to return the current accumulated sum 'n'
  f.valueOf = () => n;

  // Return the function 'f' that allows for currying and accumulation of values
  return f;
};

/**
 * 02
 * title : Your order, please
 * link: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 */
// Solution:
function order(words) {
  // Return an empty string if the input string is empty
  if (words === "") {
    return "";
  }

  // Split the input string into an array of words
  const wordArr = words.split(" ");

  // Create an array to store the sorted words
  const sortedArr = [];

  // Iterate through the word array
  for (let i = 1; i <= wordArr.length; i++) {
    // Find the word with the current position 'i'
    const word = wordArr.find((w) => w.includes(i));

    // Add the word to the sorted array
    sortedArr.push(word);
  }

  // Join the sorted array of words into a string with spaces
  const sortedStr = sortedArr.join(" ");

  // Return the sorted string
  return sortedStr;
}

/**
 * 03
 * title : Best travel
 * link: https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript
 */
// Solution:
/* The function takes a maximum sum t, a number of towns to visit k, and a list of distances ls. 
It finds the largest possible sum of k distances from the list that is less than or equal to t.
The algorithm generates all combinations of k distances from ls, filters them based on the number of distances, 
calculates the sum of each combination, filters the sums based on the maximum limit t, 
sorts them in descending order, and returns the largest sum. If no valid sum is found, it returns null.*/
const chooseBestSum = (t, k, ls) =>
  ls
    .reduce(
      (r, e) =>
        r.concat(r.filter((c) => c.length < k).map((c) => c.concat([e]))),
      [[]]
    )
    .filter((c) => c.length === k) // Filter combinations with 'k' distances
    .map((c) => c.reduce((a, b) => a + b)) // Calculate the sum of each combination
    .filter((s) => s <= t) // Filter sums that are less than or equal to the target distance 't'
    .sort((a, b) => b - a)[0] || null; // Sort sums in descending order and return the largest sum, or null if none

/**
 * 04
 * title: get character from ASCII Value
 * link: https://www.codewars.com/kata/55ad04714f0b468e8200001c
 */
// Solution:

function getChar(c) {
  return String.fromCharCode(c);
}

/**
 * 05
 * title: Simple Fun #1: Seats in Theater
 * link: https://www.codewars.com/kata/588417e576933b0ec9000045
 */
// Solution:

/* Calculate the number of people behind and to the left of the given seat 
including the column behind you */

const seatsInTheater = (nCols, nRows, col, row) =>
  (nRows - row) * (nCols - col + 1);

/**
 * 06
 * title: Total amount of points
 * link: https://www.codewars.com/kata/5bb904724c47249b10000131
 */
// Solution:

const points = (games) => {
  // Use the reduce method to iterate over the games array and calculate the total points
  return games.reduce((acc, game) => {
    // Destructure the game string to extract the team score (x) and opponent score (y)
    const [x, y] = game.split(":");

    // Calculate the points based on the team score and opponent score using the ternary operator
    const points = x > y ? 3 : x === y ? 1 : 0;

    // Add the points to the accumulator (acc) and return the updated accumulator for the next iteration
    return (acc += points);
  }, 0); // Initialize the accumulator (acc) with an initial value of 0 to avoid js string concatenation issue
};

/**
 * 07
 * title: Can you get the loop ?
 * link: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript
 */
// Solution:
function loop_size(node) {
  var turtle = node;
  var rabbit = node;

  // Find a point in the loop. Any point will do!
  /* The rabbit moves faster than the turtle, so they will eventually 
  / meet in the loop.*/
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  } while (turtle != rabbit);

  // The turtle and rabbit are now on the same node within the loop.
  /* Keep the turtle stationary and move the rabbit until it reaches 
  the turtle again */
  // counting the number of nodes visited in the meantime.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  } while (turtle != rabbit);

  // Return the count, which represents the size of the loop.
  return count;
}

/**
 * 08
 * title: Common Denominators
 * link: https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript
 */
// Solution:

// Helper function to calculate the greatest common divisor (GCD) of two numbers
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

// Helper function to calculate the least common multiple (LCM) of two numbers
const lcm = (a, b) => (a * b) / gcd(a, b);

function convertFrac(arr) {
  // Calculate the common denominator (CD) by reducing the fractions
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);

  // Convert each fraction to have the common denominator and create a formatted string
  return arr.map(([n, d]) => `(${(n * cd) / d},${cd})`).join("");
}

/**
 * 09
 * title: Directions Reduction
 * link: https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 */
// Solution:
function dirReduc(arr) {
  // Combine the array into a string
  let str = arr.join("");

  // Define the patterns for opposite directions
  let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;

  // Keep reducing the string until no more opposite directions are found
  while (pattern.test(str)) {
    str = str.replace(pattern, "");
  }

  // Extract the remaining valid directions from the reduced string
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

/**
 * 10
 * title : Extract the domain name from a URL
 * link: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 */
// Solution:
function domainName(url) {
  //your code here
  // Remove "https://", "http://", and "www." from the beginning of the URL
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");

  // Split the URL by dot (.) and return the first part
  return url.split(".")[0];
}

/**
 * 11
 * title : Human Readable Time
 * link: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
 */

function humanReadable(seconds) {
  // Convert seconds into hours, minutes, and remaining seconds
  // using division and modulo operations
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function (v) {
      // Round down the time part and convert it to a string
      v = Math.floor(v).toString();

      // Check if the string has a length of 1
      // If true, add a leading zero to make it a two-digit string
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}

/**
 * 12
 * title: Factorial decomposition
 * link: https://www.codewars.com/kata/5a045fee46d843effa000070/train/javascript
 */
// Solution:
function decomp(n) {
  /**
   * Check if a number is prime
    num - The number to check for primality
    returns boolean - True if the number is prime, false otherwise
   */
  function isPrime(num) {
    if (num % 2 == 0 || num % 3 == 0) {
      return false;
    }
    var d = 5;
    while (d <= Math.sqrt(num)) {
      if (num % d == 0 || num % (d + 2) == 0) {
        return false;
      } else {
        d += 6;
      }
    }
    return true;
  }

  // Initialize an array with the prime numbers 2 and 3
  let primes = [2, 3];
  let k = 5;

  // Find all prime numbers up to n
  while (k <= n) {
    if (isPrime(k)) {
      primes.push(k);
    }
    k += 2;
  }

  // Compute the factorial decomposition
  let factor_string = "";
  for (let i = 0; i < primes.length; i++) {
    let N = n;
    let index = n;
    while (N > 0) {
      index -= N % primes[i];
      N = (N - (N % primes[i])) / primes[i];
    }
    index /= primes[i] - 1;
    index > 1
      ? (factor_string += primes[i] + "^" + index + " * ")
      : (factor_string += primes[i] + " * ");
  }

  // Remove trailing whitespace and return the decomposition
  return factor_string.slice(0, factor_string.length - 3);
}

/**
 * 13
 * title: Fun with trees: array to tree
 * link: https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd/train/javascript
 */
// Solution:

// TreeNode constructor function to create tree nodes
var TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

// arrayToTree function to create a binary tree from an array of values
var arrayToTree = function (array) {
  // Create an array of tree nodes by mapping each value in the input array to a new TreeNode object
  var nodes = array.map(function (value) {
    return new TreeNode(value);
  });

  // Construct the binary tree by assigning left and right child nodes to each parent node
  for (var i = 0; i < nodes.length; i++) {
    var leftChildIndex = 2 * i + 1;
    var rightChildIndex = 2 * i + 2;

    // Check if the left child index is within the range of the nodes array
    if (leftChildIndex < nodes.length) {
      nodes[i].left = nodes[leftChildIndex];
    }

    // Check if the right child index is within the range of the nodes array
    if (rightChildIndex < nodes.length) {
      nodes[i].right = nodes[rightChildIndex];
    }
  }

  // Return the root node of the binary tree if there are any nodes, otherwise return undefined
  return nodes.length > 0 ? nodes[0] : undefined;
};

/**
 * 14
 * title: Greed is Good
 * link: https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
 */
// Solution:

function score(dice) {
  let result = 0;
  let arr2 = [];

  // Sort the dice array in ascending order
  const arr1 = dice.sort((a, b) => a - b);

  // Group the sorted dice values into arrays based on their occurrences
  for (let i = 1; i < 7; i++) {
    arr2.push(arr1.slice(arr1.indexOf(i), arr1.lastIndexOf(i) + 1));
  }

  // Count the number of occurrences for each value
  let arr = arr2.map((v) => v.length);

  // Calculate the score based on the occurrences of each value
  for (let j = 0; j < 5; j++) {
    if (arr[0] >= 3) {
      result += 1000; // Add 1000 to the result for three 1s
      arr[0] -= 3; // Subtract 3 from the count of 1s
    }
    if (arr[0] > 0) {
      result += 100; // Add 100 to the result for each additional 1
      arr[0] -= 1; // Subtract 1 from the count of 1s
    }
    if (arr[1] >= 3) {
      result += 200; // Add 200 to the result for three 2s
      arr[1] -= 3; // Subtract 3 from the count of 2s
    }
    // Repeat the above logic for the remaining values
    if (arr[2] >= 3) {
      result += 300;
      arr[2] -= 3;
    }
    if (arr[3] >= 3) {
      result += 400;
      arr[3] -= 3;
    }
    if (arr[4] >= 3) {
      result += 500;
      arr[4] -= 3;
    }
    if (arr[4] > 0) {
      result += 50;
      arr[4] -= 1;
    }
    if (arr[5] >= 3) {
      result += 600;
      arr[5] -= 3;
    }
  }

  return result; // Return the final score
}

/**
 * 15
 * title: Human readable duration format
 * link: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
 *
 */
// Solution:

function formatDuration(seconds) {
  // Complete this function
  // Check if the duration is zero, return "now" in that case
  if (seconds === 0) {
    return "now";
  }

  // Define an array of durations in descending order, from years to seconds
  const durations = [
    { unit: "year", duration: 365 * 24 * 60 * 60 },
    { unit: "day", duration: 24 * 60 * 60 },
    { unit: "hour", duration: 60 * 60 },
    { unit: "minute", duration: 60 },
    { unit: "second", duration: 1 },
  ];

  // Create an empty array to store the formatted durations
  const result = [];

  // Iterate through the durations
  for (const duration of durations) {
    // Check if the remaining seconds are greater than or equal to the current duration
    if (seconds >= duration.duration) {
      // Calculate the count of the current duration
      const count = Math.floor(seconds / duration.duration);
      // Update the remaining seconds
      seconds %= duration.duration;
      // Construct the formatted duration and add it to the result array
      result.push(`${count} ${duration.unit}${count > 1 ? "s" : ""}`);
    }
  }

  // Check the length of the result array
  // If there are multiple durations, join all but the last with commas and add "and" before the last duration
  // If there is only one duration, return it as the result
  return result.length > 1
    ? result.slice(0, -1).join(", ") + " and " + result.slice(-1)
    : result[0];
}
