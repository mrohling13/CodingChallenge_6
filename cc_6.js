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

