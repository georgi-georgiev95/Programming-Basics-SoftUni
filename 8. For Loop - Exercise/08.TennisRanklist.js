function solve(input) {
    let tournamentsParticipated = Number(input.shift());
    let previousPoints = Number(input.shift());
    let startingPoints = 0
    let counter = 0;
    for (let i = 0; i < tournamentsParticipated; i++) {
        let currentResult = input[i];
        if (currentResult === "W" ) {
            startingPoints+=2000;
            counter++;
        } else if (currentResult === "F") {
            startingPoints+=1200;
        } else if (currentResult === "SF") {
            startingPoints+=720;
        }
    }
    console.log(`Final points: ${startingPoints+previousPoints}`);
    console.log(`Average points: ${Math.trunc((startingPoints)/tournamentsParticipated)}`);
    console.log(`${(counter/tournamentsParticipated*100).toFixed(2)}%`);
}