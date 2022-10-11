import Ticket from '../../../models/Ticket';
import dbConnection from '../../../services/dbConnection';

dbConnection();

export default async function handler(req, res) {
	const { method, body } = req;
	switch (method) {
		case 'GET':
			try {
				const tickets = await Ticket.find();
				res.status(200).json({ success: true, data: tickets });
			} catch (error) {
				console.error(error);
				res.status(500).json({ success: false, error: error });
			}
			break;

		case 'POST':
			try {
				const { paymentId, userId } = body;

				const ticket = {
					paymentId,
					userId,
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

		case 'PUT':
			try {
				const { ticketId } = body;

				const filter = { _id: ticketId };
				const update = { used: true };

				console.log(filter);
				console.log(update);

				let updatedTicket = await Ticket.findOneAndUpdate(filter, update, {
					new: true,
				});

				res.status(200).json({ success: true, data: updatedTicket });
			} catch (error) {
				console.error(error);
				res.status(500).json({ success: false, error: error });
			}
			break;

		default:
			break;
	}
}
