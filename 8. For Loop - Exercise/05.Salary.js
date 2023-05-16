function solve(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let penalty = 0;
    for (let i = 2; i <= tabs+1; i++) {
        let currentTab = input[i];
        if (currentTab === "Facebook") {
            penalty = 150;
            salary-=penalty
        } else if (currentTab === "Instagram") {
            penalty = 100;
            salary-=penalty
        } else if (currentTab === "Reddit") {
            penalty = 50;
            salary-=penalty
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            return;
        }
    }
    console.log(`${Math.round(salary)}`);
}