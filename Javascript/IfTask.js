
//Create a IF statement that satifies the following:
/*
Declare a variable age

if age is less than 18, print underage
if age is over 18 AND under 65 print happy
if aga is over 65 print overage

*/

let age = 3
if (age >= 18 && age <=65){
    console.log("Happy")
}else if(age < 18){
    console.log("underage")
}else{
    console.log("overage")
}

if (age < 18){
    console.log("underage")
} else if (age > 65){
    console.log("overage")
}else{
    console.log("happy")
}