function solve([arg1]) {
    let num = Number(arg1);
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(Math.pow(2, i));
        }
    }
}