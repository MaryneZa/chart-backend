const data = require('../assets/example_data.json')
const dataService = require('../services/data.services')
async function addSampleData() {
    try {

        var count = await dataService.count();

        if (count > 0) {
            return;
        }

        console.log("[Data] Seeding sample data...");

        for (const record of data) {
            await dataService.create({
                publisheddate: record.publisheddate,
                keyword: record.keyword,
                engagement_view: record.engagement_view,
                engagement_comment: record.engagement_comment,
                engagement_share: record.engagement_share,
                engagement_like: record.engagement_like,
                engagement_love: record.engagement_love,
                engagement_sad: record.engagement_sad,
                engagement_wow: record.engagement_wow,
                engagement_angry: record.engagement_angry
            });
        };
    } catch (err) {
        throw err
    }
};

module.exports = addSampleData;
