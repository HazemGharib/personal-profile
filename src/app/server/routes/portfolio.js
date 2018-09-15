/*jshint esversion: 6 */
// Express
const express = require('express');
const router = express.Router();

// Third party packages
const Joi = require('joi');
const config = require('config');


/* Models */

// Contact Models
const address = {
    Line1: Joi.string(),
    Line2: Joi.string(),
    state: Joi.string().required(),
    country: Joi.string().required()
};
const contact = {
    email: Joi.string().required().min(6),
    mobile: Joi.string().required().min(6),
    currentAddress: Joi.object(address).required(),
    linkedinAccount: Joi.string().required().min(6),
    githubAccount: Joi.string().required().min(6),
    facebookAccount: Joi.string().required().min(6)
};

// Experience Models
const workExperienceEntry = {
    employerName: Joi.string(),
    role: Joi.string(),
    projectsDescription: Joi.string(),
    isCurrent: Joi.boolean(),
    startDate: Joi.date(),
    endDate: Joi.date(),
};
const trainingExperienceEntry = {
    organizationName: Joi.string(),
    field: Joi.string(),
    startDate: Joi.date(),
    endDate: Joi.date(),
};
const experience = {
    workExperience: Joi.object(workExperienceEntry),
    trainingExperience: Joi.object(trainingExperienceEntry),
};
/* Models End */


/* Routes */

router.get(['/','/profile'], (req, res, next) => {
    res.status(200).send({title: "Hazem Gharib [Full Stack Developer] - Profile"});
    next();
});

router.get('/contact', (req, res, next) => {
    const contatDetails = {
        email: 'hazem.gharib.8@gmail.com',
        mobile: '+60182829608',
        currentAddress: {
          Line1: 'Casa Mutiara',
          Line2: '17 Jalan Hang Isap, Bukit Bintang',
          state: 'Kuala Lumpur',
          country: 'Malaysia'
        },
        linkedinAccount: 'https://www.linkedin.com/in/hazemgharib/',
        githubAccount: 'https://github.com/HazemGharib/',
        facebookAccount: 'https://www.facebook.com/Hazem.GauBu'
    };

    let {schemaError} = Joi.validate(contatDetails, contact);
    if(schemaError) {res.status(500).send(`Error: ${schemaError}`); next(); return;}

    res.status(200).send(contatDetails);
    next();
});

router.get('/experience', (req, res, next) => {
    const experienceDetails = {
        workExperience: [
            {
                employerName: 'NabdaCare',
                role: 'Dot Net Developer',
                responsibilities: 'Lorem Ipsum',
                isCurrent: false,
                startDate: new Date(2015, 8, 1),
                endDate: new Date(2017, 10, 31),
            },
            {
                employerName: 'Virtual Calibre',
                role: 'SSO Consultant',
                responsibilities: 'Lorem Ipsum',
                isCurrent: false,
                startDate: new Date(2017, 11, 1),
                endDate: new Date(2018, 8, 31),
            },
            {
                employerName: 'Service Rocket',
                role: 'Agile Developer',
                responsibilities: 'Lorem Ipsum',
                isCurrent: true,
                startDate: new Date(2018, 9, 1),
                endDate: new Date(),
            },
        ],
        trainingExperience: [
            {
                organizationName: 'Information Technology Inistitiute [ITI]',
                field: 'Professional Developer Track [.Net Full Stack]',
                startDate: new Date(2014, 9, 1),
                endDate: new Date(2015, 6, 30),
            },
            {
                organizationName: 'IBM Egypt',
                field: 'Customer Relationship Management [CRM]',
                startDate: new Date(2014, 9, 1),
                endDate: new Date(2015, 6, 30),
            },
        ],
    };

    // let {schemaError} = Joi.validate(contatDetails, contact);
    // console.log(schemaError);
    // if(schemaError) {res.status(500).send(`Error: ${schemaError}`); next(); return;}

    res.status(200).send(experienceDetails);
    next();
});

router.get('/skills', (req, res, next) => {
    
    const skillsList = {
        technicalSkills: [
            { name: '.Net Stack', rating: 4.5 },
            { name: 'Node JS', rating: 4 },
            { name: 'Angular 2+', rating: 3.8 },
            { name: 'Agile', rating: 4.8 },            
        ],
        nonTechnicalSkills: [
            { name: 'Fast Learner', rating: 4.8 },
            { name: 'Hardworker', rating: 4.2 },
            { name: 'Creative', rating: 4 },
            { name: 'Self Motivated', rating: 4 },
        ],
        languageSkills: [
            { name: 'Arabic', rating: 5 },
            { name: 'English', rating: 4.8 },
            { name: 'German', rating: 2.5 },
            { name: 'French', rating: 2.5 },
        ]
    };

    // let {schemaError} = Joi.validate(contatDetails, contact);
    // console.log(schemaError);
    // if(schemaError) {res.status(500).send(`Error: ${schemaError}`); next(); return;}

    res.status(200).send(skillsList);
    next();
});

router.get('/config', (req, res, next) => {
    const configJSON = {
        "port" : config.has('port') ? config.get('port') : undefined,
        "baseUri" : config.has('baseUri') ? config.get('baseUri') : undefined,
    };

    console.log(`Server Config:`);
    console.log(configJSON);
    res.status(200).send(configJSON);
    next();
});

/* Routes End */

module.exports = router;