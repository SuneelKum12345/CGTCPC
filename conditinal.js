function chekN(x) {
    if (x > 5) {
        console.log("Print");
    } else{
        console.log("Do not print");
    }
}

chekN(40);
chekN(4);
chekN(3);
chekN(6);

let num = 20

if (num % 2 === 0) {
    console.log("Given number is even number.");
}

if (num % 3  == 0) {
    console.log("Given number is odd number.");
};

let age = 15;

if (age >= 18) {
    console.log("You are eligible of driving licence")
} else {
    console.log("You are not eligible for dirving licence")
};

const num1 = 0;

if (num1>0) {
    console.log("Givin number is positive.");
} else if (num1<0) {
    console.log("Given number is negative.");
} else {
    console.log("Given number is zero.");

};

const marks = 0;
let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer scince engineering";
        break;
    case marks >= 80:
        Branch = "Mechanincal engineering";
        break;
    case marks >=70:
        Branch = "Chemical engineering";
        break;
    case marks >=60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}
console.log(`Student Branch name is :${Branch}`);

let age1 = 15;

const result = (age1 >= 18) ? "You  are eligible to vote."
                    : "You are not eligible to vote.";

                    console.log(result);

function chekN(x) {
    if (x > 5) {
        console.log(x + "Print");
        } else if (x >10) {
            console.log(x + "is greater than 10");
        } else
        console.log(x + "is less than")
}

chekN(10);
chekN(0);
chekN(2);

// Case 1: Postfix 
let num2 = 12; 
  
// The current value of 'num2' (12) is used,  
// then 'num2' is incremented to 13. 
let num2Postfix = num2++; 
  
console.log(num2Postfix); 
  
// Updated value of 'num2' 
console.log(num2); 
  
// Case 2: Preifix 
let num3 = 10; 
  
//'num3' is incremented to 11, and then 
// the updated value (11) is used 
let num3Prefix = ++num3; 
  
console.log(num3Prefix); 
  
// Updated value of 'num3' 
console.log(num3);