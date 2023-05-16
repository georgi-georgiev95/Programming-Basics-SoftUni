function solve(input) {
    let groupsCount = Number(input.shift());
    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandj = 0;
    let k2 = 0;
    let everest = 0;
    for (let i = 0; i < groupsCount; i++) {
        let currentGroupCount = Number(input[i]);
        totalPeople+=currentGroupCount;
        if (currentGroupCount <= 5) {
            musala+=currentGroupCount;
        } else if (currentGroupCount > 5 && currentGroupCount <= 12) {
            monblan+=currentGroupCount;
        } else if (currentGroupCount > 12 && currentGroupCount <= 25) {
            kilimandj+=currentGroupCount;
        } else if (currentGroupCount > 25 && currentGroupCount <= 40) {
            k2+=currentGroupCount;
        } else if (currentGroupCount > 40) {
            everest+=currentGroupCount;
        }
    }
    console.log(`${((musala/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((monblan/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((kilimandj/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((k2/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((everest/totalPeople)*100).toFixed(2)}%`);
}