const express = require('express');
const cors = require('cors');
const {authRoute, userRoute, dataRoute} = require('./routes')
const authMiddleware = require('./middleware/auth.middleware')
var cookieParser = require('cookie-parser')

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}));

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use("/api/auth", authRoute)
app.use("/api/data", dataRoute)

app.use(authMiddleware)

app.use("/api/user", userRoute)


module.exports = app