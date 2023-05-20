// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
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
