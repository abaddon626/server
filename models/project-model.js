var mongoose = require('mongoose')
var people = require('./people-model').schema

var projectSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    alumno: {
        type: people,
        required: true
    },
    creado: {
        type: Date,
        default: Date.now
    }    
})