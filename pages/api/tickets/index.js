import Ticket from '../../../models/ticket';
import dbConnection from '../../../services/dbConnection';

dbConnection();

export default async function handler(req, res) {
	const { method } = req;
	console.log(method);
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
			try {
				const ticket = {
					paymentId: 'paymentId_test',
					userId: 'userId_test',
				}; // new Ticket

				Ticket.create(ticket, function (error, newTicket) {
					if (error) return res.status(500).json({ success: false, error });
					res.status(200).json({ success: true, data: newTicket });
				});
			} catch (error) {
				console.error(error);
				res.status(500).json({ success: false, error: error });
			}
			break;

		default:
			break;
	}
}
