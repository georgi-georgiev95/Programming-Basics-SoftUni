function solve(input) {
    let username = input.shift();
    let password = input.shift();
    let index = 0;
    let guess = input[index];
    while (guess !== password) {
        index++;
        guess = input[index];
    }
    console.log(`Welcome ${username}!`)
}