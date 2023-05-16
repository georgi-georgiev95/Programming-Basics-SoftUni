function solve([arg1, arg2, arg3]) {
    let age = Number(arg1);
    let washerPrice = Number(arg2);
    let toyPrice = Number(arg3);
    let toyCounter = 0;
    let totalMoney = 0;
    let moneyForBrother = 0;
    let moneyForBirthday = 10
    for (let i = 1; i <= age; i++) {
        let currentAge = i;
        if (i % 2 !== 0) {
            toyCounter++;
        } else if (i % 2 == 0) {
            totalMoney+=moneyForBirthday;
            moneyForBirthday+=10;
            moneyForBrother++;
        }
    }
    let moneyFromToys = toyCounter*toyPrice;
    let moneyFromBirthdays = totalMoney - moneyForBrother;
    let grandTotal = moneyFromBirthdays+moneyFromToys;
    if (grandTotal >= washerPrice) {
        console.log(`Yes! ${(grandTotal-washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice-grandTotal).toFixed(2)}`);
    }
}
solve(["10", "170","6"])