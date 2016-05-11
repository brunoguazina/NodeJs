// CARREGA O EXPRESS
var app = require('./config/express')();

// SERVIDOR
app.listen(3000, function(){
	console.log('servidor rodando');
});
