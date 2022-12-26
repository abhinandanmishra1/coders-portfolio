const express = require('express')

const UserController = require('../controllers/userController')

const router = express.Router()

// userRoutes

router.route('/')
  .post(UserController.createUser)
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

router.route('/all')
  .get(UserController.getUsers)

module.exports = router
