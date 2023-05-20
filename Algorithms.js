// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
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
