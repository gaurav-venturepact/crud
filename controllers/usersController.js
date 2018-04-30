let userInfo        =   require('../models/users');

exports.userGetAdmin = async function(req, res){
    let saveActivity = await userInfo.find({});

    if (saveActivity){
        res.send(saveActivity);
        console.log(saveActivity);
    }
}

exports.userPostAdmin = async function(req, res){

    console.log(req.body);

    new userInfo({
        "firstName" : req.body.firstName,
        "lastName" : req.body.lastName,
        "email" : req.body.email
    }).save(function(err, doc){
        if (err) res.send(err)
        else {
            res.json(doc);
            console.log("Successfully inserted");
        } 
    });
}