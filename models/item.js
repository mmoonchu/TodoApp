const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  status: Boolean
}, {
  timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;