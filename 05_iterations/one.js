// for 
// for(let i = 0; i <= 20; i++){
//     const element = i;
//     console.log(element);
// }
// loop ke andar bhi loop chal sakta hai 
// loop ke andar vaale variable ko different consider karna hai!!

//   // break and continue
// for(let i = 0 ; i <= 20; i++){
//     if (i == 5){
//         console.log(`detected 5`);
//         break;
//     }
//         console.log(`value of i is ${i}`);

// }
// so ek baar agar break statement likh dete hain 
// to uske baad vo loop se bahar aajata hai andar 
// loop mein kuch bhi execute nhi hota !!!!!!!

for(let i = 0 ; i <= 20; i++){
    if (i == 5){
        console.log(`detected 5`);
        continue;
    }
        console.log(`value of i is ${i}`);

}

// continue ka matlab hota hai ki ek condition
// ke liye aapko maafi di jaati hai 
// matlab aap us condition ko ignore kar do !!!

for(let i = 0 ; i <= 20; i++){
    if (i == 5){
        console.log(`detected 5`);
        break
    }
        console.log(`value of i is ${i}`);

}