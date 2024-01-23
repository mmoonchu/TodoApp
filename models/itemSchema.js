const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  status: Boolean
}, {
  timestamps: true
});

module.exports = itemSchema;
