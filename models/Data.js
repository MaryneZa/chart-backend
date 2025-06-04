const { mongoose } = require('../config/database')

const dataSchema = new mongoose.Schema({
    publisheddate: {
        type: Date,
        require
    },
    keyword: {
        type: [String]
    },
    engagement_view: {
        type: Number,
        default: 0
    },
    engagement_comment: {
        type: Number,
        default: 0
    },
    engagement_share: {
        type: Number,
        default: 0
    },
    engagement_like:  {
        type: Number,
        default: 0
    },
    engagement_love: {
        type: Number,
        default: 0
    },
    engagement_sad: {
        type: Number,
        default: 0
    },
    engagement_wow: {
        type: Number,
        default: 0
    },
    engagement_angry: {
        type: Number,
        default: 0
    }
});

const Data = mongoose.model('Data',  dataSchema)

module.exports = Data