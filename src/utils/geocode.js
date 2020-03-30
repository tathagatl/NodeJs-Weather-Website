const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidGF0aGFnYXRsIiwiYSI6ImNrOGQ5ZDZ4ZDA1d2YzcW4xdnlodWtoaDEifQ.ZXrZCzq-N4I7vPkACWA5Vg&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.message) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Inable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode