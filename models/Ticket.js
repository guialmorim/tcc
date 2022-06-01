import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);

export default Ticket;
