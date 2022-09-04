const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
	try {
		// custom shipping form and data to be added like name and address
		const { amount } = req.body;
		const paymentIntent = await stripe.paymentIntents.create({
			//demo shipping data
			shipping: {
				name: "Ak Zeno",
				address: {
					line1: "510 Townsend St",
					postal_code: "98140",
					city: "San Francisco",
					state: "CA",
					country: "US",
				},
			},
			amount,
			currency: "usd",
			payment_method_types: ["card"],
			description: "Software development services",
		});
		res.status(200).json({ paymentIntent });
	} catch (error) {
		res.status(400).json({ error });
	}
}
