const router = require('express').Router()
var peopleController = require('./controllers/people-controller')

router.get('/', (res) =>  
    res.json({
        status: 200,
        message: 'OK'
    })
)

router.route('people')
    .get(peopleController.index)
    .post(peopleController.create)

router.route('people/:_id')
    .get(peopleController.view)
    .put(peopleController.update)
    .delete(peopleController.delete)

module.exports = router ;