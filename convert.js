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

/*
!publicBusFare
 function publicBusFare(People){
    const bus = 50;
    const micro = 11;
    const publicBusCost = 250;

    const remainAfterBus = People % bus;
    const remainAfterMicro = remainAfterBus % micro;
    return remainAfterMicro * publicBusCost;

}
todoconsole.log(publicBusFare(365)); */
/* 
function IsJavaScriptFile(str) {
  const check = str.indexOf(".js");
  if (check !== -1) {
    return true;
  }
  return false;
}

console.log(IsJavaScriptFile('app.png'));
 */


function OilPrize(dejal, patrol,octral){
   const dejalPrize = 114;
   const patrolPrize = 130;
   const octralPrize = 135;


   const remainDejal = dejal * dejalPrize;
   const remainPatrol = patrol * patrolPrize;
   const remainOctral = octral * octralPrize;

   const totalCost = remainDejal + remainOctral + remainPatrol;
   return totalCost;

}
console.log(OilPrize(30, 20, 10));