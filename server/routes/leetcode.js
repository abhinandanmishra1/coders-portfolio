const express = require('express')

const lcController = require('../controllers/lcController')

const router = express.Router()

router.get('/languages', lcController.getLanguagesCount);
router.get('/tagProblemCounts', lcController.getTagProblemCounts);
router.get('/userContestRatingInfo', lcController.getUserContestRatingInfo);
router.get('/userProblemsSolvedInfo', lcController.getUserProblemsSolvedInfo);
router.get('/userBadgesInfo', lcController.getUserBadgesInfo);
router.get('/userRecentAcSubmissions', lcController.getUserRecentAcSubmissions);

module.exports = router