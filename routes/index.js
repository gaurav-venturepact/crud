var express     =   require('express');
var router      =   express.Router();

//Get Homepage

router.get('/', function(req, res){
    res.send("server working");
});

module.exports = router;