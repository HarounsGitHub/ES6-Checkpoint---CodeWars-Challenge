// CodeWars challenges:
/**
 * Freely Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */

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
