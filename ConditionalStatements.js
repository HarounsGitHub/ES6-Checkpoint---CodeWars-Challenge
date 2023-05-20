// CodeWars challenges:
/**
 * Amongst the Pre-Selected problems for 150 points
 The Guideline : https://docs.google.com/spreadsheets/d/1DKg3l8_SivoJ-G4iGLOPXa5jtdcgdLZRFj6PDN2AVHQ/edit#gid=0
 */
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
