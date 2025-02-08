//Task 1: Function Declaration

//Write a function that calculates total profit.
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return (`Total Profit: $${profit}`);
};

//Log function to the console and test data
console.log(calculateProfit(20, 30, 100));
console.log(calculateProfit(50, 70, 200));

//Task 2: Function Expression

//Declare a function expression that calculates sales tax
let calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    return (`Sales Tax: $${salesTax}`);
};

//Log function to the console and test data
console.log(calculateSalesTax(100, 0.07));
console.log(calculateSalesTax(500, 0.1));

//Task 3: Arrow Function

//Write an arrow function to detrmine a bonus
let calculateBonus = (salary, performanceRating) => {
    let bonusPercentage =
        performanceRating = "Excellent"
        if (bonusPercentage = 0.2);
        performanceRating = "Good"
        if (bonusPercentage = 0.1);
        performanceRating = "Average"
        if (bonusPercentage = 0.05);
        let bonus = salary * bonusPercentage;
        return (`Bonus: $${bonus}`);
};

//Log function to the console and test data
console.log(calculateBonus(5000, "Excellent"));
console.log(calculateBonus(7000, "Good"))

//Task 4: Parameters and Arguments

//Write a function that calculates cost
function calculateSubscriptionCost(plan, months, discount = 0) {
    let planCost = {
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    };
    let monthlyCost = planCost[plan] || 0;
    let totalCost = (monthlyCost * months) - discount
    return (`Total Cost: $${totalCost}`);
};

//Log fuction to the console and test data
console.log(calculateSubscriptionCost("Basic", 6, 10));
console.log(calculateSubscriptionCost("Premium", 12, 0));

//Task 5: Returning Values

//Write a function that returns the converted amount
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = (amount * exchangeRate).toFixed(2);
    return `Converted Amount: $${convertedAmount}`;
};

//Log function to the console and test data
console.log(convertCurrency(100, 1.1));
console.log(convertCurrency(250, 0.85));

//Task 6: Higher-Order Functions

//Declare an array with at least five order amounts
let orders = [200, 600, 1200, 450, 800];

//Write a higher-order function hat applies a 10% discount on orders above $500
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
};

//Log function to the console and test data
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log("Discounted Orders: ", discountedOrders);

