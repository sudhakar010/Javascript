// global and local scope 
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
//now as they are not available outside the scope so they can not be accessible now
// 
// now a ke saath kya ho rha hia ki --> global space mein to uski value 
// 300 hai but scope ke andar uski value 10 hai 
// console.log(a);
// console.log(b);
// console.log(c);
// var ki value har baar change ho jaa rhi hai and kahin bhi accessible hoti hai


// nested scope-------------------
function one(){
    const username = "sudhakar"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    //andar vale ki liye bahar vala global hai to vo le sakta hai !!!
    // but bahar vaala anadar vaaale ki value nhi le sakta kyunki uska 
    // scope vahin tak limited hai !!!!!
    // console.log(website);
    two();
}
one()






// iselse--------------
if(true){
    const username = "sudhakar"
    if(username === "sudhakar"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//// ++++++++++++++ interesting ++++++++++++++++ /////
//:1...................
addone(5)
function addone(value){
    return value+1
}

console.log(addone(5))
// there is no error in 1st as when we kept the addone function to the top :

// : 2..........................
addtwo(5)
// another way of making function
const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5))

// //// ##### so there is farak in the method of declaration of the function 
// agar hum 1 tareeke ke declare karenge to error nhi aarha 
// but agar hum 2 tareeke se declare karne ka try karenge to hume error ka samna karna pad sakta hai!!!!
// because in 2nd : -------------> function ko access karne se pehle mein declare kar rha hoon 
