function solve([arg1, arg2]) {
    let city = arg1;
    let sales = Number(arg2);
    let comission = 0;
    if (city !== "Sofia" && city !== "Varna" && city !== "Plovdiv") {
        console.log("error");
        return;
    } else if (sales < 0) {
        console.log("error");
        return;
    }
    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            comission = 0.05;
        } else if (sales > 500 && sales <= 1000) {
            comission = 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            comission = 0.08;
        } else if (sales > 10000) {
            comission = 0.12;
        }
    } else if (city === "Varna") {
        if (sales >= 0 && sales <= 500) {
            comission = 0.045;
        } else if (sales > 500 && sales <= 1000) {
            comission = 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            comission = 0.1;
        } else if (sales > 10000) {
            comission = 0.13;
        }
    } else if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            comission = 0.055;
        } else if (sales > 500 && sales <= 1000) {
            comission = 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            comission = 0.12;
        } else if (sales > 10000) {
            comission = 0.145;
        }
    }
    console.log(`${(sales*comission).toFixed(2)}`);

}