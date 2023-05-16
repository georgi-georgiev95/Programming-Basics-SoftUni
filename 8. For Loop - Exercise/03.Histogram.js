function solve(input) {
    let totalNum = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    for (let i = 1; i <= totalNum; i++) {
        let currentNum = Number(input[i]);
        if (currentNum < 200) {
            group1++;
        } else if (currentNum >= 200 && currentNum < 400) {
            group2++;
        } else if (currentNum >= 400 && currentNum < 600) {
            group3++;
        } else if (currentNum >= 600 && currentNum < 800) {
            group4++;
        } else if (currentNum >= 800) {
            group5++;
        }
    }
    let p1 = (group1/totalNum*100).toFixed(2);
    let p2 = (group2/totalNum*100).toFixed(2);
    let p3 = (group3/totalNum*100).toFixed(2);
    let p4 = (group4/totalNum*100).toFixed(2);
    let p5 = (group5/totalNum*100).toFixed(2);
    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    console.log(`${p4}%`);
    console.log(`${p5}%`);
}