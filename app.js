const express = require('express');
const cors = require('cors');
const {authRoute, userRoute} = require('./routes')
var cookieParser = require('cookie-parser')

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: '*', 
  credentials: true, 
}));

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)

module.exports = app