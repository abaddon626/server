people = require('./../models/people-model')

exports.index = function(res){
    people.get(function(err, data){
        if(err){
            res.json({ status: 500, message: err })
        }
        res.json({ status: 200, message: data })
    })
}

exports.create = function(req, res){
    var data = new people()
    data.nombres = req.body.nombres
    data.apellidosc= req.body.apellidosc
    data.save(function(err){
        if(err)
            res.json({ status: 500, message: err })
        res.json({ status: 200, message: data })
    })
}

exports.view = function(req, res){
    people.findById(req.params, function(err, data){
        if(err)
            res.json({ status: 500, message: err })
        res.json({ status: 200, message: data })    
    })
}

exports.update = function(req, res){
    people.findById(req.params, function(err, data){
        if(err)
            res.json({ status: 500, message: err })
        data.nombres = req.body.nombres
        data.apellidosc= req.body.apellidosc
        data.save(function(err){
            if(err)
                res.json({ status: 500, message: err })
            res.json({ status: 200, message: data })
        })
    })
}

exports.delete = function(req, res){
    people.remove({
        _id: req.params._id
    }, function(err){
        if(err)
            res.json({ status: 500, message: err })
        res.json({ status: 200 })
    })
}