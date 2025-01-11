const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    },
    description: {
        type: String,
        default: '',
        min: 3,
        max: 255
    },
    imageUrl: { 
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    countInStock: {
        type: Number,
        default: 0,
        min: 0
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;