var mongoose = require('mongoose')

var peopleSchema = mongoose.Schema({
        nombres: {
            type: String,
            required: true
        },
        apellidosc: {
            type: String,
            required: true
        },
        creado: {
            type: Date,
            default: Date.now
        }
    },
    { collection: 'proyecto.people'}
)

var people = module.exports = mongoose.model('proyecto.people', peopleSchema)

module.exports.get = function(callback, limit){
    people.find(callback).limit(limit)
}

