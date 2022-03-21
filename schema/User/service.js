const UserModel = require('./model')
const { QueryTypes } = require('@sequelize/core');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


module.exports.getByUserId = async (id)=>{
    return await UserModel.findOne({where:{
        id
    }});
}

module.exports.login = async (email, password) => {
    let user = await UserModel.findOne({where:{
        email
    }})
    if(user === null || !(await bcrypt.compare(password, user.password))){
        throw new Error("Wring user name or password")
    }


    const token = jwt.sign(
        { id: user.id },
        process.env.TOKEN_KEY,
        {
        expiresIn: "5h",
        }
    );
    return token;
}

module.exports.signup = async (name, email, password) => {
    try{
        if (!(name && email && password)) {
            throw new Error("All input is required")
        }

        let user = await UserModel.findOne({where:{
            email
        }})
        if(user !== null){
            throw new Error("User already Exist")
        }

        encryptedUserPassword = await bcrypt.hash(password, 10);

        user = await  UserModel.create({name, email:email.toLowerCase(), password:encryptedUserPassword});

        const token = jwt.sign(
            { id: user.id },
            process.env.TOKEN_KEY,
            {
            expiresIn: "5h",
            }
        );
        return token
    }catch(err){
        console.error(err)
        throw err
    }
}