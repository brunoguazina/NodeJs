// INFRA
var mysql = require('mysql');

var connectMYSQL = function() {
	return mysql.createConnection({
		host : 'xmysql.equilibrig.com.br',
		user : 'equilibrig',
		password : '1234',
		database : 'equilibrig'
	});	
}

module.exports = function() {
	return connectMYSQL;
}