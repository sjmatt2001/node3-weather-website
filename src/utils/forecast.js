const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ff1f302df92474158b0bef5ddc71f27&query=' + latitude + ',' + longitude +'&units=m'
    request({url, json: true, }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!',undefined)
        } else if  (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is curently " + body.current.temperature + " degrees out.  It feels like: " + body.current.feelslike +" degrees! The wind speed is: " + body.current.wind_speed + " mph. The humidity is: " + body.current.humidity + " %."
            )
        }

    })
}

module.exports = forecast

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2ptYXR0MjAwMSIsImEiOiJja2JqZDI5dTEwbzNhMndxdm1taXF2ZW0xIn0.Uhc_8exXpg8n3tB6fgv5-Q&limit=1'

//     request({url: url, json: true, }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!',undefined)
//         } else if  (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }

//     })
// }

// const url = 'http://api.weatherstack.com/current?access_key=5ff1f302df92474158b0bef5ddc71f27&query=51.88111,-122.4233-2.24333'

// request ({url: url, json: true}, (error, response) => {
//     if (error){
//         console.log("Unable to connect to weather service")
//     } else if (response.body.error){
//         console.log("Unable to find location")
//         console.log(response.body.error.info)
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is curently " + response.body.current.temperature + " degrees out.  It feels like: " + response.body.current.feelslike +" degrees out!")
//         }    
    
// })