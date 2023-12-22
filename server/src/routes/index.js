const express = require('express');
const router = express.Router();
const stripePayment = require('../modules/StripePayment/StripePayment')

// StripePayment route
router.use('/Stripepayment', stripePayment);


module.exports = router;