var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var contactoRouter = require('./src/routes/ContactoRoutes');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


require('./src/dbConnection');
var contactosCtrl = require('./src/controllers/ContactosCtrl');

app.use('/contactos', contactoRouter);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});