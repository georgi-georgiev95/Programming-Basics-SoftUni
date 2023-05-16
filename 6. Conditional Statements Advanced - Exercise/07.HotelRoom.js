function solve([arg1, arg2]) {
    let month = arg1;
    let nightsCount = Number(arg2);
    let apartmentPrice = 0;
    let studioPrice = 0;
    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;
        if (nightsCount > 7 && nightsCount <= 14) {
            studioPrice-=studioPrice*0.05;
        } else if (nightsCount > 14 ) {
            studioPrice-=studioPrice*0.3;
        }
    } else if (month === "June" || month === "September") {
        studioPrice = 75.2;
        apartmentPrice = 68.7;
        if (nightsCount > 14) {
            studioPrice-=studioPrice*0.2;
        }
    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }
    if (nightsCount > 14) {
        apartmentPrice-=apartmentPrice*0.1;
    }
    console.log(`Apartment: ${(nightsCount*apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(nightsCount*studioPrice).toFixed(2)} lv.`);
}