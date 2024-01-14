/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Do NOT change the name of any of the
functions in this assignment, it will disable the automated unit testing.

1.

Complete the function below:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

HINT: Use the modulo operator (%) Google it! 😊
******************************************************************************/
//your code here
const oddOrEven = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(oddOrEven(3));

/******************************************************************************
2.

Complete the function below:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

function makeMeLoud(myString) {
  //your code here
  let upperCasetxt = myString.toUpperCase() + "!";
  return upperCasetxt;
}
console.log(makeMeLoud("This is cool"));

/******************************************************************************
3.

Complete the function below:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23


******************************************************************************/

const greeter = (userName, dayTime) => {
  //your code here
  if (dayTime < 0 || dayTime > 23) {
    return "Invalid time";
  } else if (dayTime >= 0 && dayTime <= 5) {
    return "Good night " + userName;
  } else if (dayTime >= 6 && dayTime <= 11) {
    return "Good morning " + userName;
  } else if (dayTime >= 12 && dayTime <= 17) {
    return "Good day " + userName;
  } else if (dayTime >= 18 && dayTime <= 23) {
    return "Good evening " + userName;
  }
};
console.log(greeter("Sarah", 23));

/******************************************************************************
4.

Complete the function below:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/

function arrayTrimmer(myArray) {
  //your code here
  myArray.shift();
  myArray.pop();
  return myArray;
}
console.log(arrayTrimmer(["One", "Two", "Three", "Four", "Five", "Six"]));

/******************************************************************************
5.

Complete the function below:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

const cleanAndFun = (inputText) => {
  //your code here
  let editedText = inputText.replace("hard", "fun");
  editedText = editedText.trim();
  return editedText;
};
console.log(cleanAndFun("   hard        "));

/******************************************************************************
6.

Complete the function below:

The function should take in an array as a parameter.

The automatic testing will test your function with the following array:
["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron Man", "Black Widow"]

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

 Return the resulting array.
******************************************************************************/

function marvelEditor(inputArray) {
  //your code here
  inputArray.shift();
  inputArray[2] = "Skrull";
  inputArray.splice(0, 2, "Captain America");
  let editedArray = inputArray.join("💪");
  return editedArray;
}
console.log(
  marvelEditor([
    "Spider-Man",
    "Thor",
    "Hulk",
    "Doctor Strange",
    "Iron Man",
    "Black Widow",
  ])
);

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

function coolMaker(inputParam) {
  if (typeof inputParam === "string") {
    //let newString = "😎" + inputParam + "😎";
    return "😎" + inputParam + "😎";
  } else if (typeof inputParam === "number") {
    inputParam *= 2;
    inputParam.toString();
    return "😎" + inputParam + "😎";
  } else if (typeof inputParam === "boolean") {
    if (inputParam === true) {
      return "😎Yeah😎";
    } else {
      return "😎Chill😎";
    }
  } else return "😎Primitive values only😎";
}
console.log(coolMaker("Cool"));
//your code here

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

const addOrRemove = (inputArray, inputString) => {
  //your code here
  let stringIndex = inputArray.indexOf(inputString);
  if (stringIndex !== -1) {
    inputArray.splice(stringIndex, 1);
  } else inputArray.push(inputString);
  return inputArray;
};

console.log(addOrRemove(["Red", "Green", "Blue"], "Green"));

/******************************************************************************
⬇️ FOR TESTING - DON'T TOUCH ⬇️
******************************************************************************/

module.exports = {
  oddOrEven,
  makeMeLoud,
  greeter,
  arrayTrimmer,
  cleanAndFun,
  marvelEditor,
  coolMaker,
  addOrRemove,
};
