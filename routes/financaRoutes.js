const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/financaController.js');

router.get('/financas', controller.getDadosFinanca);
router.post('/financas', controller.postDadosFinanca);
router.patch('/financas', controller.patchDadosFinanca);
router.delete('/financas', controller.deleteDadosFinanca);

module.exports = router;
