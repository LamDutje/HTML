const age = 12;
const firstName = 'Lam';
const totalAmount = 52;

if (age >= 18 && age <= 25) {
    console.log('You get 50% off!')
}
else {
    console.log('NO DISCOUNT!!')
}
/////////////////////////////////////////////////////

if (firstName == 'Bram' || firstName == 'Sarah') {
    console.log('Free beer!')
}
else {
    console.log('NO GIFT!')
}
/////////////////////////////////////////////////////

if (totalAmount == 50) {
    console.log('FREE Bitterballen!')
}
else if (totalAmount > 50 && totalAmount < 100) {
    console.log('FREE Nachos!')
}
else if (totalAmount >= 100) {
    console.log('FREE Champagne!')
}