module.exports = function(app) {
	var controller = app.controllers.contato;
	app.route('/api/contatos').get(controller.listaContatos);
	app.route('/api/contatos/:id').get(controller.obtemContato).delete(controller.removeContato);
};