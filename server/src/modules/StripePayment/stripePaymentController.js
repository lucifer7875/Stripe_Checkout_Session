const stripePaymentUtils = require('./stripePaymentUtils');

exports.stripePayment = async (req, res) => {
    try {
        const result = await stripePaymentUtils.stripePayment(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}; 