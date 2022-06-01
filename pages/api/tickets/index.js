import Ticket from '../../../models/ticket';
import dbConnection from '../../../services/dbConnection';

dbConnection();

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const tickets = await Ticket.find({});
				res.status(200).json({ success: true, data: tickets });
			} catch (error) {
				console.error(error);
				res.status(500).json({ success: false, error: error });
			}
			break;

		case 'POST':
			break;

		default:
			break;
	}
}
