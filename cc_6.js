//Task 1: Function Declaration

//Write a function that calculates total profit.
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return (`Total Profit: $${profit}`);
};

//Log function to the console
console.log(calculateProfit(20, 30, 100));
console.log(calculateProfit(50, 70, 200));

