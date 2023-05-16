function solve([arg1]) {
    let tax = Number(arg1);
    let sneakers = tax*0.6;
    let suit = sneakers*0.8;
    let ball = suit*0.25;
    let accessories = ball*0.2;
    let costs = tax+sneakers+suit+ball+accessories;
    console.log(costs);
}