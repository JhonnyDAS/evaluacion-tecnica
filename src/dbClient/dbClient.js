const mongoose = require('mongoose');
const config = require('./../config');

class dbClient {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(config.app.mongouri)
            console.log('Database connection successful');
        } catch (error) {
            console.error('Database connection error', error);
        }
    }

    async desconnect() {
        await mongoose.disconnect()
            .then(() => {
                console.log('Database disconnection successful');
            })
            .catch(err => {
                console.error('Database disconnection error');
            });
    }
}

module.exports = new dbClient();