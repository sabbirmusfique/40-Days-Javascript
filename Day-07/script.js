console.log("Day 04 Javascript")


// 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
//output : It's a normal day.
// reason : monday and Monday isn't same, Case sensative


// 2. Build an ATM Cash Withdrawal System
let amount = 1300;

if(amount % 100 == 0){
    console.log('Withdrawal successful')
}
else{
    console.log('Invalid amount')
}

// 3. Build a Calculator with switch-case
let a=6, b=3;
let ch='/';
switch (ch) {
    case '+':
        console.log(`Sum of ${a} and ${b} is :`, a+b)
        break;
    case '-':
        console.log(`Sub of ${a} and ${b} is :`, a-b)
        break;
    case '*':
        console.log(`Multiply of ${a} and ${b} is :`, a*b)
        break;
    case '/':
        if(b == 0){
            console.log("denominator can't be 0"); break;
        }
        console.log(`Div of ${a} and ${b} is :`, a/b)
        break;
    default:
        console.log('Invalid operator')
        break;
}

// 4. Pay for your movie ticket
let age = 25;
if(age < 18){
    console.log("Ticket price : $3")
}
else if(age >= 18 && age <= 60){
    console.log("Ticket price : $10")
}
else{
    console.log("Ticket price : $8")
}

// 5. Horoscope Sign Checker
let birthMonth = "February";
let zodiacSign = "";
switch (birthMonth.toLowerCase()) {
  case "january":
    zodiacSign = "Capricorn";
    break;
  case "february":
    zodiacSign = "Aquarius";
    break;
  case "march":
    zodiacSign = "Pisces";
    break;
  case "april":
    zodiacSign = "Aries";
    break;
  case "may":
    zodiacSign = "Taurus";
    break;
  case "june":
    zodiacSign = "Gemini";
    break;
  case "july":
    zodiacSign = "Cancer";
    break;
  case "august":
    zodiacSign = "Leo";
    break;
  case "september":
    zodiacSign = "Virgo";
    break;
  case "october":
    zodiacSign = "Libra";
    break;
  case "november":
    zodiacSign = "Scorpio";
    break;
  case "december":
    zodiacSign = "Sagittarius";
    break;
  default:
    zodiacSign = "Invalid month";
}

console.log(`Month: ${birthMonth}, Sign: ${zodiacSign}`);

//6. Which Triangle?
let aa=20, bb=20, cc=20;

if(aa === bb && bb === cc){
    console.log("Equilateral Triangle")
}
else if(aa !== bb && bb !== cc && cc !== aa){
    console.log("Scalene Triangle")
}
else{
    console.log("Isosceles Triangle")
}