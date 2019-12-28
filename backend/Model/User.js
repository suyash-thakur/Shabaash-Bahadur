const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, require: true},
    mobile: {type: Number, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    vehicle: [{ vehicleType: String, model: String, company:String, registrationNumber: String }],
    whatsApp: {type: String},
    startDate: Date,
    txnid: String,
    address: String
});

module.exports = mongoose.model("AppUser", userSchema);
