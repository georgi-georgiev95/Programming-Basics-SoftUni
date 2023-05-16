function solve(input) {
    let startingNum = Number(input.shift());
    let endingNum = Number(input.shift());
    let magicNum = Number(input.shift());
    let counter = 0;
    for (let i = startingNum; i <= endingNum; i++) {
      for (let j = startingNum; j <= endingNum; j++) {
        counter++;
        if (i + j == magicNum) {
          console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
          return;
        }
      }
    }
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }