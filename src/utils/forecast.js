const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=db8ebbf64a11f03e80b403469084b7e2&query='+ latitude + ',' + longitude + '&units=m'
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to find connect to location server!', undefined)
        }
        else if(response.body.error){
            callback('Unable to find location. Please try another search!', undefined)
        }
        else{
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature     + ' degrees out. There is '+ response.body.current.precip +'% chance of rain')
        }
    })
}

module.exports = forecast