function solve(input) {
    let name = input.shift();
    let index = 0;
    let currentGrade = Number(input[index]) 
    let grades = 1;
    let excluded = 0;
    let sum = 0;
    while (grades <= 12) {
        if (currentGrade >= 4) {
            sum+=currentGrade;
            grades++;
        } else if (currentGrade < 4) {
            excluded++;
        }
        if (excluded >= 2) {
            console.log(`${name} has been excluded at ${grades} grade`)
            return;
        }
        index++;
        currentGrade = Number(input[index]);
    }
    let average = sum/12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}