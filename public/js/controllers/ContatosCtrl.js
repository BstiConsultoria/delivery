angular.module('delivery').controller('ContatosCtrl',
	function($scope, $resource) {
		$scope.contatos = [];
		$scope.total = 0;
		$scope.filtro = '';

		$scope.init = function() {
			buscaContatos();
		};
		
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.remove = function(contato) {
			console.log(contato);
		};

		var _response = $resource('/api/contatos');
		
		function buscaContatos() {
			var _promise = _response.query().$promise;
		
			_promise
				.then(function(contatos) {
					$scope.contatos = contatos;
			})
			.catch(function(erro) {
				console.log(erro);
			});
		};
		$scope.init();
});