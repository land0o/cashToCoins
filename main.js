// Define an object and store it in a variable named piggyBank. The object should have the following keys defined.
// let quarters = 0;
// let nickels = 0;
// let dimes = 0;
// let pennies = 0;

// For each coin type, give yourself as many as you like.
const piggyBank = {
    pennies: 55, //.55
    nickels: 25, // 1.25
    dimes: 17, // 1.70
    quarters: 25 // 6.25 total = 9.75
}
const curtisBank = {
    pennies: 125, //1.25
    nickels: 51, // 2.55
    dimes: 170, // 17
    quarters: 125 // 31.25 total = 52.05
}
let dollarAmount = 0

// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.
const coinValue = (bankObject) => {
    let quarterTotal = bankObject.quarters * .25;
    dollarAmount += quarterTotal
    let penniesTotal = bankObject.pennies * .01;
    dollarAmount += penniesTotal
    let dimesTotal = bankObject.dimes * .10;
    dollarAmount += dimesTotal
    let nickelsTotal = bankObject.nickels * .05;
    dollarAmount += nickelsTotal

    console.log('Running total:', dollarAmount);
};

// When done, output the value to the browser console.
coinValue(curtisBank)




