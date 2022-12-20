let express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
let cors = require('cors')

let app = express()
let port = process.env.port || 3000
let routes = require("./routes")


app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())
app.use(cors())
app.options('*', cors())
app.use('/api', routes)

var db = mongoose.Connection

if(!db)
    console.log("Database Error");
    else
        console.log('Database Sucsess...')

app.listen(port, function(){
    console.log('Server Running...')
})