angular.module('delivery').factory('ContatoService', function($resource) {
	return $resource('/api/contatos/:id');
});