/*jshint esversion: 6 */
// Express
const express = require('express');
const router = express.Router();

// Third party packages
const config = require('config');

// Models
const portfolioModels = require('../models/portfolio.model');

/* Models */
let profileModel = portfolioModels.profileModel;
let contactModel = portfolioModels.contactModel;
let experienceModel = portfolioModels.experienceModel;
let skillsModel = portfolioModels.skillsModel;
/* Models End */


/* Routes */
router.get(['/','/profile'], (req, res, next) => {
    let profileDetails;

    profileModel.find((err, data) => {
        if(err) console.log(err);
        if(data) profileDetails = data[0];
        
        res.statusCode = 200;
        res.send(profileDetails);
        next();
    });
});

router.get('/contact', (req, res, next) => {
   let contatDetails;

    contactModel.find((err, data) => {
        if(err) console.log(err);
        if(data) contatDetails = data[0];
        
        res.statusCode = 200;
        res.send(contatDetails);
        next();
    });
});

router.get('/experience', (req, res, next) => {
    let experienceDetails;

    experienceModel.find((err, data) => {
        if(err) console.log(err);
        if(data) experienceDetails = data[0];

        res.statusCode = 200;
        res.send(experienceDetails);
        next();
    });
});

router.get('/skills', (req, res, next) => {
    
    let skillsList;

    skillsModel.find((err, data) => {
        if(err) console.log(err);
        if(data) skillsList = data[0];
        
        res.statusCode = 200;
        res.send(skillsList);
        next();
    });
});

router.get('/config', (req, res, next) => {
    const configJSON = {
        "port" : config.has('port') ? config.get('port') : undefined,
        "baseUri" : config.has('baseUri') ? config.get('baseUri') : undefined,
    };

    console.log(`Server Config:`);
    console.log(configJSON);
    res.statusCode = 200;
    res.send(configJSON);
    next();
});
/* Routes End */

module.exports = router;