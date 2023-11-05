let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
//  "33abc" => NaN
// true => 1
//  false => 0

let isloggedin = 1;

let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

// 1 => true ; 0 => false
// "" => false; 
// "hitesh" => true; 

let number = 34
let stringnumber = String(number)
console.log(stringnumber);
console.log(typeof stringnumber);
// ok here conversion for the string.

 //****** Operations ********//


 let value = 3;
 let negValue = -value
 console.log(negValue)

 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**2);
 console.log(2/2);

 let srt1 = "hello"
 let str2 = "hitesh"

 let str3 = str1 + str2
 console.log(str3);



//  console.log("1" + 2);
//  console.log(1 + "2");
//  console.log("1" + 2 + 2);// phle string hoga to sabko string ki tarah treat kiya jayga
//  console.log(1 + 2 + "2"); // agar last mein string hoga to phle sabko normally treat kiya jayega

//  console.log((3+4)*5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2 // not a good method to declare a variable

let gamecounter = 100
gamecounter++;
console.log(gamecounter);


