// CONFIGURACAO DAS ROTAS
module.exports = function (app) {
	app.get('/produtos',function(req,res){
		// INFRA
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host : 'xmysql.equilibrig.com.br',
			user : 'equilibrig',
			password : '1234',
			database : 'equilibrig'
		});
		
		connection.query('select * from livros',function(err,results){
			res.render('produtos/lista',{lista:results});
		}); 

		connection.end();

	});	
}
