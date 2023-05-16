function solve([arg1, arg2, arg3]) {
    let budget = Number(arg1);
    let season = arg2;
    let fisherManCount = Number(arg3);
    let rent = 0;
    let discount = 0;
    if (season === "Spring") {
        rent = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        rent = 4200;
    } else if (season === "Winter") {
        rent = 2600;
    }
    if (fisherManCount <= 6) {
        discount = 0.1;
    } else if (fisherManCount >= 7 && fisherManCount <= 11) {
        discount = 0.15;
    } else if (fisherManCount >= 12) {
        discount = 0.25;
    }
    let costs = rent - rent*discount;
    if (fisherManCount % 2 == 0 && season !== "Autumn") {
        costs-=costs*0.05;
    }
    if (costs <= budget) {
        console.log(`Yes! You have ${(budget-costs).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(costs-budget).toFixed(2)} leva.`);
    }
}