// so there are basically two types of memory
// 1st.  stack (used in primitive) : yahn pe aapko copy milegi
// jaise ki numbers hogye , boolean ho gye!!
// 2nd.  heap(used in non primitive): yahan pe aapko reference milega original copy ka 
// heap ke andar hamesha aapko reference hi milta hai 


// 
let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


