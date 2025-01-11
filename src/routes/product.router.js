const express = require('express');
const productController = require('../controller/product.controller');

const router = express.Router();
const controller = new productController();

router.post('/', (req, res) => controller.create(req, res));
router.get('/:code', (req, res) => controller.getByCode(req, res));
router.get('/', (req, res) => controller.getAll(req, res));
router.put('/:code', (req, res) => controller.update(req, res));
router.delete('/:code', (req, res) => controller.delete(req, res));

module.exports = router;