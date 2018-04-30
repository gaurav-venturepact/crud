var express     =   require('express');
var router      =   express.Router();

var userController  = require('../controllers/usersController');

//Get Homepage

router.get('/', function (req, res) {
    res.json({
        'API': '1.0'
    });
});

router.get('/userGetAdmin', userController.userGetAdmin);

router.post('/postUser', userController.userPostAdmin);

module.exports = router;