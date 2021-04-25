const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	time: {
		type: String,
		required: true,
	},
	order: {
		type: [String],
		required: true,
	},
	suggestion: {
		type: String,
		required: true,
	},
});

const Order = mongoose.model("order", empSchema);

module.exports = Order;
