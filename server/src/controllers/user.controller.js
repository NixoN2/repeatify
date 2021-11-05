const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = db.rest.models.user;

exports.getUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findOne({
        where: {
            id
        }
    });
    if (!user) {
        return res.status(400).send({
            message: `No user found with the id ${id}`
        })
    }
    return res.send(user);
};

exports.login = async (req,res) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).send({
            message: "You need to fill all form fields to login"
        })
    }
    const userExists = await User.findOne({
        where: {
            email
        }
    });
    if (!userExists){
        return res.status(400).send({
            message: "Invalid credentials"
        })
    }
    try {
        if (await bcrypt.compare(password,userExists.password)){
            const token = jwt.sign({
                user_id: userExists.id,
                email
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h"
            }
            );
            userExists.token = token;
            return res.status(200).send({
                userExists
            })
        }
    } catch(err) {
        return res.status(500).send({
            message: `${err.message}`
        })
    }

}

exports.register = async (req,res) => {
    const {email,first_name,last_name,password} = req.body;
    if (!email || !first_name || !last_name || !password) {
        return res.status(400).send({
            message: `You need to fill all form fields to register`
        })
    }
    let userExists = await User.findOne({
        where: {
            email
        },
    });

    if (userExists) {
        return res.status(409).send({
            message: 'An account with that username already exists!',
        });
    }
    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        let newUser = await User.create({
            email: email.toLowerCase(),
            first_name,
            last_name,
            password: encryptedPassword
        });
        const token = jwt.sign(
            { user_id: newUser.id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );
        newUser.token = token;
        return res.status(201).send(newUser);
    } catch (err) {
        return res.status(500).send({
            message: `${err.message}`
        })
    }
};

exports.updateUser = async (req,res) => {
    const {email,first_name,last_name,password, role} = req.body;
    const {id} = req.params;

    const user = await User.findOne({
        where: {
            id
        }
    });
    if (!user){
        return res.status(400).send({
            message: `User with ${id} doesn't exist`
        })
    }
    try {
        if (email) {
            user.email = email;
        }
        if (first_name) {
            user.first_name = first_name;
        }
        if (last_name) {
            user.last_name = last_name;
        }
        if (role) {
            user.role = role;
        }
        if (password) {
            user.password = password;
        }
        user.save();
        return res.send({
            message: `user ${id} has been updated`
        });
    } catch (err) {
        return res.status(500).send({
            message: `${err.message}`
        })
    }
};

exports.deleteUser = async (req,res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).send({
            message: 'Please provide id for user you are trying to delete'
        })
    };
    const user = await User.findOne({
        where: {
            id
        }
    });
    if (!user){
        return res.status(400).send({
            message: `User with ${id} doesn't exist`
        })
    }
    try {
        await user.destroy(id);
        return res.send({
            message: `user ${id} has been deleted`
        });
    } catch (err) {
        return res.status(500).send({
            message: `${err.message}`
        })
    }
};

