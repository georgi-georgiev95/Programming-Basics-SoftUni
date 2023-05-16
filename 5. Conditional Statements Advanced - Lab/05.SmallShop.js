function solve([arg1, arg2, arg3]) {
    let product = arg1;
    let city = arg2;
    let quantity = Number(arg3);
    let price = 0;
    if (city === "Sofia") {
        if (product === "coffee") {
            price = 0.5;
        } else if (product === "water") {
            price = 0.8;
        } else if (product === "beer") {
            price = 1.2;
        } else if (product === "sweets") {
            price = 1.45;
        } else if (product === "peanuts") {
            price = 1.6;
        }
    } else if (city === "Plovdiv") {
        if (product === "coffee") {
            price = 0.4;
        } else if (product === "water") {
            price = 0.7;
        } else if (product === "beer") {
            price = 1.15;
        } else if (product === "sweets") {
            price = 1.30;
        } else if (product === "peanuts") {
            price = 1.5;
        }
    } else if (city === "Varna") {
        if (product === "coffee") {
            price = 0.45;
        } else if (product === "water") {
            price = 0.70;
        } else if (product === "beer") {
            price = 1.10;
        } else if (product === "sweets") {
            price = 1.35;
        } else if (product === "peanuts") {
            price = 1.55;
        }
    }
    console.log((quantity*price).toFixed(2));
}