angular
	.module('customDirectives', [])
	
	.controller('Ctrl1', function($scope){
		$scope.names = ['Joe', 'Samanta', 'Emil'];

		$scope.addName = function(name) {
			if(name) {
				$scope.names.push(name);
				$scope.newName = "";
			}
		}

		$scope.remove = function(name) {
			var confirm = window.confirm("really?")

			if(confirm) {
				$scope.names = _.without($scope.names, name);
			}
		}

	});
