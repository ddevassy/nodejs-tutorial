//////////////////////////////
// blocking Code
//////////////////////////////
const getUserSync = require('./src/getuserSync')

const userOne = getUserSync(1)
Console.log(userOne)

const usertwo = getUserSync(2)
Console.log(usertwo)    

const sum = 1+ 2
console.log(sum)

//////////////////////////////
// Non-blocking Code
//////////////////////////////
const getUser = require('./src/getuserSync')

// Call backs for user 1
getUser(1, (user) => {
    console.log(user)
})

// Call backs  for user 2
getUser(2, (user) => {
    console.log(user)
})

const sum = 1 + 2
console.log(sum)