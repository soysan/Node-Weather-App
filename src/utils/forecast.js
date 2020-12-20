const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=39f976d66df3316b590e1b5fabc98442&query=' + longitude + ',' + latitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!.', null)
        } else if (body.success === false) {
            callback('Unable to find location. Try search again.', null)
        } else {
            callback(null, `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out. There is ${body.current.feelslike}% chance of rain.`)
        }
    })
}

module.exports = forecast
