function solve([arg1, arg2, arg3]) {
    let product = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let price = 0;
    if (  day === "Monday" 
        ||day === "Tuesday" 
        ||day === "Wednesday" 
        ||day === "Thursday" 
        ||day === "Friday" ) {
            if (product === "banana") {
                price = 2.5;
            } else if (product === "apple") {
                price = 1.2;
            } else if (product === "orange") {
                price = 0.85;
            } else if (product === "grapefruit") {
                price = 1.45;
            } else if (product === "kiwi") {
                price = 2.7;
            } else if (product === "pineapple") {
                price = 5.5;
            } else if (product === "grapes") {
                price = 3.85;
            } else {
                console.log("error");
            }
        } else if (day === "Saturday" || day === "Sunday") {
            if (product === "banana") {
                price = 2.7;
            } else if (product === "apple") {
                price = 1.25;
            } else if (product === "orange") {
                price = 0.90;
            } else if (product === "grapefruit") {
                price = 1.60;
            } else if (product === "kiwi") {
                price = 3;
            } else if (product === "pineapple") {
                price = 5.6;
            } else if (product === "grapes") {
                price = 4.2;
            } else {
                console.log("error");
            }
        } else {
            console.log("error");
        }
        if (price !== 0) {
        console.log(`${(quantity*price).toFixed(2)}`);
        }
}