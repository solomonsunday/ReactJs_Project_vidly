 const path = require('path')
 const express = require('express');
 const hbs = require('hbs')
 const forecast = require('../web-server/public/js/utils/forecast')
 const geocode = require('./public/js/utils/geocode')

 //  console.log(__dirname, '/public')
 //  console.log(path.join(__dirname, '../'))

 const node = express()

 //  define paths for Express confiq
 const publicDirrectoryPath = path.join(__dirname, '/public')
 const viewsPath = path.join(__dirname, '/template/views')
 const partialsPath = path.join(__dirname, '/template/partials')

 // Setup handlebar engine and view location
 node.set('view engine', 'hbs')
 node.set('views', viewsPath)
 hbs.registerPartials(partialsPath)


 // setup static directory to serve
 node.use(express.static(publicDirrectoryPath))



 node.get('', (req, res) => {
     res.render('index', {
         title: "Weather App",
         name: "Solomon Sunday",
         footer: "Netop Dev."

     })
 })
 node.get('/about', (req, res) => {
     res.render('about', {
         title: 'ABOUT PAGE',
         name: 'Solomon Sunday',
         footer: "Netop Dev."

     })
 })

 node.get('/help', (req, res) => {
     res.render('help', {
         title: 'Help Page',
         name: "Solomon Sunday",
         footer: "Netop Dev."
     })
 })

 //  node.get('', (req, res) => {
 //      res.send('<h1> Weather </h1>')
 //  })

 node.get('/weather', (req, res) => {
     if (!req.query.address) {
         return res.send({
             error: 'You must provide an address'
         })
     }

     geocode(req.query.address, (error, {
         latitude,
         longitude,
         location
     } = {}) => {
         if (error) {
             return res.send({
                 error
             })
         }
         //  come back to this line of  code and resolve it.
         //  else if (res.error) {
         //      return res.send("Unable to connect to weather service!", undefined)
         //  }
         forecast(latitude, longitude, (error, forecastData) => {
             if (error) {
                 return res.send({
                     error
                 })
             }
             res.send({
                 forecast: forecastData,
                 location,
                 address: req.query.address
             })

         })
     })




     //  res.send({
     //      forecast: 'Its a little Cold Today',
     //      location: 'Lagos State',
     //      address: req.query.address
     //  })

 })




 node.get('/products', (req, res) => {

     if (!req.query.search) {
         return res.send({
             error: 'You must provide a search term.'
         })

     }
     console.log(req.query.search)
     res.send({
         products: []
     })
 })

 //  node.get('/help/*', (req, res) => {
 //      res.send('Help article not found')

 //  })


 //  node.get('*', (req, res) => {
 //      res.send('My 404 Page')

 //  })
 node.get('/help/*', (req, res) => {
     res.render('404', {
         title: '404',
         errorMessage: 'Help article not found',
         footer: 'Netop Dev.'

     })
 })

 node.get('*', (req, res) => {
     res.render('404', {
         title: '404',
         errorMessage: 'Page not found',
         footer: 'Netop Dev.'

     })
 })

 //  node.get('/about', (req, res) => {
 //      res.send('this is the About page!')
 //  })



 //  console.log('/web-server/public/imgs/weather-icon.png"')

 node.listen(3000, () => {
     console.log('Server is up on port 3000!')
 })