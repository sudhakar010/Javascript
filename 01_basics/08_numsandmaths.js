const score = 400

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const nmm = 23.8966
// console.log(nmm.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// +++++++++ Maths +++++++++++++
console.log(Math.abs(-4));
// gives the absolute value

// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,3,5,7,2));

console.log(Math.random());
// yeh hume 0 se 1 ke beech mein number deta hai 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)