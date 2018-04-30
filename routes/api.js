var express     =   require('express');
var router      =   express.Router();

//Get Homepage

router.get('/', function (req, res) {
    res.json({
        'API': '1.0'
    });
});

module.exports = router;