var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller')

//GET ROUTES
//Home Route
router.get('/home', controller.home);

//Results Route - Get
router.get('/results', controller.results);

router.get('/test', controller.test);


//POST ROUTES

router.post('/upload',controller.upload)


module.exports = router;
