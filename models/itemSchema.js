const Schema = require('mongoose').Schema;
require('./category');

const itemSchema = new Schema(
	{
		title: { type: String, required: true },
		image: String,
		description: { type: String },
		price: { type: Number, required: true, default: 0 },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
	},
	{
		timestamps: true,
	}
);

module.exports = itemSchema;
