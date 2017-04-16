var express = require('express');
var contactoCtrl = require('../controllers/ContactosCtrl');
var router = express.Router();

router.get('/', contactoCtrl.find);
router.get('/:id', contactoCtrl.findById);
router.post('/nuevo', contactoCtrl.create);
router.delete('/eliminar/:id', contactoCtrl.delete);


module.exports = router;