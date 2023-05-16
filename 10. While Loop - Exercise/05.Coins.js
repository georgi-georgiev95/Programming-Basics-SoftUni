function solve(input) {
    let value = Number((input[0]));
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    let counter7 = 0;
    let counter8 = 0;
    while (value > 0) {
        if (value >= 2) {
            if (Math.trunc(value) % 2 == 0) {
                counter1 += Math.trunc(value)/2;
                value = Number((value - counter1*2).toFixed(2));
            } else {
                counter1 += Math.trunc((value-1)/2);
                value = Number((value - counter1*2).toFixed(2));
            } 
        } else if (value >=1 && value < 2) {
            counter2 = Math.trunc(value);
            value = Number((value - counter2).toFixed(2));;
        } else if (value >= 0.5 && value < 1) {
            counter3 = Math.trunc(value/0.5);
            value = Number((value - counter3*0.5).toFixed(2));
        } else if (value >= 0.2 && value < 0.5) {
            counter4 = Math.trunc(value/0.2);
            value = Number((value - counter4*0.2).toFixed(2));
        } else if (value >= 0.1 && value < 0.2) {
            counter5 = Math.trunc(value/0.1);
            value = Number((value - counter5*0.1).toFixed(2));
        } else if (value >= 0.05 && value < 0.1) {
            counter6 = Math.trunc(value/0.05);
            value = Number((value - counter6*0.05).toFixed(2));
        } else if (value >= 0.02 && value < 0.05) {
            counter7 = Math.trunc(value/0.02);
            value = Number((value - counter7*0.02).toFixed(2));
        } else if (value >= 0.01 && value < 0.02) {
            counter8 = Math.trunc(value/0.01);
            value = Number((value - counter8*0.01).toFixed(2));
        }
    }
    console.log(counter1+counter2+counter3+counter4+counter5+counter6+counter7+counter8);
}