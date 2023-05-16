function solve([arg1, arg2, arg3]) {
    let time1 = Number(arg1);
    let time2 = Number(arg2);
    let time3 = Number(arg3);
    let totalTime = time1+time2+time3;
    let totalTimeH = Math.trunc(totalTime/60);
    let totalTimeM = totalTime - totalTimeH*60;
    if (totalTimeM < 10) {
        console.log(`${totalTimeH}:0${totalTimeM}`);
    } else {
        console.log(`${totalTimeH}:${totalTimeM}`);
    }
}