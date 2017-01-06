var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato existente

var _idProcurado = new ObjectID('586e5d89f6f322b2d63cb3ba');

MongoClient.connect('mongodb://127.0.0.1:27017/db_lakatitas',
	function(erro, db) {
		if(erro) throw err;
		db.collection('contatos').findOne({_id : _idProcurado},
			function(erro, contato) {
				if(erro) throw err;
				console.log(contato);
			}
		);
	}
);