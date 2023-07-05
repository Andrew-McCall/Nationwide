/*

While
For

For of/in

*/

const list = [509,3252,2564,235,52,532,35,234,14,412,6,8,59]

let sum = 0

// n iterates through the list
for (let item of list){
    sum = sum + item
    console.log(sum)
}

console.log("Sum:", sum)

// 100 green bottles on the wall, if one falls then there'll be 99 bottle
// 99 green bottles on the wall, if one falls then there'll be 98 bottle
// 98 green bottles on the wall, if one falls then there'll be 97 bottle
// 97 green bottles on the wall, if one falls then there'll be 96 bottle
// 96 green bottles on the wall, if one falls then there'll be 95 bottle

let bottles = 10
while (bottles >= 1){
    console.log(`Theres ${bottles} on the wall, if one were to fall, then there will be ${bottles-1} left on the wall...`)
    bottles = bottles - 1 // bottles -= 1
}

bottles--             // always minus one 
bottles-=1            // can change the ammount subtracted
bottles = bottles - 1 // can change the ammount subtracted

// bottles++ 
// counter is handled by for loop
//    inital           condition       iter

// Best for when you want a counter, and you want said counter handled
for (let bottles = 20; bottles >= 1; bottles-=1){
    console.log(`Theres ${bottles} on the wall, if one were to fall, then there will be ${bottles-1} left on the wall...`)
}


// for when itemIndex is less than the length. Loop start at 0, end with +1
for (let itemIndex = 0; itemIndex < list.length; itemIndex+=1){
    let item = list[ itemIndex ]
    console.log( item )
} 

// when in is used on an array, it iters the INDEX, 0 - array.length
// Just like line 48
for (let itemIndex in list){
    let item = list [ itemIndex ]
    console.log(item)
}

// Simplest in looks and lines
for (let item of list){
    console.log( item )
}

list.forEach( item => console.log( item ) )


// Object is a collection of keys - value pairs
// each key is text that represents some other value

// Arrowed function all us to pass code as a parameter


// Created an annoymous function e.i code, which adds any item given to the 'avg' variable
// forEach will rull this function, inputting each item from the list
let avg = 0
list.forEach ( item => avg+=(item/list.length) )
console.log(avg)

const mutiply_by_19 = (n) => {

    const prime = 19

    return prime * n

} 

list.forEach( x => console.log( mutiply_by_19(x) ) )

/*
// Shopping cart
let cart = [ "Bread", "Eggs", "Soap" ]
cart.push("Chocolate")


// Shop has price-list
const priceList = { "Bread":0.59, "Eggs":2.99, "Soap":0.5, "Chocolate":1.99 }

console.log("Recipet")
let total = 0
for (let item of cart){

    let price = priceList[item]
    total += price

    console.log("1x", item, "£"+price)
}
console.log("Pay: £"+ total)
*/

// Shopping cart
let cart = [ "Bread", "Eggs", "Soap", "ShoppingCart" ]
cart.push("Chocolate")


// Shop has price-list
const priceList = { "Bread":0.59, "Eggs":2.99, "Soap":0.5, "Chocolate":1.99 }

console.log("Recipet")
let total = 0

const process = (cartItem) => {
    let price = priceList[cartItem]

    if (price !== undefined){
        total += price
        console.log("1x", cartItem, "£"+price)
    }else{
        console.log(cartItem, "is not for sale!")
    }
}

/*
for (let item of cart){
    process(item)
}
*/

cart.forEach( process )
console.log("Pay: £"+ total)



console.log(cart)

// get a new list that has each item maped to its price via the pricelist
let prices = cart.map( (v) => {
    return priceList[v]
} )

for (let index in prices){

    if (prices[index] == undefined){
        console.log("You cannot buy "+ cart[index])
    }else{
        console.log("£", prices[index], cart[index])
    }

}

let pets = [{name:"jon", haveBeenFed:false},{name:"joe", haveBeenFed:false},{name:"jay", haveBeenFed:false}]

pets.forEach(p => console.log(p.name))

function FeedAllPets(){
    pets = pets.map( p => {return {name:p.name, haveBeenFed:true}} )
}

console.log(pets)
FeedAllPets()
console.log(pets)

