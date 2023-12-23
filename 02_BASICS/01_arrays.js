// array
const myarr = [0,1,2,3,4,5, true , 'hitesh']
// javascript ke arrays is resizable
// they are not associcative means that they 
// cannot be accessed using arbitary strings as indexes
// javascript arrays form the shallow copies
// means that they share the same references , means that any change in copy will change the 
//  reference too...

const myheroes = ["he", "heroo"]
// new way to declare array
const myarr2 = new Array(1,2,3,4)
// console.log(myarr2[1]);

// methods of array

// push
myarr2.push(6);
// pop
myarr2.pop();
// unshift
myarr2.unshift(9);
// ye starting mein add kar deta hai

// shift
myarr2.shift();

// console.log(myarr2.includes(9));
// console.log(myarr2.indexOf(3));    

const newarr = myarr2.join();
// ye humare array ko string mein convert kar deta hai 


// slice , splice

console.log("A ", myarr2);

const myn1 = myarr2.slice(1,3)

console.log(myn1);
console.log("B ", myarr2);
  
const myn2 = myarr2.splice(1,3)
console.log("C ", myarr2);
console.log(myn2); 
// slice and splice mein farak
// slice mein original array change nhi hota
// splice mein operation ke range include bhi hoti and array bhi change ho jata hai

