const clientSchema = require('../models/client.model');

class ClientController {
    async create(req, res) {
        try {
            const client = await clientSchema.create(req.body);
            res.status(201).json(client);
        } catch (error) {
            if (error.name === 'ValidationError') {
                res.status(400).json({
                    message: "Error validation client",
                    error: error.errors
                });
            } else {
                res.status(500).json({
                    message: "Error while creating client",
                    error: error.message
                });
            }
        }
    }

    async getByCode(req, res) {
        try {
            const client = await clientSchema.findOne({ code: req.params.code });
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({
                    message: "client not found"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error while getting clients",
                error: error.message
            });
        }
    }

    async getAll(req, res) {
        try {
            const clients = await clientSchema.find();
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({
                message: "Error while getting clients",
                error: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const client = await clientSchema.findOneAndUpdate({ code: req.params.code}, req.body, {new: true});
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({
                    message: "client not found"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error while updating client",
                error: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const client = await clientSchema.findOneAndDelete({ code: req.params.code });
            if (client) {
                res.sendStatus(204);
            } else {
                res.status(404).json({
                    message: "client not found"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error while deleting client",
                error: error.message
            });
        }
    }
}

module.exports = ClientController;