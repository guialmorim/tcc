import mongoose from 'mongoose';
const connection = {};

async function dbConnection() {
	if (connection.isConnected) {
		return;
	}

	const db = new mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	console.log('connected?', db.connections[0].readyState);
	connection.isConnected = db.connections[0].readyState;
}

export default dbConnection;
