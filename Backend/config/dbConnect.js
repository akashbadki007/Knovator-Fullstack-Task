const mongoose = require('mongoose');

exports.dbConnect = function() {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');
    } catch(err) {
        console.log('Error in connecting to the database');
        console.log(err);
        process.exit(1);
    }
}