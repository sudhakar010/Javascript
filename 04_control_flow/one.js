//if

// if(true){

// }
// == ye check karte hai ki value equla hai ki nhi 
// but agar mujhe datatype bhi check karna hai |||||| ----> to i will use ===
// e.g.
const temperature = 41

if( temperature < 50 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50")
}



// console.log("temperature is greater than 50");

// if(2 === "2"){
//     console.log("executed");
// }
// console.log("executed");


// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }

// var keyword ka scope is completely global :
// means isko hum kahin bhi access kar sakte hai ::::

// shorthand notation of if
// const balance = 1000;
// if(balance < 500){
//      console.log("less than 500");
// }else if(balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("balance is less greater than 900");
// }


// const userloggedin = true;
// const debitcard = true;
// const loggedinfromgoogle = false
// const loggedfromemail = true

// if(userloggedin && debitcard && 2==3){
//     console.log("allow to buy my course");
// }

// if(loggedinfromgoogle || loggedfromemail){
//     console.log("successfully logged in ")
// }

// if(userloggedin && debitcard){
//     console.log("allow to buy course");
// }

// ////  --> talking about the switch case:::::
// basic syntax:
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

 const month = 3
 switch (month) {
    case 1:
        console.log("january") 
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        
        break;
    case 4:
        console.log("april")
        
        break;
    case 5:
        console.log("may")
        
        break;
    case 6:
        console.log("June")
        
        break;
 
    default:
        break;
 }