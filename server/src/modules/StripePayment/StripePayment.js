const express = require('express');
const router = express.Router();
const stripePaymentController = require('./stripePaymentController');

router.post('/create-checkout-session', stripePaymentController.stripePayment)

module.exports = router