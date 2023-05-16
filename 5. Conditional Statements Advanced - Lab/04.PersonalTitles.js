function solve([arg1, arg2]) {
    let age = Number(arg1);
    let gender = arg2;
    let title;
    if (gender === "m") {
        if (age < 16) {
            title = "Master";
        } else {
            title = "Mr.";
        }
    } else if (gender === "f") {
        if (age < 16) {
            title = "Miss";
        } else {
            title = "Ms."
        }
    }
    console.log(title);
}