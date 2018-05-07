const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const Alias = require('../models/alias');

const router = express.Router();

/*
* API Routes
*/
router.get('/checkuser/:email', checkUser);
router.get('/checkcompany/:company', checkCompany);
router.post('/newUser', newUser);

module.exports = router;

/*
* Controller Functions
*/

function checkUser(req, res) {
    //CHECK IF EMAIL IS IN USE
    User.findOne({ email: req.params.email })
        .then((user) => {
            if (user) {
                return res.send({ userExists: true, user: user })
            }
            //IF EMAIL NOT IN USE, CHECK IF COMPANY EXISTS
            else
            {
                const emailParts = req.params.email.split('@');
                console.log(emailParts[1]);
                Alias.findOne({ alias: emailParts[1] })
                    .then((company) => {
                        if (company) {
                            return res.send({ userExists: false, companyExists: true, company: company });
                        } else {
                            return res.send({ userExists: false, companyExists: false });
                        }
                    })
                    .catch((err) => {
                        return handleError(err, res);
                    });
            }
        })
        .catch((err) => {
            return handleError(err, res);
        });
}

//CHECK IF PARENT COMPANY EXISTS
function checkCompany (req, res) {
    Alias.findOne({parent: req.params.company})
        .then((company) => {
            if(company) return res.send({companyExists: true});
            else return res.send({companyExists: false});
        })
}

//ADD NEW USER
function newUser(req, res) {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password,
        company: req.body.company
    })
    newUser.save()
        .then((order) => {
            //SAVE EMAIL DOMAIN AS ALIAS TO COMPANY, THEN RETURN
            saveAlias(order.email, order.company);
            return res.send({ orderCreated: true, order: order })
        })
        .catch((err) => {
            return handleError(err, res);
        });
}

//SAVE EMAIL DOMAIN AS ALIAS FOR PARENT COMPANY
function saveAlias(email, company) {
    const emailParts = email.split('@');
    const newAlias = new Alias({
        alias: emailParts[1],
        parent: company
    })
    newAlias.save()
        .catch((err) => {
            return handleError(err, res);
        });
}

function handleError(err, res) {
    console.log(err);
}
