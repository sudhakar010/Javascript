//const tinderuser = new Object(); ---> singleton object
const tinderUser = {}  // non singleton object
// line 1 and line 2 are same !!

tinderUser.id = "123ffer"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "govind@gmail.com",
    // object ke andar object
    fullname: {
        // object ke andar object phir uske andar object
         userfullname: {
                  firstname: "sudhakar",
                  lastname: "pal"
         }
    }
}

// console.log(regularUser.fullname.userfullname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign( {}, obj1, obj2)

// now this is called spread out method :---->
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        // id: 1,
        // email: govind@gmail.com,
    },
    {

    },
    {

    },
]

users[1].email


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// to check karna ki yeh property hai ki nhi ???
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring :::::
const course = {
    coursename: "js in hindi",
    price: "2000",
    courseinstructor: "sudhakar"
}

// course.courseinstructor
// another way of fetching : the courseinstructor form the course ....
const{courseinstructor} = course 
console.log(courseinstructor);

// API'S:
// jab bhi apna kaam kisi aur se karvana ho tab
//  api's ---> values aati hai backend se and unko aap kaise likhte hai !!
//  values come in json 
// json ---> 
// {

// }

// {
//     "name": "sudhakar",
//     "coursename": "js in hindi",
//     "price": "free",
// }

// aur aise bhi api mil sakta hai  

[
  {},
  {},
  {}
]



