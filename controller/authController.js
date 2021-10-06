const brcypt = require('bcryptjs');

let authModel = require('../models/authSchema');

const signUp = async (req,res) => {

    var checkUser = await authModel.findOne({
        email:req.body.email
    })
    if (checkUser) {
        res.status(200).send({result:checkUser,message:"Email Already Registered"})
    } else {
        // res.send({message:"SignUp Successfully"})
        var hashPass = await brcypt.hash(req.body.password,12);
        res.send({pass:hashPass})

        let userCreate = new authModel({
            email: req.body.email,
            password: hashPass
        })
    
        userCreate.save()
        .then((response) => {
            // console.log(response, "response success");
            res.status(200).send({result:response,message:"User SignUp Successfully"})
        })
        .catch((err) => {
            // console.log(err, "error");
            res.status(400).send({result:err.message,message:"Data Not Stored"})
        })
    }
}

const signIn = async (req,res) => {

    var checkUser = await authModel.findOne({
        email:req.body.email
    })
    if (checkUser) {
        
        var checkPass = await brcypt.compare(req.body.password, checkUser.password)

        if (checkPass) {

            res.status(200).send({message:"SignIn Successfully"})
        } else {

            res.status(403).send({message: "Incorrect Password"})
        }

        res.send({message:"Login Successfully"})
    } else {
        res.status(200).send({message:"Email not registered"})
    }
}

module.exports = {signUp, signIn}
