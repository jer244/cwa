const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const Alias = require('../models/alias');

const router = express.Router();

/*
* API ROUTES
*/
router.get('/checkuser/:email', checkUser);
router.get('/checkcompany/:company', checkCompany);
router.post('/newUser', newUser);
router.post('/addDomain', addDomain);

module.exports = router;

/*
* CONTROLLER FUNCTIONS
*/

function checkUser(req, res) {
    //CHECK IF EMAIL IS IN USE
    User.findOne({ email: req.params.email })
        .then((user) => {
            if (user) {
                return res.send({ userExists: true, user: user })
            }
            //IF EMAIL NOT IN USE, CHECK IF COMPANY EXISTS
            else {
                const emailParts = req.params.email.split('@');
                console.log(emailParts[1]);
                Alias.findOne({ alias: emailParts[1] })
                    .then((company) => {
                        if (company) {
                            //COMPANY (BUT NOT USER) EXISTS
                            return res.send({ userExists: false, companyExists: true, company: company });
                        } else {
                            //NEITHER COMPANY NOR USER EXIST
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
function checkCompany(req, res) {
    Alias.findOne({ parent: req.params.company })
        .then((company) => {
            if (company) return res.send({ companyExists: true });
            else return res.send({ companyExists: false });
        })
}

//ADD NEW USER
function newUser(req, res) {
    //CONSTRUCT NEW USER
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password,
        company: req.body.company
    })
    //SAVE NEW USER
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
        parent: company,
        inviteOnly: true
    });
    //CHECK IF ALIAS ALREADY EXISTS, IF NOT, SAVE IT
    Alias.findOne({ alias: newAlias.alias }, function (err, user) {
        if (user) {
            console.log(`${user.alias} already in use`)
            return;
        } else {
            newAlias.save();
            return;
        }
    })
}

function addDomain(req, res) {
    //CONSTRUCT NEW ALIAS
    let newAlias = new Alias({
        alias: req.body.domain,
        parent: req.body.parent,
        inviteOnly: false
    })
    //SAVE NEW ALIAS
    newAlias.save();
    console.log(`${JSON.stringify(newAlias)} added`)
    return res.send({ domainAdded: true });
}

function handleError(err, res) {
    console.log(err);
}
