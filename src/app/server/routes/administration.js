/*jshint esversion: 6 */
// Express
const express = require('express');
const router = express.Router();

// Models
const portfolioModels = require('../models/portfolio.model');

/* Models */
let profileModel = portfolioModels.profileModel;
let contactModel = portfolioModels.contactModel;
let experienceModel = portfolioModels.experienceModel;
let skillsModel = portfolioModels.skillsModel;
/* Models End */

/* Routes */
router.put('/administration/profile/:Id', (req, res, next) => {
    if (req.params.Id !== undefined || req.params.Id !== null) {
        profileModel.findOneAndUpdate(
            { _id: req.params.Id },
            req.body,
            {new: true, upsert: true}
        ).then((data)=>{
            res.statusCode = 200;
            res.send(data);
            next();
        },(err)=>{
            console.log(err);
            res.statusCode = 500;
            res.send();
            next();
        });
    }
    else{
        res.statusCode = 500;
        res.send("Id not found");
        next();
    }
});

router.put('/administration/contact/:Id', (req, res, next) => {
    if (req.params.Id !== undefined || req.params.Id !== null) {
        contactModel.findOneAndUpdate(
            { _id: req.params.Id },
            req.body,
            {new: true, upsert: true}
        ).then((data)=>{
            res.statusCode = 200;
            res.send(data);
            next();
        },(err)=>{
            console.log(err);
            res.statusCode = 500;
            res.send();
            next();
        });
    }
    else{
        res.statusCode = 500;
        res.send("Id not found");
        next();
    }
});

router.put('/administration/experience/:Id', (req, res, next) => {
    if (req.params.Id !== undefined || req.params.Id !== null) {
        experienceModel.findOneAndUpdate(
            { _id: req.params.Id },
            req.body,
            {new: true, upsert: true}
        ).then((data)=>{
            res.statusCode = 200;
            res.send(data);
            next();
        },(err)=>{
            console.log(err);
            res.statusCode = 500;
            res.send();
            next();
        });
    }
    else{
        res.statusCode = 500;
        res.send("Id not found");
        next();
    }
});

router.put('/administration/skills/:Id', (req, res, next) => {
    if (req.params.Id !== undefined || req.params.Id !== null) {
        skillsModel.findOneAndUpdate(
            { _id: req.params.Id },
            req.body,
            {new: true, upsert: true}
        ).then((data)=>{
            res.statusCode = 200;
            res.send(data);
            next();
        },(err)=>{
            console.log(err);
            res.statusCode = 500;
            res.send();
            next();
        });
    }
    else{
        res.statusCode = 500;
        res.send("Id not found");
        next();
    }
});
/* Routes End */

module.exports = router;