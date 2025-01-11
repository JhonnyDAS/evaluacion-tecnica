const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 255,
        default: 'User'
    },
    nit: {
        type: Number,
        default: 0,
        min: 0
    }
});

const client = mongoose.model('Client', clientSchema);

module.exports = client;