/* 1. Difference Between Primitive Types and Reference Types in JavaScript
Primitive Types: These are the basic data types provided by JavaScript.
Immutable: You cannot change the actual value operations return new values.

Stored by value: When assigned to a variable the actual value is stored.
Examples: String,Number,Boolean,undefined,null
*/
let a = 10;
let b = a;
b = 20;
console.log(a);

/* Reference Types: These include objects and other complex data types.
Mutable: The content can be changed.
Stored by reference: Variables store a reference (pointer) to the data.

Examples:Object,Array,Function */
let obj1 = {name: 'John'};
let obj2 = obj1;
obj2.name = 'Jane';
console.log(obj1.name);



/*2. Function Declaration vs Function Expression
Function Declaration
Syntax: */
function greet() {
  console.log("Hello");
}
/*Hoisted: Yes — can be called before the declaration.
Best used when You want the function to be available anywhere in the scope. */
sayHi(); 
function sayHi() {
  console.log("Hi!");
}

const greet = function() {
  console.log("Hello");
};
/*Hoisted: No — the variable is hoisted, but the function is not assigned yet.
Best used when: You want to define functions conditionally or assign them to variables.*/

sayHi(); // Error: sayHi is not a function

const sayHi = function() {
  console.log("Hi!");
};




/*3. What Makes a Function a Pure Function?
Definition:
A pure function is a function that Given the same inputs, always returns the same output.
Conditions for Purity No modification of input values and No reliance on external variables that can change.*/

function add(a, b) {
  return a + b; // Pure
}

let counter = 0;
function increment() {
  return ++counter; // Impure
}




/*4. Array Methods: Destructive vs Non-Destructive
Destructive Methods (modify the original array):
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()

Non-Destructive Methods (return new array or value):
map()
filter()
reduce()
concat()
slice()
join()
find()
includes()
indexOf()*/