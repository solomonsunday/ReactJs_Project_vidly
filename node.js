const validator = require('validator')
const chalk = require('chalk')
const fs = require('fs')
const check = require('./index')
const command = process.argv[2]
const yargs = require('yargs')
const square = require('./playGround')
// so here i'm call my call back function from weather folder.
const geocode = require('./utils/weather')
const forecast = require('./utils/forecast')
const path = require('path')
const express = require('express')
yargs.version('1.1.0')


const node = express()
const publicDirectoryPath = path.join(__dirname, '../public')



node.use(express.static(publicDirectoryPath))


check();


fs.writeFileSync('notes.text', 'I live in lagos State');
console.log("Hello,How are you doing, this is just a test")
console.log(validator.isURL('https/mead.io')) // print: true
console.log(chalk.blueBright('Hello World'));
console.log(chalk.blue('Hello') + ' World' + chalk.red(' !'));
console.log(chalk.blue.bgRed.bold("Hello World!"));


if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note')
}


yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title', +argv.title)
        console.log('Body', +argv.body)
    }
})

console.log(yargs.argv)

// working with JSON

const book = {
    title: "Ego is the Enemy",
    aurthor: 'Ryan holiday'
}
const bookJson = JSON.stringify(book)
console.log(bookJson)

const bookObject = JSON.parse(bookJson)
console.log(bookObject.title)
console.log(bookObject.aurthor);


// ES6 Arrow Fuction


// this is a callback function for location geocode and  weather forecast.



geocode('Lagos', (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastdata)
    })
})


// Adding two function together is call callback Chainning.

// node.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

node.get('/weather', (req, res) => {
    res.send({
        forecast: 'Its a Little Cold',
        location: 'Lagos State'
    })
})


node.listen(3000, () => { // this takes two parameters, the port it will 
    //run on and a all back function.
    console.log('Server is up on port 3000')
})