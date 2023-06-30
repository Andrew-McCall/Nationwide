// Pass By Value - Primitive types
let a = 10;
let b = a;

a += 5;

console.log(a) // 15
console.log(b) // 10

// Pass By Reference - Objects, Arrays, Classes
let c = {} 
let d = c
c["key"] = "Value"

console.log(c) // {key: 'Value'}
console.log(d) // {key: 'Value'}

d["key"] = "NO thanks!"
console.log(c) // {key: 'NO thanks!'}
console.log(d) // {key: 'NO thanks!'}


let e = []
let f = e
e.push(1)
f.push(-1)
console.log(e) // {key: 'Value'}
console.log(f) // {key: 'Value'}
