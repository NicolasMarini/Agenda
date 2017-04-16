
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactoSchema = new Schema({
	nombre: String,
	apellido: String,
	telefono: String,
	calle: String,
	calleNro: Number
});

var Contacto = mongoose.model('contactos', ContactoSchema);

module.exports = Contacto;
