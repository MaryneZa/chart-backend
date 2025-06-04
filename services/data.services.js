const { Data } = require('../models')

exports.create = async (data) => await Data.create(data);

exports.count = async () => await Data.countDocuments();
 