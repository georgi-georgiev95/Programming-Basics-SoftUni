function solve(input) {
    let index = 0;
    let currentNum = Number(input[index]);
    let biggestNum = Number.NEGATIVE_INFINITY;
    while (input[index] !== "Stop") {
        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
        index++;
        currentNum = Number(input[index]);
    }
    console.log(biggestNum);
}