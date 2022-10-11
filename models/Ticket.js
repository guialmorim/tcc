import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		default: new Date(),
	},
	expirationDate: {
		type: Date,
		default: new Date(new Date().getTime() + 30 * 60000), // Current date + 30 minutes
	},
	paymentId: String,
	userId: String,
	used: Boolean,
});

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);

export default Ticket;
