const express = require('express')

const hrController = require('../controllers/hrController')

const router = express.Router()

//gymRoutes 
router.get('/profile', hrController.getHrProfile)
router.get('/badges', hrController.getHrBadges)
router.get('/certificates', hrController.getCertificates)

module.exports = router
