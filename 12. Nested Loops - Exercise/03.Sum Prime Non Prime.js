function solve(input) {
    let index = 0;
    let num = Number(input[index]);
    let isPrime = true;
    let primeSum = 0;
    let nonPrimeSum = 0;
  
    while (input[index] !== "stop") {
      if (num < 0) {
        console.log(`Number is negative.`);
      }
      if (num < 2) {
        isPrime = false;
      }
      for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeSum += num;
      } else {
        if (num > 0) {
          nonPrimeSum += num;
        } else {
        }
      }
      index++;
      num = Number(input[index]);
      isPrime = true;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
  }