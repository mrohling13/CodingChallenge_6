// Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold) { // Function used to calculate profit
    const profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}

// Test Data for Task 1 
console.log(calculateProfit(20, 30, 100)); // Total profit: $1000
console.log(calculateProfit(50, 70, 200)); // Total Profit: $4000

