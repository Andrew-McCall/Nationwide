const myObject = {}                    
const myObject_advanced = new Object()  

console.log(myObject)          // {}
console.log(myObject_advanced) // {}

myObject.key = "value"
console.log(myObject)     // {key: 'value'}

console.log(myObject.key) // value
myObject.key = 1337
console.log(myObject.key) // 1337

myObject["key"] = 8899
console.log(myObject["key"]) // 8899

let key_name = "key"
console.log(myObject[key_name]) // 8899

key_name = "invaild"
console.log(myObject[key_name]) // undefined
console.log(myObject.invaild)   // undefined

myObject[key_name] = "New Data"
console.log(myObject[key_name]) // New Data
console.log(myObject.invaild)   // New Data

const andrewObject = {name:"andrew", middle:"david", surname:"mccall"}
console.log(andrewObject)         // {name: 'andrew', middle: 'david', surname: 'mccall'}
console.log(andrewObject[0])      // undefined
console.log(andrewObject["name"]) // andrew

andrewObject[0] = "first item"
console.log(andrewObject[0])      // first item
console.log(andrewObject)         // {0: 'first item', name: 'andrew', middle: 'david', surname: 'mccall'}

andrewObject["z"] = "last item?"
console.log(andrewObject)         // {0: 'first item', name: 'andrew', middle: 'david', surname: 'mccall', z: 'last item?'}

const api_response = JSON.parse('{"name":"andrew"}')
console.log(api_response)       // {name: 'andrew'}
console.log(api_response.name)  //  andrew

api_response["number"] = 0
api_response.surname = "mccall"

console.log(JSON.stringify(api_response)) // {"name":"andrew","number":0,"surname":"mccall"}

// [] array
// {} object
// () method

let newObject = {}
newObject.header = "vlaue"
console.log(newObject["header"]) // vlaue

const dict = { "teacher" :"andrew david mccall", "sheep":"fluufy wool mahcine" }

console.log(dict["teacher"]) // andrew david mccall
console.log(dict["sheep"])   // fluufy wool mahcine

const classObject =  {students:["JB", "AM"], teacher:"Andrew", cost:9529}
const classObject1 = {students:["JB", "AM"], teacher:"JB", cost:999}
const classObject2 = {students:["JB", "AM"], teacher:"Andrew", cost:99124}
const classObject3 = {students:["JB", "AM"], teacher:"Andrew", cost:42199}


const classesOnline = [classObject, classObject1, classObject2, classObject3]

for (let clas2s of classesOnline){
    console.log(clas2s.cost)
}