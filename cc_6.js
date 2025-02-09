// Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold) { // Function used to calculate profit
    const profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}

// Test Data for Task 1 
console.log(calculateProfit(20, 30, 100)); // Total profit: $1000
console.log(calculateProfit(50, 70, 200)); // Total Profit: $4000

// Task 2: Function Express
const calculateSalesTax = function (amount, taxRate) {
    const salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;
};

// Test Data for Task 2 
console.log(calculateSalesTax(100, 0.07)); // Sales Tax: $7
console.log(calculateSalesTax(500, 0.1)); // Sales Tax: $50

// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage;
    switch (performanceRating) {
        case "Excellent":
        bonusPercentage = 0.2;
            break;
        case "Good":
            bonusPercentage = 0.1;
            break;
        case "Average":
            bonusPercentage = 0.05;
            break;
        default : 
            bonusPercentage = 0;

    }
    const bonus = salary * bonusPercentage;
    return `Bonus: $${bonus}`;
};

// Test Data for Task 3
console.log(calculateBonus(5000, "Excellent")); // Bonus: $1000
console.log(calculateBonus(7000, "Good")); // Bonus: $700

// Task 4: Parameters and Arguements
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost;
    switch (plan) {
        case "Basic":
            monthlyCost = 10;
            break;
        case "Premium":
            monthlyCost = 20;
            break;
        case "Enterprise":
            monthlyCost = 50;
            break;
        default:
            monthlyCost = 0;
    }
    const totalCost = monthlyCost * months - discount;
    return `Total Cost: $${totalCost}`;
}

// Test Data for Task 4
console.log(calculateSubscriptionCost("Basic", 6, 10)); // Total Cost: $5
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Total Cost: $240

// Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    const convertedAmount = amount * exchangeRate;
    return `Converted Amount: $${convertedAmount.toFixed(2)}`;
}

// Test Data for Task 5
console.log(convertCurrency(100, 1.1)); // Converted Amount: $110.00
console.log(convertCurrency(250, 0.85)); // Converted Amount: $212.50

// Task 6: Higher-Order Functions
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(order => discountFunction(order));
}

// Test Data for Task 6 
let orders = [200, 600, 1200, 450, 800];
const discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log(discountedOrders);

// Task 7: Closures
function createExpenseTracker() { // function  used to track expenses
    let totalExpenses = 0;
    return function (expense) {
        totalExpenses += expense;
        return `Total Expenses: $${totalExpenses}`;
    };
}

// Test Data for Task 7 
let tracker = createExpenseTracker();
console.log(tracker(200)); // Total Expenses: $200
console.log(tracker(150)); // Total Expenses: $350

// Task 8: Recursion in JavaScript
function calculateYearsToPromotion(employeeLevel) {  // Function used to calculate years to promotion
    if (employeeLevel >= 10) {
        return 0;
    }
    return 2 + calculateYearsToPromotion(employeeLevel + 1);
}

// Test Data for Task 8
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`); // Years to Level 10: 6
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`); // Years to Level 10: 10