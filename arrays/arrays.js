// ## Working with Arrays

// 1. What are two ways you can create an array in JavaScript?
const firstArray = ['a', 'b', 'c', 'd'];
console.log(firstArray);
console.log(typeof(firstArray));

const secondArray = {
    firstName: "Name1",
    lastName: "Name2",
    age: 54
};
console.log(secondArray);
console.log(typeof(secondArray));

// 2. How can we we tell if a variable is holding an array?

    console.log(Array.isArray(firstArray)); // is array true
    console.log(Array.isArray(secondArray)); // is object false

// 3. What data type is returned from an array with the `typeof`? object

// 4. What is an index in the context of an array? index starts with 0 as the first value of an array

// 5. Given the following array, `const carMakes = ["Honda", "Toyota", "Mazda"]`
//     - On a separate line use a built-in array method to add "Mercedes" to the end of the array
//     - On a separate line use a built-in array method to add "BMW" to the beginning of the array
//     - Print "Toyota" to the console accessing it by it's index

const carMakes = ["Honda", "Toyota", "Mazda"];
carMakes.push("Mercedes");
console.log(carMakes);
carMakes.unshift("BMW");
console.log(carMakes);
console.log(carMakes[2]);

// 6. Using a built-in array method, create a new array from the first 3 values 
//  in the carMakes array and store it in a new variable. Your new array should 
//  contain the values `["BMW", "Honda", "Toyota"]`

let carTypes = carMakes.slice(0,3);
console.log(carTypes);

// 7. Using built-in Array Methods and working with this array: 
//  `const ericInfo = ["Eric", "Senior Instructor", "Florida"];`

const ericInfo = ["Eric", "Senior Instructor", "Florida"];

//     - Remove "Eric" from the `ericInfo` array

    ericInfo.shift();
    console.log(ericInfo);

//     - Update "Florida" to "South Carolina"

    ericInfo[1] = 'South Carolina';
    console.log(ericInfo);

//     - Add "Schwartz" to the end of the array

    ericInfo.push("Schwartz");
    console.log(ericInfo);

//     - The final array should look like this: 
//  ["Senior Instructor", "South Carolina", "Schwartz"]
//     - Please feel free to look up array methods that you can use 
//  to accomplish the transformation above.

// 8. Print "apple" from each of the arrays below to the console

const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];

let flatFruits3 = fruits3.flat();

console.log(fruits1[0]);
console.log(fruits2[2][1]);
console.log(flatFruits3[3][1]);

// 9. Loop through the following array with a `for()` or `while()` loop printing 
//  each name to the console.
// ```js
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"];
for (let i = 0; i < studentsArray.length; i++) {
    
    console.log(studentsArray[i]);
}
// ```

// 10. Loop through the following array with the `forEach()` Array method 
//  printing each name and the names index to the console.
// ```js

studentsArray.forEach((value, index) => {
    console.log(index+": "+value);
});

// /*
// Example Output:

// 0: Ashley
// 1: Craig
// ...

// 11. Using the  the `map` Array method square every number in the following 
//  array and save the results to a new array called `numbersSquaredArray`.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersSquaredArray = numbersArray.map(Math.sqrt);

console.log(numbersSquaredArray);

// 12. Using a looping method of your choice, loop over and sum all the values 
//  the new `numbersSqauredArray` storing the sum in a variable named `arraySum`. 
//  Print `arraySum` to the console.

for (let i = 0; i < numbersSquaredArray.length; i++) {
    console.log(numbersSquaredArray[i]);
}

// 13. Given the following array, use a built-in array method to check if the 
//  array contains "Luke Skywalker" and if it does, print its index to the console.

const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];

let key = starWarsCharactersArray.indexOf("Luke Skywalker");

console.log(key,starWarsCharactersArray[key]);
