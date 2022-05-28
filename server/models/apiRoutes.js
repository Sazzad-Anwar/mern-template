const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiSchema = new Schema({
    api: { type: String, required: true, index: true }
}, { timestamps: true });

module.exports = mongoose.model('Api', apiSchema);