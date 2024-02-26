let x= 10
let y=20

let z= x+y;
let m= x-y;
let v= x*y;
let n= x/y;

console.log("sun " + z);
console.log("sun " + m);
console.log("sun " + v);
console.log("sun " + n);

let sum;
sum = 605;

const sum1 = 35

let sritng = " what 50 so ever written in this double inverted comma is string"

console.log(sritng);

let numb = 20;
console.log(numb);

let boolen = true;
console.log(boolen);
console.log(typeof boolen);

let someU = undefined
console.log(typeof someU);

let someNl = null;
console.log(someNl)
console.log(typeof someNl)

let  object = "Johan"
console.log(object);
const person = { first : "Mohan", last : "Doe"}
let first 
console.log(first)

let firstsym = Symbol(50);

let secondsym = Symbol("second symbol");
console.log(firstsym, secondsym);
console.log(typeof firstsym);

let thirdsym = Symbol(60);
let fouthsym = Symbol(60);
console.log(firstsym, thirdsym);
console.log(typeof thirdsym);
console.log(thirdsym);
console.log(secondsym, thirdsym);
console.log(thirdsym == fouthsym);
console.log(firstsym == thirdsym);


let bigBin = BigInt("0b1010101001010101001111111111111111");
console.log(bigBin);
let sumBig = BigInt(5566664566446445645688945489);
console.log(sumBig);
console.log(typeof sumBig);

let SumInt = 5645645645645645645645456n;
console.log(SumInt);
console.log(typeof SumInt);


let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")
console.log(symbol1 == symbol2);

let second = new Object(20);
console.log(second);

var a = 17; 
var b = "GeeksforGeeks"; 
var c = ""; 
var d = null; 
var f = 15.2;
  
console.log("Type of a = " + (typeof a)); 
console.log("Type of b = " + (typeof b)); 
console.log("Type of c = " + (typeof c)); 
console.log("Type of d = " + (typeof d)); 
console.log("Type of e = " + (typeof e));
console.log("Type of f = " + (typeof f));

const car = {
    model: "Modelname",
    name: "Mg",
    no: 404
}
console.log(car);

var geek = "Hello Geek"
let $ = "Welcome"
const _example = "Gfg"

var a = "Hello Geeks"
var b = 10;
var c = 12;
var d = b+c;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let w= "Hello learners"
let s = "joinig";
let k = "12";
let g = b+c;

src = "https://www.geeksforgeek.org/js/script.js"

console.log(a);
console.log(b);
console.log(c);
console.log(d);


const o = "Hello learners"
console.log(a);


const q = 400;
console.log(b);

 
const l = "12";
console.log(l);

console.log("Hello World!")
let hero = 'Computer science portal';
console.log(hero)

let sub = 5-3
console.log(sub)
let mul = 7*2
console.log(mul)
let div = 8/9
console.log(div)

const fruit = "Apple"
 
switch (fruit) {
    case "Apple":
        console.log("Apple is healthy for our body");
        break;
    case "Mango":
        console.log("Mango is a National fruit of India");
        break;
    default:
        console.log("I don't like fruits.");
}
const personOne = {
    firstName: "Johan"
    
};
console.table(personOne)


const useStart = "This string implements the startsWith() method.";
console.log(useStart.startsWith("continue"), 
useStart.startsWith("mohan"));

const useEnd = "This string implements the endsWith() method.";
console.log(useEnd.endsWith("clear() method."), 
useEnd.endsWith("rohit."));

const useIncludes = "This string implements the includes() method.";
console.log(useIncludes.includes("includes()"), 
useIncludes.includes("ravi"));

const newArr = Array.from("rohit, sohan, johan");
console.log("Implementing Array.from(): ", newArr)

const milkProducts = ["Curd", "Cheese", "Butter", "Ice-Cream", 2, 4, ];
const arrayKeys = milkProducts.keys();
console.log("Implementing Array.keys(): ")
for(let key of arrayKeys){
    console.log(key)
    };

    function Myname(){
        console.log("A");
        console.log("s");
        console.log("i");
        console.log("g");
        console.log("h");
    }

    Myname()
    Myname()

    function AddNum(a,b){
        console.log("This is addition of two no.",a+b);
    }
 AddNum(50,120)
 AddNum(520,120)
 AddNum(50,120)
 AddNum(530,120)
 AddNum(507,120)
 AddNum(580,120)

 const INDIANCOASTGUARD= {
    CGHQ:  "DELHI",
    RHQ:   "MUMBAI",
    DHQ:   "KOCHI",
    SHIP:  "VRH",
    
 };
 console.table(INDIANCOASTGUARD)

 const Buvik ={
    Name: "Rahul",
    Rank:   "Nvk",
    PNo:    "12345",
    Unit:   "VRH",
     };
console.table(Buvik)

function userlogged(user){
    console.log("This one is user");
    return`${user} has logged in.`;
    }
    console.log(userlogged('Johan'));

    function userlogged(user){
        console.log("this one is not a user as admin");
        return`${user} has not logged in.`;
    }
console.log(userlogged('Mohit is a valid user for the admin account'));

    
function AddNum(a,b){
    console.log("This is addition of two no.",a-b);
}
AddNum(50,120)
AddNum(520,120)
AddNum(50,120)
AddNum(530,120)
AddNum(507,120)
AddNum(580,120)

var fourteen="thids"; 
var sixteen="joti"; 
var newstring='new string is made up of'+first+second;
console.log("this is addtion of two quantity", fourteen+sixteen);
console.table(newstring);

const women = {
name: 'Sara',
age: 25,
gender: 'female'
}

let {name, age, gender} = women;
console.log(name);
console.log(age);
console.log(gender);


 const accountUser = "SomeoneAcc"
 //? const accountUser1 = "SomeoneAcc"
 let accountEmail = "Somethingjs@gmail.com"
 var accountPassword = "something@0905"
 accountCity ="Mumbai"
 let accountName;

 accountEmail = "SomethingElse@gmail.com"
 accountEmail = "myemail@gmail.com"

 accountPassword = 457854965658
 accountCity = "Dehradun"

 console.table([
    accountUser,
    accountEmail,
    accountPassword,
    accountCity,
    accountName
 ])

 const accountUser1 = "SomeoneEEE"

 let accountEmail1 = "Somethingjs@email.com "
 var accountPassword1= "something$djkfdfh"
accountCity1 = "Delhi"
let accountName1 = "hira"

accountEmail1 = "Somethingelse@gmail.com"
accountEmail1 = "myemail@gmail.com"

accountPassword1 = 445445488564894486
accountCity1 = "Haryana"
accountnumber = 45456466456456

console.table([
    accountUser1,
    accountEmail1,
    accountPassword1,
    accountCity1,
    accountName1,
    accountnumber
])

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
  }
  
  show('one', 'two', 'three', 'four', 'five', 'six')

  let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five']; 
console.log(arr2); // ["one", "two", "three", "four", "five"]

let greet = x => console.log(x);
greet('Hello'); // Hello 

let great = x => console.log(x);
greet('how are you ');

let greatS = y => console.log(y);
great('i am fine')

let aayu = 20;

let welcome = (aayu < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

let ages = 15;
let welcomes = (ages<20) ?
() => console.log('Baby'):
() => console.log('Adult');

welcomes();

let Age = 25;
let Welcome = ( age<30) ?
() => console.log('Young'):
() => console.log('Adult');

Welcome();

let Sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = Sum(5,7);
console.log(result1); // 12

let sums = (a, b) => {
    let result = a+b;
    return result;
}
let result2 = sums(8,10);
console.log(result2);



