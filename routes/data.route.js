const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller');

router.get("/timeline-message", dataController.timelineMessage);
router.get("/timeline-keyword", dataController.timelineKeyword);
router.get("/timeline-engagement", dataController.timelineEngagement);


module.exports = router


