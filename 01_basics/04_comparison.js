 //console.log(2>1);
 //console.log(2>=1);
 //console.log(2<1);
 //console.log(2==1);
 //console.log(2 != 1);

//  donot give the predictable results

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// we have to avoid the above mentioned comparisons 
// as they can put us in confusion any time..

// == this is equality check and >=, <= this is comparison
// they both work differently , comparison convert null to a number
// treating it as a 0
// that why null >=0 is true
// null > 0 is false 


// === strict check
// in this there is no conversion

console.log("2" === 2);
// in this datatype bhi check hoga hai and ye dono same hai hi nhi !!

