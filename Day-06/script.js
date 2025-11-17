console.log("Day 06 Javascript")

//1. Write a Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celcius){
  let ans = 32 + (9*celcius)/5;
  return ans;
}

let celcius = 35.5;
console.log(`${celcius} Celcius = ${celsiusToFahrenheit(celcius)} Fareheit`)

//2. Create a Function to Find the Maximum of Two Numbers
function findMax(num1, num2){
  if(num1 >= num2) return num1;
  return num2;
}

let num1=-123, num2=320;
console.log(`Max of ${num1} and ${num2} is : ${findMax(num1, num2)}`)

//3. Function to Check if a String is a Palindrome
function isPalindrome(str) {
  let n = str.length;
  for(let i=0; i<n/2; i++){
    if(str[i] != str[n-i-1]) return false;
  }

  return true;
}

let st = "madam";
if(isPalindrome(st)) console.log(`${st} is a Palindrome`)
else console.log(`${st} is not a Palindrome`)

//4. Write a Function to Find Factorial of a Number
function factorial(n){
  let ans=1;
  for( let i=1; i<=n; i++){
    ans *= i;
  }
  return ans;
}

let fact = 5;
console.log(`Factorial of ${fact} is : ${factorial(fact)}`)

//5. Write a function to Count Vowels in a String
function countVowels(str){
  let count = 0;
  str = str.toLowerCase();
  for(let i=0; i<str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') count++;
  }

  return count;
}

let vow = "Mohammad Sabbir Musfique";
console.log(`Vowel counts in '${vow}' is : ${countVowels(vow)}`)

//6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence){
  let str = sentence.toUpperCase();
  return str;
}

let word = "Hello World Sabbir"
console.log(`Capitalize sentence is '${capitalizeWords(word)}.'`);

//7. Use an IIFE to Print “Hello, JavaScript!”
(function (str){
  console.log("Hello, " + str);
})('JavaScript');

//8. Create a Simple Callback Function
function greet(name, callback){
  console.log("Outer function called")
  callback(name);
}

function callback(name){
  console.log(`Greetings ${name} from callback function`)
}

greet("Sabbir", callback)

//9. Create Call Stack Execution Diagram for this flow
/*

function f1() {}
function f2() {
    f1();
}
f2(); 

--------
Call seq : 
f2 called
f1 called
f1 executed done
f2 executed done

*/



//10. Create Call Stack Execution Diagram for this flow
/*

function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1(); 

--------
Call seq : 
f2 called
f2 execution done

f3 called
f1 called
f1 executed done
f3 executed done

f1 called
f1 executed done
*/