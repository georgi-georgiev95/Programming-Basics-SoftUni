function solve([arg1, arg2, arg3, arg4]) {
    let length = Number(arg1);
    let width = Number(arg2);
    let height = Number(arg3);
    let percent = Number(arg4)/100;
    let volume = length*width*height;
    let volumeLiters = volume/1000;
    let requiredLiters = volumeLiters - volumeLiters*percent;
    console.log(requiredLiters);
}