const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    githubUsername: String,
    codeforcesUsername: String,
    hackerrankUsername: String,
    leetcodeUsername: String,
    codechefUsername: String,
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
