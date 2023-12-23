// singleton
// whenever we use the literals for the construction of the objects
// then singleton nhi banega !!

// by constructor method 
// Object.create 

// -----------------
const mysym = Symbol("key1")

// object literals
const JsUser = {
    name: "sudhakar",
    "full name": "sudhakar pal",
    [mysym]: "mykey1",
    age: "21",
    location: "delhi",
    email: "sudhakarpal024@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","tuesday"]
}

// how to access objects:
// naive method:
// console.log(JsUser.email)
// //pro method
// console.log(JsUser["email"])
// console.log(JsUser.mysym)
// console.log(JsUser[mysym])

JsUser.email = "sudhakar@chagpt.com"
// if you dont want any changes 
// then aap freeze kar dete ho
// Object.freeze(JsUser)
JsUser.email = "sudhakaransfs@mail.com"
// console.log(JsUser);

//  how to declare function :
JsUser.greeting = function(){
    console.log("Hello JS User !!");
}

// console.log(JsUser.greeting()); 

JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());