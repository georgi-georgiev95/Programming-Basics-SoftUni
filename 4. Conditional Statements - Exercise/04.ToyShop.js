function solve([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let tripPrice = Number(arg1);
    let puzzleCount = Number(arg2);
    let dollsCount = Number(arg3);
    let bearsCount = Number(arg4);
    let minionsCount = Number(arg5);
    let trucksCount = Number(arg6);
    let puzzleMoney = puzzleCount*2.6;
    let dollsMoney = dollsCount*3;
    let bearsMoney = bearsCount*4.1;
    let minionsMoney = minionsCount*8.2;
    let trucksMoney = trucksCount*2;
    let discount = 0;
    if ((puzzleCount+dollsCount+bearsCount+minionsCount+trucksCount) >= 50) {
        discount = 0.25;
    }
    let totalMoney = puzzleMoney+dollsMoney+bearsMoney+minionsMoney+trucksMoney;
    let grandTotal = totalMoney - totalMoney*discount;
    let rent = grandTotal*0.1;
    let moneyLeft = grandTotal-rent;
    if (moneyLeft >= tripPrice) {
        console.log(`Yes! ${(moneyLeft-tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice-moneyLeft).toFixed(2)} lv needed.`);
    }
}