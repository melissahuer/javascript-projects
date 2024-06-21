const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(0,3);
console.log(newString);

let theRestLetters = str.slice(3);
console.log(theRestLetters);

let newAnswer = (theRestLetters + newString);
console.log(theRestLetters + newString);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string is: "${str}"`);
console.log(`The modified string is: "${newAnswer}"`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let question = "Enter number of letters that will be relocated: "
let userAnswer = "";

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
function askForLetters(){
    userAnswer = input.question(question);
}

askForLetters()

if (userAnswer <= 0 || userAnswer > str.length){
    console.log("Invalid input for number. Defaulting to 3 relocating characters");
    userAnswer=3;
}//else {
   // console.log();
//}