function solve([arg1]) {
    let num = Number(arg1);
    let currentNum = 0;
    while (currentNum <= num) {
        let nextNum = currentNum*2 + 1;
        if (nextNum > num) {
            return;
        }
        currentNum = nextNum;
        console.log(currentNum);
    }
}