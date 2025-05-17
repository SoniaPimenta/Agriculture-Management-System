const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  otp: String,        // stores the generated OTP
  otpExpiry: Date     // optional: when the OTP expires
});

module.exports = mongoose.model('User', userSchema);
