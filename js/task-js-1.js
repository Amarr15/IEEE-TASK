//Explain the difference between == and === in JavaScript.
// Answer => == ( Equality Type ): This comparison compares values ​​after attempting to convert the types (type coercion). That is, if the values ​​are of different types, JavaScript converts one of them to match the other type.
//           === (Strict Equality):This comparison compares both the value and the type. If the type is different, the result is always false without any conversion.


//Okay, Hamed, isn't it going to work the way you want? Because sort() in JavaScript sorts elements as Strings by default, not as numbers. So what's the solution? Focus with me.
const arr = [10, 5, 11];
arr.sort((a, b) => a - b);
console.log(arr);


//Write a JavaScript program that converts temperature from Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is equal to " + fahrenheit + "°F");


//Write a JavaScript program that takes an array and updates it in place. Each Element in the array is a string or a number. If it's a number, you should multiply it by 3. If it's a string, you should make the first letter uppercase and the rest lowercase.
let arr1 = [19, "dreams", "PlayGround", 2, "xD", "i"];

for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "number") {
        arr1[i] *= 3;
    } else if (typeof arr1[i] === "string") {
        arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1).toLowerCase();
    }
}
console.log(arr1);



//Adel wrote a secret message that he didn't want anyone to read easily. To make it difficult to understand, he reversed it. He then thought that it wasn't enough, so he wanted to perform another minor change that would make it unrecognizable. Write a JavaScript program that takes a string s and prints it again after reversing it and making all vowel letters uppercase.
let s = "Hey There, I'm glad to have you";
let reversed = s.split('').reverse().join('');
let result = reversed.replace(/[aeiouAEIOU]/g, (char) => char.toUpperCase());
console.log(result);


//Write a JavaScript program that takes a string and an array of forbidden letters. Your program should print the string after removing the forbidden letters from it and make all letters separated by hiphens -.
let text = "Please";
let forbiddenLetters = ['r', 'x', 'p', 'a'];
let result2 = '';
for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (!forbiddenLetters.includes(char)) {
        result2 += text[i] + '-';
    }
}
result2 = result2.slice(0, -1);
console.log(result2);




