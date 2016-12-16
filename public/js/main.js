var app = angular.module('delivery', ['ngRoute', 'ngResource']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosCtrl'
		})
		.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoCtrl'
		})
		.otherwise ({ 
			redirectTo: '/' 
		});
		
}]);
