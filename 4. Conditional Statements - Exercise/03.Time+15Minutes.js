function solve(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let newTime = hours*60 + minutes + 15;
    let newHours = Math.trunc(newTime/60);
    let newMinutes = newTime % 60;
    if (newHours > 23 && newHours !== 24) {
        newHours = Math.abs(23 - newHours);
    } else if (newHours == 24) {
        newHours = 0;
    }
    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`);
    }
}