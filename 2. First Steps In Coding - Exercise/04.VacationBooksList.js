function solve([arg1, arg2, arg3]) {
    let pages = Number(arg1);
    let pagesPerHour = Number(arg2);
    let daysForBook = Number(arg3);
    let totalTime = pages/pagesPerHour;
    let hoursPerDay = totalTime/daysForBook;
    console.log(`${hoursPerDay}`);
}