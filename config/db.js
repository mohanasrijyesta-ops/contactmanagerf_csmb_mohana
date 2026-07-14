const mongoose = require("mongoose");
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mohana_user_1:sri123@cluster0.ramksyt.mongodb.net/contactsappName=Cluster0");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
