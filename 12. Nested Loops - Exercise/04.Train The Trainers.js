function solve(input) {
    let juryCount = Number(input.shift());
    let index = 0;
    let presentationName = input.shift(index);
    index++;
    let presentationGrade = Number(input.shift(index));
    let sumGrades = 0;
    let counter = 0;
    let totalScore = 0;
    
    while (presentationName !== "Finish") {
        while (input[index] !== String) {
            sumGrades+=presentationGrade;
            index++;
            if (index > juryCount) {
                break;
            }
            presentationGrade=Number(input.shift(index));
        }
        console.log(`${presentationName} - ${(sumGrades/juryCount).toFixed(2)}.`);
        totalScore+=Number(sumGrades/juryCount);
        counter++;
        index = 0;
        presentationName = input.shift(index);
        index++;
        presentationGrade = Number(input.shift(index));
        sumGrades = 0;
    }
    console.log(`Student's final assessment is ${(totalScore/counter).toFixed(2)}.`);
}