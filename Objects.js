// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
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
