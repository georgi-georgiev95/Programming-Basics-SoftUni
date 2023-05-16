function solve([arg1, arg2, arg3, arg4]) {
    let requiredNylon = Number(arg1) + 2;
    let requiredPaint = Number(arg2);
    let fluid = Number(arg3);
    let workTime = Number(arg4);
    let nylonPrice = requiredNylon*1.5;
    let paintPrice = requiredPaint*14.5;
    let fluidPrice = fluid*5;
    let extraPaint = requiredPaint*0.1;
    let extraPaintPrice = extraPaint*14.5;
    let bags = 0.4;
    let materialCosts = nylonPrice+paintPrice+fluidPrice+extraPaintPrice+0.4;
    let workCosts = materialCosts*0.3*workTime;
    let grandTotal = materialCosts+workCosts;
    console.log(grandTotal);
}