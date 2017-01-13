var app = angular.module('delivery', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false,
		rewriteLinks: true
	});
	
	$httpProvider.interceptors.push('meuInterceptor');
	$routeProvider
		.when('/view/auth', {
			templateUrl: '/partials/auth.html'
		})
		.when('/view/contatos', {
			templateUrl: '/partials/contatos.html',
			controller: 'ContatosCtrl'
		})
		.when('/view/contato/:contatoId', {
			templateUrl: '/partials/contato.html',
			controller: 'ContatoCtrl'
		})
		.when('/view/contato', {
			templateUrl: '/partials/contato.html',
			controller: 'ContatoCtrl'
		})
		.otherwise ({ 
			redirectTo: '/view/' 
		});
}]);
