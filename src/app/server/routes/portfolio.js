/*jshint esversion: 6 */
// Express
const express = require('express');
const router = express.Router();

// Third party packages
const Joi = require('joi');
const config = require('config');
const mongoose = require('mongoose');

// Initialize Mongoose
mongoose.connect(
    `mongodb://<dbuser>:<dbpassword>@${process.env.DB_STRING}`, 
    {
        auth: {
            user: process.env.DB_USER,
            password:process.env.DB_PASS
        },
        useNewUrlParser:true
    }, 
    function(err, client) {
        if (err) {
            console.log(err);
        }
        console.log('DB connection session started');
    }
);

/* Schema Configuration */
var ProfileSchema = new mongoose.Schema({
    profileSections:[{
        sectionName: String,
        sectionContent: String
    }]
});

var ContactSchema = new mongoose.Schema({
    email: String,
    mobile: String,
    currentAddress: {
        Line1: String,
        Line2: String,
        state: String,
        country: String
    },
    linkedinAccount: String,
    githubAccount: String,
    facebookAccount: String
});

var ExperienceSchema = new mongoose.Schema({
    workExperience: [
        {
            employerName: String,
            role: String,
            responsibilities: String,
            isCurrent: Boolean,
            startDate: Date,
            endDate: Date,
        }
    ],
    trainingExperience: [
        {
            organizationName: String,
            field: String,
            startDate: Date,
            endDate: Date,
        }
    ],
});

var SkillsScema = new mongoose.Schema({
    technicalSkills: [{ name: String, rating: Number }],
    nonTechnicalSkills: [{ name: String, rating: Number }],
    languageSkills: [{ name: String, rating: Number }],
});

/* Schema Configuration End */


/* Models */

let profileModel = mongoose.model('profile', ProfileSchema, 'profile');
let contactModel = mongoose.model('contact', ContactSchema, 'contact');
let experienceModel = mongoose.model('experience', ExperienceSchema, 'experience');
let skillsModel = mongoose.model('skills', SkillsScema, 'skills');

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