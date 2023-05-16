function solve([arg1, arg2, arg3]) {
    let chickenMenu = Number(arg1);
    let fishMenu = Number(arg2);
    let vegMenu = Number(arg3);
    let sum = chickenMenu*10.35+fishMenu*12.4+vegMenu*8.15;
    let dessert = sum*0.2;
    let total = sum+dessert+2.5;
    console.log(total);
}