const request = require('request');

// const url = 'https://api.darksky.net/forecast/cd2f30ab2478d62bb7c4f8720c74c754/37.8267,-122.4233?units=si'

// request({
//     url: url,
//     json: true
// }, (error, response) => {

//     console.log("It is currently " + response.body.currently.temperature + " Degrees out." + " there is a " + response.body.currently.precipProbability + " chances of rain");
// })

// working with call functions
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2NoaW5veWVyZW0wMDciLCJhIjoiY2s1eTBkNWlxMDBqbjNqb2ZqNmJxaWQ1ayJ9.UzW2knrAifdGi_TQs2YdJw'

    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.features.length === 0) {
            console.log('unable to find location')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }

        // console.log(latitude, longitude);
    })
}




// console.log(latitude, longitude);
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)

// }

// geocode('Nigeria', (data) => {
//     const open = JSON.stringify(data)
//     console.log(open)
// })


module.exports = geocode