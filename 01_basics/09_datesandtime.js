// dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString);
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString());
// in the case of the dates we genrally follow mm-dd-yyyy
let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(myCreatedDate.getTime());
//the concept above is used to compare the dates:
// to get the value in the milliseconds
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

// and agar hume string interpolation mein likhna hai to 
`${newDate.getDay()} and the time `



// now comes ki hum kaise date ke bht saare features ko dekh skte hai 
newDate.toLocaleString('default',{
     weekday: "long"

})