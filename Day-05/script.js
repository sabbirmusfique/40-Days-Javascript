console.log("Day 05 Javascript")

//1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
let n = 5;
for(let i=0; i<n; i++){
  let row = "";
  for(let j=0; j<=i; j++){
    row += "* ";
  }
  console.log(row)
}

//2. Craete Multiplication Table (Using for loop)
let num = 5;
for(let i=1; i<=10; i++){
  console.log(`${num} * ${i} = ${num * i}`)
}

//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let sum = 0;
for(let i=1; i<= 500; i++){
  if(i%2 == 1) sum += i;
}
console.log(`Sum of Odd numbers ${sum}`)

//4. Skipping Multiples of 3
let values = "";
console.log("Skipping Multiples of 3")
for(let i=1; i<=20; i++){
  if(i%3 != 0) values += i.toString() + " ";
}
console.log(values)

//5. Reverse Digits of a Number (Using while loop)
let nums = 6789;
console.log(`Input : ${nums}`)
let ans = 0;
while (nums > 0) {
  ans = ans*10 + (nums%10);
  nums = Math.floor(nums/10);
}
console.log(`Output : ${ans}`)
