import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const errorSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    IP: {
        type: String,
        required: true,
    },
    stack: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Errors = mongoose.model('Errors', errorSchema);

export default Errors;