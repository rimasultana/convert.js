//! inch to feet convert

/* function inchToFeet(inch){
const feet = inch / 12;
return feet;
}

console.log(inchToFeet(45));
 */

/* function inchToFeet(inch){
const feet = inch / 12;
const feetFraction = parseInt(feet)
const feetinch = inch % 12;
const result =feet + ' total ' + feetFraction + " feet " + feetinch + ' inch ';
return result
}
console.log(inchToFeet(75));
 */



function publicBusFare(People){
    const bus = 50;
    const micro = 11;
    const publicBusCost = 250;

    const remainAfterBus = People % bus;
    const remainAfterMicro = remainAfterBus % micro;
    return remainAfterMicro * publicBusCost;

}
console.log(publicBusFare(117));