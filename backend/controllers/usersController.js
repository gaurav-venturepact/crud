let userInfo        =   require('../models/users');

exports.userGetAdmin = async function(req, res){
    let saveActivity = await userInfo.find({});

    if (saveActivity){
        res.send(saveActivity);
        console.log(saveActivity);
    }
}

exports.userPostAdmin = async function(req, res){

    console.log(req.body.post);
        if (req.body.post){

            new userInfo({
                "firstName" : req.body.post.firstName,
                "lastName" : req.body.post.lastName,
                "email" : req.body.post.email,
                "password": req.body.post.password
            }).save(function(err, doc){
                if (err) res.send(err)
                else {
                    res.json(doc);
                    console.log("Successfully inserted");
                } 
            });

        }   
}