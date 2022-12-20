const express = require('express')

const ghController = require('../controllers/ghController')

const router = express.Router()

router.get('/profile', ghController.getGhProfile)
router.get('/followers', ghController.getFollowers)
router.get('/following', ghController.getFollowing)
router.get('/orgs', ghController.getOrgs)
router.get('/repos', ghController.getRepos)

module.exports = router
