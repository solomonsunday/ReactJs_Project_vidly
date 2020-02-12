const chalk = require('chalk')
const square = (x) => {
    return x * x;
}

console.log(square(10));

const Add =
    function oldSquare(x) {
        return x + x
    }

console.log(Add(4));

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log(chalk.black.bgGreen.italic('Guest list for ' + this.name))

        this.guestList.forEach((guest) => {
            console.log(chalk.blue.bold(guest + " is attending this " + this.name))
        })
    }
}

event.printGuestList();

//Refractoring to use Arrow Functions.

// Array Find  Method

const users = [{
        name: 'Sunday Solomon',
        age: 29
    },
    {
        name: 'Amara Umeh',
        age: 28
    },
    {
        name: 'Bright Sunday',
        age: 34
    }
]

const user = users.find((user) => user.name === 'Sunday Solomon')
console.log(user)

// Debbugging NodeJS

// Asynchronous/ Non Blocking Node.Js  Async 101.



// console.log('Starting')

// // Waiting 2 second before running the function

// setTimeout(() => {
//     console.log("Starting in 2 seconds After other code")
// }, 2000)

// console.log("terminate this Program")

// console.log('Starting')

console.log("Starting")

// Waiting 2 second before running the function
//  Arrow function is in use here
setTimeout(() => {
    console.log("Starting in 2 seconds After other code")
}, 2000)

console.log("terminate this Program")





module.exports = square