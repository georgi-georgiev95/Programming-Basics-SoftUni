function solve([arg1, arg2, arg3, arg4]) {
  let pens = Number(arg1);
  let markers = Number(arg2);
  let fluid = Number(arg3);
  let discount = Number(arg4) / 100;
  let pensValue = pens * 5.8;
  let markersValue = markers * 7.2;
  let fluidValue = fluid * 1.2;
  let totalValue = pensValue + markersValue + fluidValue;
  let toPay = (totalValue -= totalValue * discount);
  console.log(toPay);
}
