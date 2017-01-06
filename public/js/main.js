var app = angular.module('delivery', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$httpProvider.interceptors.push('meuInterceptor');
	$routeProvider
		.when('/auth', {
			templateUrl: 'partials/auth.html'
		})
		.when('/contatos', {
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosCtrl'
		})
		.when('/contato/:contatoId', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoCtrl'
		})
		.when('/contato', {
			templateUrl: 'partials/contato.html',
			controller: 'ContatoCtrl'
		})
		.otherwise ({ 
			redirectTo: '/' 
		});
}]);
