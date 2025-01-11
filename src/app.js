const express = require('express');
const config = require('./config');
const cors = require('cors');
const productRotuer = require('./routes/product.router');
const clientRotuer = require('./routes/client.router');
require('./dbClient/dbClient');

const app = express();

app.use(cors());
app.use(express.json());
app.set('port', config.app.port);

app.use('/api/products', productRotuer);
app.use('/api/clients', clientRotuer);

module.exports = app;