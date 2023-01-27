const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, "Your title is not unique!"],
        required: [true, "Your product should have a title!"],
        minLength: [3, "Your title should have at least 3 characters!"]},
    price: {
        type: Number,
        required: [true, "Your product should have a price!"],
        min: [1, "Your price should be greater than 0!"]},
    description: {
        type: String,
        required: [true, "Your product should have a description!"],
        minLength: [10, "Your description should have at least 10 characters!"]},
}, { timestamps: true });

const Product = mongoose.model('product', productSchema.plugin(uniqueValidator));


module.exports = Product;