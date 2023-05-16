function solve(input) {
    let moneyNeeded = Number(input.shift());
    let currentMoney = Number(input.shift());
    let index = 0;
    let action = input[index];
    index++;
    let ammount = Number(input[index]);
    let spendCounter = 0;
    let saveCounter = 0;
    let spendStreak = 0;
    while (currentMoney < moneyNeeded) {
        if (action === "spend") {
            spendCounter++;
            spendStreak++;
            currentMoney-=ammount;
            if (currentMoney < 0) {
                currentMoney =0
            }
            if (spendStreak == 5) {
                console.log(`You can't save the money.`);
                console.log(`${saveCounter+spendCounter}`);
                return;
            }
        } else if (action === "save") {
            saveCounter++
            spendStreak = 0;
            currentMoney+=ammount;
        }
        index++;
        action = input[index];
        index++;
        ammount = Number(input[index]);
    }
    console.log(`You saved the money for ${saveCounter+spendCounter} days.`);
}