// ... ---> rest operator
function calculatecartprice(...num1){
      return num1;
}

console.log(calculatecartprice(200,300,400))

// passing the object in the function and handling it...
const user = {
    username: "sudhakar",
    price: 199
}

// accessing the user in the function:
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${
        anyobject.price}`);

}

handleobject(user);

// directly bhi kar sakte hai
handleobject({
    username: "samu",
    price: 199
})

//arrays bhi pass kar lete hai 
const myarrays = [200,400,600]
function returnsecondvalue(getarray){
    return getarray[2]
}

// console.log(returnsecondvalue(myarrays));
console.log(returnsecondvalue([200,400,500,1000]));

//scope -->
