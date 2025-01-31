const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://tulshiprashadpandey892:Tulshi%40123@learningnode.wxnki.mongodb.net/collabEngine");
}

module.exports = connectDB ;
