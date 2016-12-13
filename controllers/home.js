module.exports = function() {
	var controller = {};
	controller.index = function(req, res) {
		res.render('index', {nome: 'Sistema de Gestão de Delivery'});
	};
	return controller;
}