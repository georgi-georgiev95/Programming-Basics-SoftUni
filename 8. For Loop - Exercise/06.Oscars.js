function solve(input) {
    let actorName = input.shift();
    let academyScore = Number(input.shift());
    let juryCount = Number(input.shift());
    let index = 0;
    let currentJuryName = input[index];
    index++;
    let currentJuryPoints = input[index];
    index++;
    let result = 0;
    for (let i = 0; i < juryCount; i++) {
        let pointsFromName = Number(currentJuryName.length);
        result += pointsFromName*currentJuryPoints/2;
        academyScore += result;
        if (academyScore > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(academyScore).toFixed(1)}!`);
            return;
        }
        result = 0;
        currentJuryName = input[index];
        index++;
        currentJuryPoints = input[index];
        index++;
    }
    if (academyScore <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5-academyScore).toFixed(1)} more!`)
    }
}