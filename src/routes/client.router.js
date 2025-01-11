const express = require('express');
const clientController = require('../controller/client.controller');

const router = express.Router();
const controller = new clientController();

router.post('/', (req, res) => controller.create(req, res));
router.get('/:nit', (req, res) => controller.getByCode(req, res));
router.get('/', (req, res) => controller.getAll(req, res));
router.put('/:nit', (req, res) => controller.update(req, res));
router.delete('/:nit', (req, res) => controller.delete(req, res));

module.exports = router;