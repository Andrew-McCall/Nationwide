// Arrays and objects can be const. they can be updated while const
const constantArray = []
constantArray.push("Hello")
constantArray.push("World")
constantArray.reverse()
constantArray.push("!")
constantArray.pop()

// Cannot do const_var = new_data
// constantArray = []

console.log(constantArray)