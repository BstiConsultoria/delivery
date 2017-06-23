angular.module('delivery').factory('meuInterceptor',
	function($location, $q) {
		var interceptor = {
			responseError: function(resposta) {
				if (resposta.status == 401) {
					$location.path('/view/login');
				}
				return $q.reject(resposta);
			}
		}
		return interceptor;
	}
);