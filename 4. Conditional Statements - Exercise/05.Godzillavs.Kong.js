function solve([arg1, arg2, arg3]) {
    let budget = Number(arg1);
    let statists = Number(arg2);
    let moneyForStatist = Number(arg3);
    let decor = budget*0.1;
    let discount = 0;
    if (statists > 150) {
        discount = 0.10;
    }
    let totalForStatists = statists*moneyForStatist - statists*moneyForStatist*discount;
    let totalForMovie = totalForStatists+decor;
    if (totalForMovie <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget-totalForMovie).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalForMovie-budget).toFixed(2)} leva more.`);
    }
}