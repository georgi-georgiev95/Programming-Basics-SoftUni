function solve([arg1, arg2, arg3, arg4]) {
    let budget = Number(arg1);
    let videoCardCount = Number(arg2);
    let processorCount = Number(arg3);
    let ramCount = Number(arg4);
    discount = 0;
    if (videoCardCount > processorCount) {
        discount = 0.15;
    }
    let videoCardValue = videoCardCount*250;
    let processorValue = videoCardValue*0.35*processorCount;
    let ramValue = videoCardValue*0.1*ramCount;
    let totalValue =videoCardValue + processorValue + ramValue;
    let grandTotal = totalValue - totalValue*discount;
    if (grandTotal <= budget) {
        console.log(`You have ${(budget-grandTotal).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(grandTotal-budget).toFixed(2)} leva more!`)
    }
}