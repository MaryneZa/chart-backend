const dataService = require('../services/data.services');


exports.timelineMessage = async (req, res) => {
    try {
        const { start_date, end_date } = req.query;
        const data = await dataService.timelineMessage(start_date, end_date);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ "error": err })
    }
}

exports.timelineKeyword = async (req, res) => {
    try {
        const { start_date, end_date } = req.query;
        const data = await dataService.timelineKeyword(start_date, end_date);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ "error": err })
    }

}

exports.timelineEngagement = async (req, res) => {
    try {
        const { start_date, end_date } = req.query;
        const data = await dataService.timelineEngagement(start_date, end_date);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ "error": err })
    }
}