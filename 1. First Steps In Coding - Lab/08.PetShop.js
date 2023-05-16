function solve([arg1, arg2]) {
    let dogFood = Number(arg1);
    let catFood = Number(arg2);
    let dogFoodPrice = 2.5;
    let catFoodPrice = 4;
    let totalDog = dogFood*dogFoodPrice;
    let totalCat = catFood*catFoodPrice;
    let grandTotal = totalCat+totalDog;
    console.log(`${grandTotal} lv.`)
}