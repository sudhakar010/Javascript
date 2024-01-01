const useremail = "sudhakarpal024@gmail.com"
const myemail=[]
if(useremail) {
    console.log("got user email");

}else {
    console.log("dont have user email");
}

if(myemail.length === 0){
    console.log("myemail is empty");
}
//

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN;

// truthy values
// "0", 'false' , " ", [], {},function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);



// ///Terniary operator
// condition ? true : false

const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 100") : console.log("greater than 100");
 