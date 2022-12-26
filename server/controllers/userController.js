const asyncHandler = require('express-async-handler')
const User = require('../models/user')

const createUser = asyncHandler(
    async (req, res) => {
        console.log(req)
        const {
          username,
          codeforcesUsername,
          hackerrankUsername,
          leetcodeUsername,
          codechefUsername,
          githubUsername
        }  = req.body;

        if(!username) {
            res.status(400).send({
              success : false,
              error: 'User name is required'
            })
            return;
        }

        const userExists = await User.findOne({ username });
        if(userExists) {
            res.status(400).send({
              success : false,
              error: 'User already exists'
            })
            return;
        }

        const userDetails = {};
        if(username) userDetails.username = username;
        if(codeforcesUsername) userDetails.codeforcesUsername = codeforcesUsername;
        if(leetcodeUsername) userDetails.leetcodeUsername = leetcodeUsername;
        if(hackerrankUsername) userDetails.hackerrankUsername = hackerrankUsername;
        if(codechefUsername) userDetails.codechefUsername = codechefUsername;
        if(githubUsername) userDetails.githubUsername = githubUsername;

        const user = await User.create(userDetails);

        if (user) {
          res.status(201).send({
            success: true,
            json: updateUser
          })
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
);

const updateUser = asyncHandler(
  async (req, res) => {
    const {
      username,
      codeforcesUsername,
      hackerrankUsername,
      leetcodeUsername,
      codechefUsername,
      githubUsername
    }  = req.body;

    const user = await User.findOne({username});
    if (user) {
      user.username = username || user.username
      user.codechefUsername = codechefUsername || user.codechefUsername
      user.githubUsername = githubUsername || user.githubUsername
      user.codeforcesUsername = codeforcesUsername || user.codeforcesUsername
      user.hackerrankUsername = hackerrankUsername || user.hackerrankUsername
      user.leetcodeUsername = leetcodeUsername || user.leetcodeUsername

      const updatedUser = await user.save()
      res.status(200).send({
        success: true,
        json: updateUser
      })
  } else {
      res.status(404)
      res.status(400).send({
        success : false,
        error: 'User not found'
      })
  }
  }
)

const deleteUser = asyncHandler(
    async (req, res) => {
      const {
        username,
      }  = req.body;
  
      const user = await User.findOne({username});

        if (user) {
            await user.remove()
            res.json({ 
              success:true,
              message: 'User removed' 
            })
        } else {
            res.status(404)
            res.status(400).send({
              success : false,
              error: 'User not found'
            })
        }
    }
)

const getUserById = asyncHandler(
    async (req, res) => {
      const {
        username,
      }  = req.query;
  
      console.log(req.query, username);

      const user = await User.findOne({username});

        if (user) {
            res.status(200).send({
              success: true,
              json: user
            })
        } else {
            res.status(404)
            res.status(400).send({
              success : false,
              error: 'User not found'
            })
        }
    }
)

const getUsers = asyncHandler(
    async (req, res) => {
        const users = await User.find({});
        if(!users){
            res.status(404);
            res.status(400).send({
              success : false,
              error: 'No users found'
            })
        }
        res.status(200).json(users);
    }
)

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
}
