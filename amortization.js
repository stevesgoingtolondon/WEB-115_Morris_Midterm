const loanAmount = (document.getElementById("loanAmount"));
const downPayment = (document.getElementById("downPayment"));
const loanLength = (document.getElementById("loanLength"));
const Button1 = (document.getElementById("Button1"));
const Results = (document.getElementById("Results"))

let months = years*12;
let principle = loanAmount - downPayment;
let intrestRate = 0.575;
let monthlyIntrestRate = intrestRate/12;
let monthlyPayment = ((monthlyIntrestRate * principle) / (1 - Math.pow(1 + monthlyIntrestRate, -totalMonths))).toFixed(2);
let totalIntrestPaid = (monthlyPayment * months) - principle;
let totalLoanCost = principle + totalIntrestPaid;

// I have no idea what I'm doing bro- I reckon i should add an event listener for my button, but i'm just sitting here slowly accepting my inevitable 30 :warmsmile:
//Loop through calculations for each month