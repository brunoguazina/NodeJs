// CONFIGURACAO DO EXPRESS
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

// RETORNA PARA O APP
module.exports = function() {

	var app = express();
	
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
 	app.use(bodyParser.urlencoded({extended:true}));

	load('routes',{cwd: 'app'})
		.then('infra') 
		.into(app);

	return app;	
};
