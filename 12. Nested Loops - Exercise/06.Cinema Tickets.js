function solve(input) {
    let kidsTickets = 0;
    let studentsTickets = 0;
    let standardTickets = 0;
    let argument;
  
    while ((argument = input.shift()) !== 'Finish') {
      let movie = argument;
      let totalSeats = Number(input.shift());
      let usedSeats = 0;
      let ticketType;

      while (usedSeats < totalSeats && (ticketType = input.shift()) !== 'End') {
        usedSeats++;
        if (ticketType === 'kid') {
          kidsTickets++;
        } else if (ticketType === 'student') {
          studentsTickets++;
        } else if (ticketType === 'standard') {
          standardTickets++;
        }
      }
      console.log(`${movie} - ${(usedSeats / totalSeats * 100).toFixed(2)}% full.`);
    }
  
    let totalTickets = kidsTickets + studentsTickets + standardTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentsTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
  }