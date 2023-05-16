function solve(input) {
    let allowedFails = Number(input.shift());
    let fails = 0;
    let index = 0;
    let problem = input[index];
    index++;
    let grade = Number(input[index]);
    let counterProblems = 0;
    let sum = 0;
    let lastProblem;
    while (problem !== "Enough") {
        if (grade >= 4) {
            counterProblems++;
            sum+=grade;
            lastProblem = problem;
        } else {
            fails++;
        }
        if (allowedFails == fails) {
            console.log(`You need a break, ${fails} poor grades.`);
            return;
        }
        index++;
        problem = input[index];
        index++;
        grade = Number(input[index]);
    }
    console.log(`Average score: ${(sum/counterProblems).toFixed(2)}`);
    console.log(`Number of problems: ${counterProblems}`);
    console.log(`Last problem: ${lastProblem}`);
}