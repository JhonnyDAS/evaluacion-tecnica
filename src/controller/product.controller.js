const productSchema = require('../models/product.model');

class ProductController {
    async create(req, res) {
        try {
            const product = await productSchema.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            if (error.name === 'ValidationError') {
                res.status(400).json({
                    message: "Error validation product",
                    error: error.errors
                });
            } else {
                res.status(500).json({
                    message: "Error while creating product",
                    error: error.message
                });
            }
        }
    }

    async getByCode(req, res) {
        try {
            const product = await productSchema.findOne({ code: req.params.code });
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({
                    message: "Product not found"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error while getting product",
                error: error.message
            });
        }
    }

    async getAll(req, res) {
        try {
            const products = await productSchema.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({
                message: "Error while getting products",
                error: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const product = await productSchema.findOneAndUpdate({ code: req.params.code}, req.body, {new: true});
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({
                    message: "Product not found"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error while updating product",
                error: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const product = await productSchema.findOneAndDelete({ code: req.params.code });
            if (product) {
                res.sendStatus(204);
            } else {
                res.status(404).json({
                    message: "Product not found"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error while deleting product",
                error: error.message
            });
        }
    }
}

module.exports = ProductController;