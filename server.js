const app = require('./app')
const {connectDB} = require('./config/database')
const config = require('./config/config')
function setup() {
    try {
        connectDB();
        app.listen(config.development.port, () => console.log(`Server listening on Port : ${config.development.port}`))
    } catch (err) {
        console.error('Unable to connect to the database:', err);
        throw err
    }
}

setup()