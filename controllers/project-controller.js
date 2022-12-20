project = require('./../models/project-model')
people = require('./../models/people-model')

exports.index = function(req, res){
    project.get(function(err, data){
        if(err){
            res.json({ status: 500, message: err })
        }
        res.json({ status: 200, message: data })
    })
}

exports.create = function(req, res){
    people.findById(req.params.people, function(err, data){
        if(err)
            res.json({ status: 500, message: err })
            
        var data = new project()
        data.titulo = req.body.titulo
        data.alumno= data
        data.save(function(err){
            if(err)
                res.json({ status: 500, message: err })
            res.json({ status: 200, message: data })
        })
    })
}

exports.view = function(req, res){
    project.findById(req.params, function(err, data){
        if(err)
            res.json({ status: 500, message: err })
        res.json({ status: 200, message: data })    
    })
}

exports.delete = function(req, res){
    project.remove({
        _id: req.params
    }, function(err){
        if(err)
            res.json({ status: 500, message: err })
        res.json({ status: 200 })
    })
}