const { Data } = require('../models')

exports.create = async (data) => await Data.create(data);

exports.count = async () => await Data.countDocuments();

exports.timelineMessage = async (startDate, endDate) => await Data.timelineMessage(startDate, endDate);

exports.timelineKeyword = async (startDate, endDate) => await Data.timelineKeyword(startDate, endDate)

exports.timelineEngagement = async (startDate, endDate) => await Data.timelineEngagement(startDate, endDate);
 