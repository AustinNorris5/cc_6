//Task 1: Function Declaration

//Write a function that calculates total profit.
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return (`Total Profit: $${profit}`);
};

//Log function to the console
console.log(calculateProfit(20, 30, 100));
console.log(calculateProfit(50, 70, 200));

//Task 2: Function Expression

//Declare a function expression that calculates sales tax
let calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    return (`Sales Tax: $${salesTax}`);
};

//Log function to the console
console.log(calculateSalesTax(100, 0.07));
console.log(calculateSalesTax(500, 0.1));

