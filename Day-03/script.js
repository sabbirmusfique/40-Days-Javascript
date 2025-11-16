console.log("Day 03 ")


//Odd or Even?
let num1 = 10;
console.log("Number 1 : ", num1)
let res = num1%2==0 ? "Even" : "Odd";
console.log("This number ", num1, " is", res)

//Do you have a Driving License?
let age = 25;
if(age >= 18) console.log("You are Eligible")
else console.log("You are Not Eligible")

// Calculate CTC with a Bonus
let monthSalary = 12300;
let totalSalary = monthSalary * 12;
let CTC = totalSalary + 0.2*totalSalary;
console.log("CTC ", CTC, " rupees")

// Write a program for the Traffic Light Simulation.
let color = "red";
if(color === "green") console.log("GO")
else if(color === "red") console.log("STOP")
else console.log("Wrong color code")

// Create an Electricity Bill Calculator
let units = 25;
let monthlyCost = units * 150 * 30;
let yearlyCost = monthlyCost * 12;
let discountedCost = 0.8 * yearlyCost;

console.log("Monthly Cost ", monthlyCost)
console.log("Yearly Cost without discount ", yearlyCost)
console.log("Yearly Cost with 20% discount ", discountedCost)

// Leap Year Checker
let year = 2002;
let result = year%400 == 0 || (year%4 == 0 && year%100 != 0);
console.log(year, result ? "Leap Year" : "Not a Leap Year")

// Max of Three Numbers
let p=244, q=134, r=54;
let max_num = (p >= q && p >= r) ? p : (q >= p && q >= r) ? q : r;
console.log("Max Number : ", max_num)

// Bitwise Doubling
let count = 5;
let count2 = count << 1;
console.log("Double of ", count, " is ", count2)