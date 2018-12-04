var express = require('express');
var router = express.Router();

var angryBirds = require('../modules/angry_birds');

router.get('/', function(request, response){
    var mustacheVariable = {
        birdList: angryBirds['birds']
    }
    response.render('./index', mustacheVariable)
})

router.get('/:id', function(request, response){
    var birdId = request.params.id;
    var bird = angryBirds['birds'][birdId]
    var mustacheVariable = {
        name: bird['name'],
        abilities: bird['abilities'],
        image: bird['image'],
        group: bird['group'],
        feels: bird['feels']
    }
    response.render('./show', mustacheVariable)
})

module.exports = router;