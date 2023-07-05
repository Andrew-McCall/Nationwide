// TASK 

// priceList Object {"Bread": 0.59, "Eggs":2.99}

// Lists Object that is your shopping list
// [{name:"Bread", quanity:2}, {name:"Eggs", quanity:1}]

// Print Every item in the cart with its name X quantity

// loop through and calcuate the total cost

// map through and add totalCost to shopping list object
// [{name:"Bread", quanity:2, cost:1.18}, {name:"Eggs", quanity:1, cost:2.99}]

// forEach to calcualte the total cost of the processed shopping list

// print the item, quanity, cost
// after all the items print thte total cost (in a nice format)

const priceList = { "Bread":0.59, "Eggs":2.99, "Soap":0.5, "Chocolate":1.99 }

const cart = []
cart.push({name:"Bread", quantity:1 })
cart.push({name:"Eggs",  quantity:2 })
cart.push({name:"Soap",  quantity:7 })

// for (let item of cart){
//     console.log(`${item.name} x${item.quantity}`)
// }

// cart.forEach( (item) => console.log(`${item.name} x${item.quantity}`) )

let totalCost = 0
for (let item of cart){
    totalCost += priceList[item.name] * item.quantity
}

//cart.forEach( item => totalCost += priceList[item.name] * item.quantity )

// console.log("£"+totalCost)

// for (let index in cart){
//     const item = cart[index]

//     cart[index] = {...item, cost:priceList[item.name]}
// }

const newCart = cart.map( item =>  {return {...item, cost:priceList[item.name]}} )
console.log(newCart)
// [{name:"Bread", quanity:1, cost:0.59}, {name:"Eggs", quanity:1, cost:2.99}]

console.log("Recipet")
// grab each time
// have the price and quantity of the item
for (let index in newCart){
    console.log(index)

    let item = newCart[index]
    console.log(item)

    let name = item.name
    let quanity = item.quantity
    let cost = item.cost

    console.log(`${quanity}x ${name}, £${quanity * cost}`)
}

console.log("Total: ", totalCost)


// for (let item of newCart){
//     let name = item.name
//     let quanity = item.quantity
//     let cost = item.cost

//     console.log(`${quanity}x ${name}, £${quanity * cost}`)
// }
// console.log("Total: £"+ totalCost)



// newCart.forEach( i => console.log(`${i.quantity}x ${i.name}, £${i.quantity * i.cost}`))
// console.log("Total: £"+ totalCost)