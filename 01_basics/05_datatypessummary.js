
// javascript is a dynamically typed language,
// which means that data types of variables are determined by the value they hold
// at runtime and can change throughout the program

// primitive : call by value .
// isme direct address nhi milta balki
// 7 types: string , number, boolean, null, undefined, symbol, 
        //   BigInt

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
// aab iska reslut false hi ayga because 
// chaye hum value bhi same hi daale phir bhi symbol ka kaam hi yhi hai 
// ki vo alag value  ko return kare....
console.log(id == anotherid)

const bigNumber = 3465543934567849538n


//  javascript ke andar hum kabhi language ko define nhi karte hai
//  reference type: non primitive:
// isme memory ka reference apko directly allocate kiya jaa skata hai
// array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]
// jo curly braces ke aandar jitna bhi aata hai vo object hota hai
let myobj = {
       name : "sudhakar",
       age: 21,
}

const myfunction = function() {
    console.log("Hello World");
}

console.log(typeof outsideTemp);

//undefined --->  undefined
// null ---> object
//  boolean ----> boolean
//  number ----> number
//  string ----> string 
// function ----> object function (function basically function hi return karta hai !!!)
//  symbol ----> symbol

// all non primitive type returns object only..

