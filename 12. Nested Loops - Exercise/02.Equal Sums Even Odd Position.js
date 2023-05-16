function solve(input) {
    let startingNum = Number(input[0]);
    let endingNum = Number(input[1]);
    let currentNum = "";
    let result = "";
    let sum1 = 0;
    let sum2 = 0;
  
    for (let i = startingNum; i <= endingNum; i++) {
      currentNum = i.toString();
      for (let j = 0; j < 6; j++) {
        if (j % 2 == 0) {
          sum1 += Number(currentNum[j]);
        } else {
          sum2 += Number(currentNum[j]);
        }
      }
      if (sum1 == sum2) {
        result += i + " ";
      }
      sum1 = 0;
      sum2 = 0;
    }
    console.log(result);
  }