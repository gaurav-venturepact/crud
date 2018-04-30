let userInfo        =   require('../models/users');

exports.userGetAdmin = async function(req, res){
    let saveActivity = await userInfo.find({});

    if (saveActivity){
        res.send(saveActivity);
        console.log(saveActivity);
    }
}

exports.userPostAdmin = async function(req, res){

    console.log('Post user data');
    var newUser = new userInfo();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    
    newUser.save(function(err, insertedData){
        if (err){
            console.log('Error saving video');
        } else{
            res.json(insertedData);
        }
    });
}