require('dotenv').config()

const app = require('./app')
const { connectDB } = require('./config/database')
const { initCollections } = require('./models')
const addSampleData = require('./utils/sample_data')

const config = require('./config/config').development
const setup = async () => {
    try {
        await connectDB();
        await initCollections();

        await addSampleData();

        app.listen(config.port, () => console.log(`Server listening on Port : ${config.port}`))
    } catch (err) {
        console.error('Unable to connect to the database:', err);
        throw err
    }
}

setup();