function solve([arg1]) {
    let area = Number(arg1);
    let price = area*7.61;
    let discount = price*0.18;
    let moneyToPay = price-=discount;
    console.log(`The final price is: ${moneyToPay} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}