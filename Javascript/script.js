
for (let A = 100; A <= 200; A++){
    console.log(A);
}

let a = 100;
while (a <= 200){
    if (a % 2 == 0){
        console.log("-")
    }else{
        console.log("*")
    }
    a++;
}

for (let A = 100; A <= 200; A++){
    if (A % 2 == 0){
        console.log("-")
    }else{
        console.log("*")
    }
}

for (let x = 1; x<=10; x++){
    
    for (let y = 0; y < 10; y++){
        console.log(x);
    }
}

let day = "Sun"
switch (day){

    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
        console.log("Weekday!")
        break;

    case "Sat":
        console.log("Saturday!")
        break;

    case "Sun":
        console.log("Sunday!")
        break;

    default:
        console.error("Invaild Day...")

}

const date = new Date()
let dayAsNumber = date.getDay();
switch (dayAsNumber){

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday!")
        break;

    case 6:
        console.log("Saturday!")
        break;

    case 0:
        console.log("Sunday!")
        break;

    default:
        console.error("Invaild Day...")

}

console.log(date)

let strictA = true;
let strictB = 1;
console.log(strictA == strictB);  // T both are 1 (in value)
console.log(strictA === strictB); // F one is bool, other is number

console.log(strictA != strictB);  // F both are 1 so 
console.log(strictA !== strictB); // T types are different

let age = 5

if (age < 18){
    console.log("underage")
}else if (age > 50){
    console.log("over 50")
}else{
    console.log(`${age} is Between 65 and 18`)
}

console.log( (65 > age && age > 18)? "Between the range" : "Outside the range" )

console.log( (age > 18)? ((age < 65)? `${age} is vaild`: "Overage" )  : "Underage" )
