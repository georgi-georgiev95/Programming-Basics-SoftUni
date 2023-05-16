function solve([arg1, arg2, arg3]) {
    let days = Number(arg1);
    let nights = days-1;
    let type = arg2;
    let grade = arg3;
    let price = 0;
    if (type === "room for one person") {
        price = 18;
    } else if (type === "apartment") {
        price = 25;
        if (days < 10) {
            price-=price*0.3;
        } else if (days >= 10 && days <= 15) {
            price-=price*0.35;
        } else if (days > 15) {
            price-=price*0.5;
        }
    } else if (type === "president apartment") {
        price = 35;
        if (days < 10) {
            price-=price*0.1;
        } else if (days >= 10 && days <= 15) {
            price-=price*0.15;
        } else if (days > 15) {
            price-=price*0.2;
        }
    }
    let totalPrice = nights*price;
    if (grade === "positive") {
        totalPrice+=totalPrice*0.25;
    } else if (grade === "negative") {
        totalPrice-=totalPrice*0.1;
    }
    console.log(`${totalPrice.toFixed(2)}`);
}