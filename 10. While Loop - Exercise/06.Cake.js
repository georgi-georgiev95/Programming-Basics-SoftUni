function solve(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let totalSlices = length * width;
    let index = 0;
    let currentSlices = Number(input[index]);
    while (input[index] !== "STOP") {
      totalSlices -= currentSlices;
      if (totalSlices <= 0 && input[index] !== "STOP") {
        console.log(
          `No more cake left! You need ${
            Math.abs(totalSlices)
          } pieces more.`
        );
        return;
      } else {
        index++;
        currentSlices = Number(input[index]);
      }
    }
    console.log(`${totalSlices} pieces are left.`);
  }