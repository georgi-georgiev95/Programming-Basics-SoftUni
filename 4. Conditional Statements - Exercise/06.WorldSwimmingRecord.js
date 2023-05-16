function solve([arg1, arg2, arg3]) {
    let recordSec = Number(arg1);
    let distanceM = Number(arg2);
    let timeFor1MinSec = Number(arg3);
    let penalty = (Math.trunc(distanceM/15))*12.5;
    let timeToSwim = distanceM*timeFor1MinSec + penalty;
    if (timeToSwim < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${timeToSwim.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(timeToSwim-recordSec).toFixed(2)} seconds slower.`);
    }
    }