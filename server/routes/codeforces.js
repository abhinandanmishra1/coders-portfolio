const express = require('express')

const cfController = require('../controllers/cfController')

const router = express.Router()

router.get('/profile', cfController.getCfProfile);
router.get('/contestRatings', cfController.getCfContestRatings);

module.exports = router;
