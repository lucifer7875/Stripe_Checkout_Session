const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.stripePayment = async (req, res) => {
    const { name, price, quantity } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: name,
                    },
                    unit_amount: price * 100,
                },
                quantity: quantity,
            },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });
    return ({ id: session.id });
}