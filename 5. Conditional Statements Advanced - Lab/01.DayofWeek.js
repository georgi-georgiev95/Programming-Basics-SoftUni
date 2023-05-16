function solve(input) {
    let num = Number(input[0]);
    let day;
    switch (num) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday"
            break;
    }
    if (num < 1 || num > 7 ) {
        console.log(`Error`)
    } else {
        console.log(day);
    }
}