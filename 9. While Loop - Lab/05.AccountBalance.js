function solve(input) {
    let index = 0;
    let num = Number(input[index]);
    let total = 0;
    while (input[index] !== "NoMoreMoney") {
        if (num < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${(num).toFixed(2)}`);
        total+=num;
        index++;
        num = Number(input[index]);
    }
    console.log(`Total: ${(total).toFixed(2)}`);
}