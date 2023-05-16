function solve([arg1, arg2, arg3]) {
    let type = arg1;
    let rows = Number(arg2);
    let columns = Number (arg3);
    let seats = rows*columns;
    let price = 0;
    if (type === "Premiere") {
        price = 12;
    } else if (type === "Normal") {
        price = 7.5;
    } else if (type === "Discount") {
        price = 5;
    }
    let income = (seats*price).toFixed(2);
    console.log(`${income} leva`);
}