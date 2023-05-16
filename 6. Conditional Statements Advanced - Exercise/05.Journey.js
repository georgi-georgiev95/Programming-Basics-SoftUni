function solve([arg1, arg2]) {
    let budget = Number(arg1);
    let season = arg2;
    let costs = 0;
    let destination;
    let type;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            type = "Camp";
            costs = budget*0.3;
        } else if (season === "winter") {
            type = "Hotel";
            costs = budget*0.7;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            type = "Camp";
            costs = budget*0.4;
        } else if (season === "winter") {
            type = "Hotel";
            costs = budget*0.8;
        }
    } else if (budget > 1000) {
        type = "Hotel";
        destination = "Europe";
        costs = budget*0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${costs.toFixed(2)}`);
}