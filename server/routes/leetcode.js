const express = require('express')

const lcController = require('../controllers/lcController')

const router = express.Router()

router.get('/userInfo', lcController.getUserInfo);
router.get('/languages', lcController.getLanguagesCount);
router.get('/tagProblemCounts', lcController.getTagProblemCounts);
router.get('/userContestRatingInfo', lcController.getUserContestRatingInfo);
router.get('/userProblemsSolvedInfo', lcController.getUserProblemsSolvedInfo);
router.get('/userBadgesInfo', lcController.getUserBadgesInfo);
router.get('/userRecentAcSubmissions', lcController.getUserRecentAcSubmissions);
router.get('/userContestRatingHistogram', lcController.getUserContestRatingHistogram);
router.get('/userProfileCalendar', lcController.getUserProfileCalendar);
router.get('/userDiscussionSolutions', lcController.getUserDiscussionSolutions);

module.exports = router
