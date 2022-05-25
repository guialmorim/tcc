import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(req, res) {
	if (req.method == 'POST') {
		let event;

		try {
			// 1. Retrieve the event by verifying the signature using the raw body and secret.
			const rawBody = await buffer(req);
			const signature = request.headers['stripe-signature'];
			event = stripe.webhooks.constructEvent(
				rawBody.toString(),
				signature,
				process.env.STRIPE_WEBHOOK_SECRET
			);

			console.log('Success: ', event.id);

			// 2. Handle event type (and business logic here)
			if (event.type == 'checkout.session.completed') {
				console.log('Payment Received');
			} else {
				console.warn('Unhandled event type: ', event.type);
			}

			// 3. Return a response to acknowledge receipt of the event.
			res.json({ received: true });
		} catch (error) {
			console.error(error);
			res.status(400).send(`Webhook Error: ${error.message}`);
			return;
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
