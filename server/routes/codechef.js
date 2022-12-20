const express = require('express')

const ccController = require('../controllers/ccController')

const router = express.Router()

router.get('/profile', ccController.getCcProfile)

module.exports = router
