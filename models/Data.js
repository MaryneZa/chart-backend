const { mongoose } = require('../config/database')

const dataSchema = new mongoose.Schema({
    publisheddate: {
        type: Date,
        require
    },
    keyword: {
        type: String
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
    engagement_like: {
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
}, {
    statics: {
        async timelineMessage(start, end) {
            const from = new Date(`${start}T00:00:00+07:00`);
            const to = new Date(`${end}T23:59:59.999+07:00`);

            const result = await this.aggregate([
                {
                    $match: {
                        publisheddate: { $gte: from, $lte: to },
                    }
                },
                {
                    $group: {
                        _id: {
                            date: { $dateToString: { format: "%Y-%m-%d", date: "$publisheddate", timezone: "+07:00" } },
                        },

                        count: { $sum: 1 }      // count documents in each group
                    },
                },
                {
                    $sort: { "_id.date": 1 }
                },
                {
                    $group: {
                        _id: null,
                        dates: { $push: '$_id.date' },
                        counts: { $push: '$count' }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        dates: 1,
                        counts: 1
                    }
                }
            ])
            return result[0]
        },
        async timelineKeyword(start, end) {
            const from = new Date(`${start}T00:00:00+07:00`);
            const to = new Date(`${end}T23:59:59.999+07:00`);

            const result = await this.aggregate([
                {
                    $match: {
                        keyword: { $exists: true, $type: "string", $ne: "" },
                        publisheddate: { $gte: from, $lte: to },
                    }
                },
                {
                    $project: {
                        date: { $dateToString: { format: "%Y-%m-%d", date: "$publisheddate", timezone: "+07:00" } },
                        keywords: "$keyword",
                    },
                },
                {
                    $group: {
                        _id: {
                            date: "$date",
                            keyword: "$keywords"
                        },
                        count: { $sum: 1 }
                    },
                },
                {
                    $group: {
                        _id: {
                            keywords: "$_id.keyword"
                        },
                        dates: { $push: '$_id.date' },
                        counts: { $push: '$count' }
                    },
                },
                {
                    $project: {
                        _id: 0,
                        keywords: "$_id.keywords",
                        dates: 1,
                        counts: 1
                    }
                }
            ]);
            return result
        },
        async timelineEngagement(start, end) {
            const from = new Date(`${start}T00:00:00+07:00`);
            const to = new Date(`${end}T23:59:59.999+07:00`);

            const result = await this.aggregate([
                {
                    $match: {
                        publisheddate: { $gte: from, $lte: to },
                    }
                },
                {
                    $project: {
                        date: { $dateToString: { format: "%Y-%m-%d", date: "$publisheddate", timezone: "+07:00" } },
                        engagement_comment: 1,
                        engagement_share: 1,
                        engagement_like: 1,
                        engagement_love: 1,
                        engagement_sad: 1,
                        engagement_wow: 1,
                        engagement_angry: 1
                    }
                },
                {
                    $group: {
                        _id: "$date",
                        engagement_comment: { $sum: "$engagement_comment" },
                        engagement_share: { $sum: "$engagement_share" },
                        engagement_like: { $sum: "$engagement_like" },
                        engagement_love: { $sum: "$engagement_love" },
                        engagement_sad: { $sum: "$engagement_sad" },
                        engagement_wow: { $sum: "$engagement_wow" },
                        engagement_angry: { $sum: "$engagement_angry" },
                    }
                },
                {
                    $addFields: {
                        engagement_total: {
                            $add: [
                                "$engagement_comment",
                                "$engagement_share",
                                "$engagement_like",
                                "$engagement_love",
                                "$engagement_sad",
                                "$engagement_wow",
                                "$engagement_angry"
                            ]
                        }
                    }
                },
                {
                    $sort: { _id: 1 }
                },
                {
                    $project: {
                        _id: 0,
                        date: "$_id",
                        engagement_comment: 1,
                        engagement_share: 1,
                        engagement_like: 1,
                        engagement_love: 1,
                        engagement_sad: 1,
                        engagement_wow: 1,
                        engagement_angry: 1,
                        engagement_total: 1
                    }
                }

            ]);

            return result

        }
    }
});

const Data = mongoose.model('Data', dataSchema)

module.exports = Data