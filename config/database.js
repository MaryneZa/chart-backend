const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect('mongodb://rootuser:rootpassword@127.0.0.1:27027/mydatabase'); // with auth
    //   await mongoose.connect('mongodb://127.0.0.1:27027/test');
    console.log("MongoDB Connected !");
}

exports.module = {
    mongoose,
    connectDB
}