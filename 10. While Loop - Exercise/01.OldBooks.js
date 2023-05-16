function solve(input) {
    let wantedBook = input.shift();
    let index = 0;
    let nextBook = input[index];
    let counter = 0;
    while (nextBook !== "No More Books") {
        if (nextBook === wantedBook) {
            console.log(`You checked ${counter} books and found it.`);
            return;
        } else {
            counter++;
        }
        index++;
        nextBook = input[index];
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
}