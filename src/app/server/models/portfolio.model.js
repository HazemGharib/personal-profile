/*jshint esversion: 6 */
// Third party packages
const mongoose = require('mongoose');

// Initialize Mongoose
mongoose.connect(
    `mongodb://<dbuser>:<dbpassword>@${process.env.DB_STRING}`, 
    {
        auth: {
            user: process.env.DB_USER,
            password:process.env.DB_PASS
        },
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, 
    function(err, client) {
        if (err) {
            console.log(err);
        }
        console.log(`DB ${process.env.DB_STRING} connection session started`);
    }
);

/* Schema Configuration */
var ProfileSchema = new mongoose.Schema({
    profileImage: String,
    profileHeadName: String,
    profileCurrentTitle: String,
    profileHeadLine: String,
    nationality: String,
    currentLocation: String,
    dateOfBirth: Date,
    profileSections:[{
        sectionName: String,
        sectionContent: String
    }]
});

var ContactSchema = new mongoose.Schema({
    email: String,
    mobile: String,
    currentAddress: {
        line1: String,
        line2: String,
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
            employerLogo: String,
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
            organizationLogo: String,
            field: String,
            startDate: Date,
            endDate: Date,
        }
    ],
});

var SkillsSchema = new mongoose.Schema({
    technicalSkills: [{ name: String, rating: Number }],
    nonTechnicalSkills: [{ name: String, rating: Number }],
    languageSkills: [{ name: String, rating: Number }],
});
/* Schema Configuration End */

/* Models */
let profileModel = mongoose.model('profile', ProfileSchema, 'profile');
let contactModel = mongoose.model('contact', ContactSchema, 'contact');
let experienceModel = mongoose.model('experience', ExperienceSchema, 'experience');
let skillsModel = mongoose.model('skills', SkillsSchema, 'skills');
/* Models End */

module.exports = { profileModel, contactModel, experienceModel, skillsModel };