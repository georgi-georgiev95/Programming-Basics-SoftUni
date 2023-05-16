function solve(input) {
    let examTimeHr = Number(input[0]);
    let examTimeMin = Number(input[1]);
    let arrivalTimeHr = Number(input[2]);
    let arrivalTimeMin = Number(input[3]);
    let examTime = examTimeHr*60+examTimeMin;
    let arrivalTime = arrivalTimeHr*60+arrivalTimeMin;
    let earlyDifference = examTime - arrivalTime; 
    let lateDifference = arrivalTime - examTime;
    
    if (examTime == arrivalTime) {
        console.log(`On time`);
    } else if ((examTime > arrivalTime) && earlyDifference <= 30) {
        console.log(`On time`); 
        console.log(`${earlyDifference} minutes before the start`);
    } else if ((examTime > arrivalTime) && earlyDifference > 30) {
        console.log(`Early`);
        if (earlyDifference < 60) {
            console.log(`${earlyDifference} minutes before the start`);
        } else if (earlyDifference >= 60) {
            if ((earlyDifference % 60) < 10) {
                console.log(`${Math.trunc(earlyDifference/60)}:0${earlyDifference % 60} hours before the start`);
            } else {
                console.log(`${Math.trunc(earlyDifference/60)}:${earlyDifference % 60} hours before the start`);
            }
        }
    } else if ((examTime < arrivalTime) && lateDifference < 60) {
        console.log(`Late`);
        console.log(`${lateDifference} minutes after the start`);
    } else if ((examTime < arrivalTime) && lateDifference >= 60) {
        console.log(`Late`);
        if ((lateDifference % 60) < 10) {
            console.log(`${Math.trunc(lateDifference/60)}:0${lateDifference % 60} hours after the start`);
        } else {
            console.log(`${Math.trunc(lateDifference/60)}:${lateDifference % 60} hours after the start`);
        }
    }
}