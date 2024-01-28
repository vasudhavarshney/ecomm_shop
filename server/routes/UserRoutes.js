const twilio = require('twilio');
const randomstringssss = require('randomstring');
const express = require('express');
const router = express.Router();

// Replace with your Twilio credentials
const accountSid = 'AC0e3ef8226c92695b3b6d853c3ec368c6';
const authToken = '442e12a3b57a6a285b33fc2bc859bf35';
const twilioPhoneNumber = '+919761072991';

const client = twilio(accountSid, authToken);

router.post('/send-otp', (req, res) => {
  const { phoneNumber } = req.body;

  // Generate a random 6-digit OTP
  const otp = randomstringssss.generate({ length: 6, charset: 'numeric' });

  // Save the OTP to associate it with the user
  // (In a production environment, you'd typically use a database)
  // For simplicity, we'll use an in-memory object here
  const otpData = {
    phoneNumber,
    otp,
  };

  // Send the OTP via Twilio
  client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    })
    .then(() => {
      res.json({ message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error sending OTP' });
    });
});

module.exports = router;
