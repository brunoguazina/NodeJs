// CARREGA O EXPRESS
var app = require('./config/express')();

// CARREGA MODULO DE ROTAS
var rotasProdutos = require('./app/routes/produtos')(app);

// SERVIDOR
app.listen(3000, function(){
	console.log('servidor rodando');
});
