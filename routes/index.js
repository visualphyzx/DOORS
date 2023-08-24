var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller')


//Home Route
router.get('/home', controller.home);

//Results Route - Get
router.get('/results', controller.results);

router.get('/test', controller.test);

module.exports = router;
