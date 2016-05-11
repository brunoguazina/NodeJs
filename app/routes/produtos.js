// CONFIGURACAO DAS ROTAS
module.exports = function (app) {
	app.get('/produtos',function(req,res){
		res.render('produtos/lista');
	});	
}
