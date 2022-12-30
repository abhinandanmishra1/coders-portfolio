const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    githubUsername: String,
    codeforcesUsername: String,
    hackerrankUsername: String,
    leetcodeUsername: String,
    codechefUsername: String,
    linkedinUrl: String,
    githubUrl: String,
    twitterUrl: String,
    instagramUrl: String,
    fullName: String,
    designation: String,
    resumeUrl: String,
    about: String,
    country: String,
    phone: String,
    address: String,
    experiences: [{
        id: String,
        startDate: Date,
        endDate: Date,
        company: String,
        designation: String,
        learnings: String
    }],
    education: [{
        id: String,
        school: String,
        degree: String,
        grade: String,
        startDate: Date,
        endDate: Date,
    }],
    projects: [{
        id: String,
        name: String,
        description: String,
        githubLink: String,
        websiteLink: String,
        skills: String
    }]
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
