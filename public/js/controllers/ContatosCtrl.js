angular.module('delivery').controller('ContatosCtrl',
	function($scope, $rootScope, $location, ContatoService) {
		$scope.contatos = [];
		$scope.total = 0;
		$scope.filtro = '';
		$scope.mensagem = {texto: ''};
		$rootScope.activetab = $location.path();
		
		console.log("activetab: " + $rootScope.activetab);
		
		//var contatosAPI = $resource('/api/contatos/:id');

		$scope.incrementa = function() {
			$scope.total++;
		};
	
		function buscaContatos() {
			ContatoService.query(
				function(contatos) {
					$scope.contatos = contatos;
					$scope.mensagem = {};
				},
				function(erro) {
					console.log(erro);
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista'
					};
				}
			);
		}
		buscaContatos();		

		$scope.remove = function(contato) {
			console.log('Removendo o contato: ' + contato._id);
			ContatoService.delete({id: contato._id}, buscaContatos, 
				function(erro) {
					$scope.mensagem = {
						texto: 'Não foi possível remover o contato'
					};
					console.log(erro);
				}
			);
		};
	
});