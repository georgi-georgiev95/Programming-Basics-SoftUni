function solve(input) {
    let num = Number(input.shift());
    let sum = 0;
    let index = 0;
    let nextNum = Number(input[index]);
    while (sum < num) {
        sum+=nextNum;
        index++;
        nextNum = Number(input[index]);
    }
    console.log(sum);
}