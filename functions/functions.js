// 1. Create a function named `greeting` that prints the "Hello World" to the console.

function myMessage() {
    return ('Hello World');
}
console.log(myMessage());

// 2. Create a function named `countingCharacters` that takes a `string` as a parameter.
//     - If the length of the string is less than 10, print the strings length to the console 
//     - If the string length is more than 10, print a message that the string is too long and include the string in the message.

function countingCharacters() {
    let chars = "I am not 10 string";
    if (chars.length < 10) {
        return(chars.length);
    } else {
        return("The string is greater than 10, it is "+chars.length);
    }
}
console.log(countingCharacters());

// 3. Create a function named `difference` that accepts two numbers as parameters. 
//     - If either of the parameters provided is not a number, the function should 
//      `return` the following error: "Input(s) must be a number!". 
//     - It should `return` the difference if both parameters are numbers. 
//     - Call the function within a `console.log()` statement to print the information 
//      returned from the function. This is different than having the function print to the console directly.


function difference(number1, number2) {

    if (typeof(number1) === 'number' && typeof(number2) === 'number') {
        return Math.abs(number1-number2);
    } else 
    if (typeof(number1) === 'string' || typeof(number2) === 'string') { 
        return "Inputs must be a number!";
    } 
}
console.log(difference(9,19));

// ```js
/*
    Examples: 
    difference("hello", 3) // "Input(s) must be a number!"
    difference(3, 5) // 2
    difference(5, 1) // 4
*/
//  ```

// 4. Using the function expression syntax, create a new function named `advancedGreeting`.
//     - It should accept `hour` as a parameter
//     - If the hour is less than 12, return a "Good morning" greeting
//     - If the hour is between 12 and 18, return a "Good afternoon" greeting
//     - If the hour is between 18 and 24, return a "Good night" greeting
//     - All other values should return "Invalid hour input".


let advancedGreeting = function(hour) {
    if (hour < 12) {
        return "Good Morning";
    } else {
        if (hour >=12 && hour < 19) {
            return "Good afternoon";
        } else if (hour > 18 && hour < 25) {
            return "Good night";
        } else {
            return "Invalid hour input";
        }
    }
}
console.log(advancedGreeting(20))

// 5. Can we access variables created inside the scope of a function outside of that function? No
//  Can a function access variables created in a parent scope? Yes



