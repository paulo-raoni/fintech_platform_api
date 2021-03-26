const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/financeController.js');

router.get('/financas', controller.getFinanceData);
router.post('/financas', controller.postFinanceData);
router.patch('/financas', controller.patchFinanceData);
router.delete('/financas', controller.deleteFinanceData);

module.exports = router;
