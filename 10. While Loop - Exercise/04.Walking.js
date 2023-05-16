function solve(input) {
    let dailyGoal = 10000;
    let index = 0;
    let currentWalk = Number(input[index]);
    let nextWalk = input[index];
    let total = 0;
    let counter = 0;
    while (counter < input.length) {
        if (nextWalk === "Going home") {
            index++;
            counter++;
            currentWalk = Number(input[index]);
        } else {
            currentWalk = Number(input[index]);
        }
        counter++;
        total+=currentWalk;
        index++;
        nextWalk = input[index];
    }
    if (total >= dailyGoal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${total-dailyGoal} steps over the goal!`);
    } else {
        console.log(`${dailyGoal - total} more steps to reach goal.`);
    }
}