const name = "hitesh"
const repocount = 50

// concatinate the strings
console.log(name + repocount + " Value");
// above method is kaafi old instead do this

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// this method is in the most common use:
// this is called as the string interpolation:

const gameName = new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,3);
console.log(anotherString);

const anotheriString = gameName.slice(-8,4)
console.log(anotheriString);

const nayastring = "   hitesh   "
console.log(nayastring);
console.log(nayastring.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('Govind'))

const jai = "herot-eraha-ofosid"
console.log(jai.split('-'));
// iska matlab hua ki meine split kiya on the basis of '-';
