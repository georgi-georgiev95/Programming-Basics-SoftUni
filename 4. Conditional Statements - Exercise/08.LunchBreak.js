function solve(input) {
    let name = input[0];
    let duration = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = breakTime/8;
    let relaxTime = breakTime/4;
    let timeLeft = breakTime - lunchTime - relaxTime;
    if (timeLeft >= duration) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft-duration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(duration-timeLeft)} more minutes.`);
    }

}