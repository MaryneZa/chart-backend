const mongoose = require('mongoose');
const config = require('./config').development

const connectDB = async () => {
    try {
        const url = `mongodb://${config.mongodb.MONGO_USERNAME}:${config.mongodb.MONGO_PASSWORD}@localhost:${config.mongodb.MONGO_PORT}/${config.mongodb.MONGO_DATABASE}?authSource=admin`
        console.log(url)
        await mongoose.connect(url)
        console.log("MongoDB Connected !");
    } catch (err) {
        throw err
    }
}

module.exports = {
    mongoose,
    connectDB
}