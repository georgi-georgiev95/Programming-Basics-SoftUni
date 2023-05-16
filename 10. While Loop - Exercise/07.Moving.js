function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let totalBoxes = width * length * height;
    let index = 0;
    let currentBoxes = Number(input[index]);
    while (input[index] !== "Done") {
      totalBoxes -= currentBoxes;
      if (totalBoxes <= 0 && input[index] !== "Done") {
        console.log(
          `No more free space! You need ${Math.abs(totalBoxes)} Cubic meters more.`
        );
        return;
      } else {
        index++;
        currentBoxes = Number(input[index]);
      }
    }
    console.log(`${totalBoxes} Cubic meters left.`);
  }