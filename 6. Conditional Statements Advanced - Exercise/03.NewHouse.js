function solve([arg1, arg2, arg3]) {
    let type = arg1;
    let flowersCount = Number(arg2);
    let budget = Number(arg3);
    let price;
    if (type === "Roses") {
       price = 5;
       if (flowersCount > 80) {
            price-=price*0.1;
       } 
    } else if (type === "Dahlias") {
        price = 3.8;
        if (flowersCount > 90) {
            price-=price*0.15;
        }
    } else if (type === "Tulips") {
        price = 2.8;
        if (flowersCount > 80) {
            price-=price*0.15;
        }
    } else if (type === "Narcissus") {
        price = 3;
        if (flowersCount < 120) {
            price+=price*0.15;
        }
    } else if (type === "Gladiolus") {
        price = 2.5;
        if (flowersCount < 80) {
            price+=price*0.2;
        }
    }
    let costs = Number((flowersCount*price).toFixed(2));
    if (costs <= budget) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${type} and ${(budget-costs).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(costs-budget).toFixed(2)} leva more.`)
    }
}