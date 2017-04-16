
var express = require('express');
var Contacto = require('../model/Contacto');

module.exports.find = function(req, res, next){
  Contacto.find({}, function(err, data){
		console.log("DATA: " + data);
	});
};

module.exports.findById = function(req, res, next){
  Contacto.findById(req.params.id, function(err, data){
    console.log('ID: ' + req.params.id);
    console.log("DATA: " + data);
  });
};

module.exports.create = function(req, res, next){
  var cont = new Contacto({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    calle: req.body.calle,
    calleNro: req.body.calleNro
  });
  cont.save();
};

module.exports.delete = function(req, res, next){
  Contacto.remove(req.params.id);
}
