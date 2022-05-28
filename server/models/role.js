const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    role: { type: String, index: true },
    accessRoutes: [{ type: String, index: true }]
}, { timestamps: true });


module.exports = mongoose.model('Role', roleSchema);