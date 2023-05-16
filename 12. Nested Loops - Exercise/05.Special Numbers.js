function solve(input) {
    let num = Number(input[0]);
    let counter = 0;
    let result = "";
    for (let i = 1111; i <= 9999; i++) {
        let currentNum = i.toString();
        for (let j = 0; j < 4; j++) {
            let currentDigit = Number(currentNum[j]);
            if (num % currentDigit == 0) {
                counter++
            }
            if (counter == 4) {
                result+= i + " ";
                counter = 0;
            }
        }
        counter = 0;
    }
    console.log(result);
}