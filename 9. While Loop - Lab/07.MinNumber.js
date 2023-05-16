function solve(input) {
    let index = 0;
    let currentNum = Number(input[index]);
    let smallestNum = Number.POSITIVE_INFINITY;
    while (input[index] !== "Stop") {
        if (currentNum < smallestNum) {
            smallestNum = currentNum;
        }
        index++;
        currentNum = Number(input[index]);
    }
    console.log(smallestNum);
}