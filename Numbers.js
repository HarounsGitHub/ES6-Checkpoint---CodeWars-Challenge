// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
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
