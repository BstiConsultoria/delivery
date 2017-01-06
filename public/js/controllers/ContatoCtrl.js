angular.module('delivery').controller('ContatoCtrl',
	function($scope, $routeParams, ContatoService) {
		// aqui continua no plural, é a rota no lado do servidor
		//var Contato = $resource('/api/contatos/:id');
		if($routeParams.contatoId) {
			ContatoService.get({id: $routeParams.contatoId},
				function(contato) {
					$scope.contato = contato;
					console.log($scope.contato);
				},
				function(erro) {
					$scope.mensagem = {
						texto: 'Contato não existe. Novo contato.'
					};
					console.log(erro);
				}
			);
		} else {
			$scope.contato = new ContatoService();
			console.log(new ContatoService());
		}
		
		$scope.salva = function() {
			$scope.contato.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					// limpa o formulário
					$scope.contato = new ContatoService();
				})
				.catch(function(erro) {
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
		};

		ContatoService.query(function(contatos) {
			$scope.contatos = contatos;
		});
});
