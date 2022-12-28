const express = require('express')

const UserController = require('../controllers/userController')

const router = express.Router()

// userRoutes

router.route('/')
  .post(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

router.route('/login')
  .post(UserController.loginUser)

router.route('/signup')
  .post(UserController.createUser)

router.route('/all')
  .get(UserController.getUsers)

module.exports = router
