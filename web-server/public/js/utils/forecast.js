const request = require('request');

const forecast = (latitude, longitude, comeback) => {
    const url = 'https://api.darksky.net/forecast/cd2f30ab2478d62bb7c4f8720c74c754/' + latitude + ', ' + longitude


    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            comeback('Unable to connect to the Forecast Server!', undefined)
        } else if (response.body.error) {
            comeback('Unable to find the location', undefined)
        } else {
            comeback(undefined, response.body.daily.data[0].summary + "It is currently " + response.body.currently.temperature + " Degrees out." + " there is a " + response.body.currently.precipProbability + " chances of rain");

        }
    })
}

module.exports = forecast //this is to share it with other module.