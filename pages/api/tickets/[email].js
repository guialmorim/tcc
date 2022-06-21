import Ticket from '../../../models/Ticket';
import dbConnection from '../../../services/dbConnection';

dbConnection();

export default async function handler(req, res) {
	const { method, query } = req;
	switch (method) {
		case 'GET':
			try {
				const { email } = query;
				const tickets = await Ticket.find({ userId: email });
				res.status(200).json({ success: true, data: tickets });
			} catch (error) {
				console.error(error);
				res.status(500).json({ success: false, error: error });
			}
			break;

		default:
			break;
	}
}
