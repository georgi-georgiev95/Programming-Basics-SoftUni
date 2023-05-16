function solve([arg1, arg2, arg3]) {
    let deposit = Number(arg1);
    let duration = Number(arg2);
    let interest = Number(arg3);
    let totalInterest = deposit*(interest/100);
    let interestPerMonth = totalInterest/12;
    let totalMoney = deposit + interestPerMonth*duration;
    console.log(`${totalMoney}`);
}