function solve([arg1]) {
    let day = arg1;
    let type;
    switch (day) {
        case "Monday":
            type = "Working day"
            break;
        case "Tuesday":
            type = "Working day"
            break;
        case "Wednesday":
            type = "Working day"
            break;
        case "Thursday":
            type = "Working day"
            break;
        case "Friday":
            type = "Working day"
            break;
        case "Saturday":
            type = "Weekend"
            break;
        case "Sunday":
            type = "Weekend"
            break;
        default:
            type = "Error"
            break;
    }
    console.log(type);
}