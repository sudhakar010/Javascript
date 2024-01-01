//   this is used to access the current context:

const user = {
    username: "sudhakar",
    price: 999,

    welcomemessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);
// ----------------------------------------------

// function chai(){
//     let username = "sudhakar"
//     console.log(this.username);
// }
// chai()

//agar meine function ke andar print kara to bht saari values aati hain!!
// function ke anadar aake mein this se kuch bhi print ya bole to use nhi karpaa rha hoon..

// --------------------------------------------------
// this is how the arrow function is made !!!!!!
const chai = () => {
    let username = "sudhakar"
    console.log(this);
}


// ----------------------------------------------------------------->
// pure arrow function :
// syntax:
      // const addtwo = (num1, num2) => {
     //        return num1 + num2
     // }
     // console.log(addtwo(3,4));


// this is the implicit form of the arrow function:
   // const addtwo = (num1, num2) =>  num1 + num2
    // console.log(addtwo(3,4))

    const addtwo = (num1, num2)  => (num1 + num2)
    console.log(addtwo(3,4))
    // so we can say that ki agar parenthesis brackets ka use karenge to 
    // hume return word likhne ki jarurat nhi padegi !!!!!!


    // agar object ka use karenge too :
    const addTwo = (num1, num2) => ({username: "sudhakar"})
    console.log(addTwo(3,4))
 // imp baat ---> isme object ko curly braces ke andar daalna hi padega!!
