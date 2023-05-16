function solve(input) {
    let destination = input.shift();
    let budget = Number(input.shift());
    let index = 0;
    let currentSavings = Number(input[index]);
    let totalSavings = 0;
    while (destination !== "End") {
      totalSavings += currentSavings;
      if (totalSavings >= budget) {
        console.log(`Going to ${destination}!`);
        totalSavings = 0;
        index++;
        destination = input[index];
        index++;
        budget = input[index];
        index++;
        currentSavings = Number(input[index]);
      } else {
        index++;
        currentSavings = Number(input[index]);
      }
    }
  }