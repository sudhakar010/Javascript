const myobject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift : 'swift',
}

// objects ko iterate karne ke liye hum //for in// loop ko use karte hain

for(const key in myobject){
    // console.log(`${key} shortcut is for : ${myobject[key]}`);
}

// for arrays 
const programming = ['js','rb', 'py','java','cpp']

for(const key in programming){
    console.log(programming[key]);
}